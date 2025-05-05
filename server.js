const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware pour parser les requêtes JSON et formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  // In production, serve the built Vue app from the dist directory
  app.use(express.static(path.join(__dirname, "dist")));
} else {
  // In development, serve static files from the public directory
  app.use(express.static(path.join(__dirname, "public")));

  // Define routes for the different views in development mode
  const devRoutes = [
    "/",
    "/services",
    "/menage",
    "/repas",
    "/contact",
    "/faq",
    "/responsive-test",
  ];

  devRoutes.forEach((route) => {
    app.get(route, (req, res) => {
      const fileName =
        route === "/" ? "index.html" : `${route.substring(1)}.html`;
      res.sendFile(path.join(__dirname, "views", fileName));
    });
  });
}

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
      status: "pending",
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

// API pour l'interface d'administration
// Récupérer toutes les demandes de contact
app.get("/api/admin/contacts", (req, res) => {
  try {
    const contacts = global.contactSubmissions || [];
    res.status(200).json({
      success: true,
      contacts: contacts,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des contacts:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la récupération des contacts.",
    });
  }
});

// Récupérer toutes les demandes de rappel
app.get("/api/admin/callbacks", (req, res) => {
  try {
    const callbacks = global.callbackRequests || [];
    res.status(200).json({
      success: true,
      callbacks: callbacks,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des demandes de rappel:",
      error
    );
    res.status(500).json({
      success: false,
      message:
        "Une erreur est survenue lors de la récupération des demandes de rappel.",
    });
  }
});

// Mettre à jour le statut d'une demande de rappel
app.put("/api/admin/callbacks/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!global.callbackRequests) {
      return res.status(404).json({
        success: false,
        message: "Aucune demande de rappel trouvée.",
      });
    }

    const callbackIndex = global.callbackRequests.findIndex(
      (cb) => cb.id === id
    );

    if (callbackIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Demande de rappel non trouvée.",
      });
    }

    global.callbackRequests[callbackIndex].status = status;

    res.status(200).json({
      success: true,
      message: "Statut mis à jour avec succès.",
      callback: global.callbackRequests[callbackIndex],
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de la mise à jour du statut.",
    });
  }
});

// In production, handle all other routes by serving the index.html (for Vue Router)
if (isProduction) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(
    `Le serveur Harmonie Services est en cours d'exécution sur http://localhost:${PORT}`
  );
  console.log(`Mode: ${isProduction ? "Production" : "Développement"}`);
  console.log("Server started successfully");
});
