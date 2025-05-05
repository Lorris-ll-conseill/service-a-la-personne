const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002; // Changement du port à 3002

// Middleware pour parser les requêtes JSON et formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for the different views
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/menage", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "menage.html"));
});

app.get("/repas", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "repas.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "faq.html"));
});

app.get("/responsive-test", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "responsive-test.html"));
});

// API pour gérer les soumissions de formulaire
app.post("/api/contact", (req, res) => {
  try {
    // Récupérer les données du formulaire
    const formData = req.body;

    // Valider les données basiques
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return res.status(400).json({
        success: false,
        message: "Veuillez remplir tous les champs obligatoires.",
      });
    }

    // Stocker les données en mémoire (dans un environnement de production,
    // vous les stockeriez dans une base de données)
    if (!global.contactSubmissions) {
      global.contactSubmissions = [];
    }

    // Ajouter un ID et un timestamp
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData,
    };

    // Stocker la soumission
    global.contactSubmissions.push(submission);
    console.log("Nouveau message de contact reçu:", submission);
    console.log(`Total des messages: ${global.contactSubmissions.length}`);

    // Simuler un délai pour l'expérience utilisateur
    setTimeout(() => {
      // Répondre avec un message de succès
      res.status(200).json({
        success: true,
        message:
          "Votre message a été envoyé avec succès! Nous vous répondrons sous 24h.",
        submissionId: submission.id,
      });
    }, 1000);
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message.",
    });
  }
});

// API pour gérer les demandes de rappel
app.post("/api/callback", (req, res) => {
  try {
    const callbackData = req.body;

    // Valider les données basiques
    if (!callbackData.name || !callbackData["callback-phone"]) {
      return res.status(400).json({
        success: false,
        message: "Veuillez fournir au moins votre nom et numéro de téléphone.",
      });
    }

    // Stocker les données en mémoire
    if (!global.callbackRequests) {
      global.callbackRequests = [];
    }

    // Ajouter un ID et un timestamp
    const request = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...callbackData,
    };

    // Stocker la demande
    global.callbackRequests.push(request);
    console.log("Nouvelle demande de rappel reçue:", request);
    console.log(
      `Total des demandes de rappel: ${global.callbackRequests.length}`
    );

    setTimeout(() => {
      res.status(200).json({
        success: true,
        message:
          "Votre demande de rappel a été enregistrée! Un conseiller vous contactera sous peu.",
        requestId: request.id,
      });
    }, 800);
  } catch (error) {
    console.error("Erreur lors du traitement de la demande de rappel:", error);
    res.status(500).json({
      success: false,
      message:
        "Une erreur est survenue lors de l'enregistrement de votre demande.",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Le serveur Harmonie Services est en cours d'exécution sur http://localhost:${PORT}`
  );
});
