<template>
  <section class="openai-chat">
    <div class="container">
      <div class="section-title">
        <h2>Assistant IA</h2>
        <p>Posez votre question à notre assistant IA alimenté par OpenAI</p>
      </div>

      <div class="chat-container">
        <div class="chat-input">
          <textarea
            v-model="prompt"
            placeholder="Entrez votre question ici..."
            rows="4"
            @keyup.ctrl.enter="sendPrompt"
          ></textarea>
          <button @click="sendPrompt" :disabled="isLoading" class="send-button">
            <span v-if="isLoading">Traitement en cours...</span>
            <span v-else>Envoyer</span>
          </button>
        </div>

        <div v-if="response || error" class="chat-response">
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          <div v-else class="response-content">
            <h3>Réponse:</h3>
            <p>{{ response }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const prompt = ref("");
const response = ref("");
const isLoading = ref(false);
const error = ref("");

const sendPrompt = async () => {
  if (!prompt.value.trim()) return;

  isLoading.value = true;
  error.value = "";
  response.value = "";

  try {
    const result = await fetch("/api/openai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt.value,
      }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(
        errorData.message || "Erreur lors de la communication avec le serveur"
      );
    }

    const data = await result.json();
    response.value = data.result;
  } catch (err) {
    error.value =
      err.message ||
      "Une erreur est survenue lors de la communication avec l'API";
    console.error("Error:", err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.openai-chat {
  padding: 3rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title h2 {
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  padding-bottom: 1rem;
  font-size: 2rem;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
}

.section-title p {
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.chat-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.chat-input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.chat-input textarea {
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.chat-input textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

.send-button {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  align-self: flex-end;
}

.send-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.send-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.chat-response {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e1e1e1;
}

.error-message {
  color: #e74c3c;
  padding: 1rem;
  background-color: #fdf0ef;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.response-content h3 {
  color: #333;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.response-content p {
  line-height: 1.6;
  color: #444;
  white-space: pre-wrap;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .chat-input {
    flex-direction: column;
  }

  .send-button {
    width: 100%;
    margin-top: 0.5rem;
  }
}
</style>
