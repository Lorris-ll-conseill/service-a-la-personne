<template>
  <div class="admin-dashboard">
    <section class="admin-header">
      <div class="container">
        <div class="section-title">
          <h1>Tableau de bord administrateur</h1>
          <p>Gérez les demandes de contact et de rappel reçues via le site</p>
        </div>
      </div>
    </section>

    <section class="admin-content">
      <div class="container">
        <div class="admin-tabs">
          <button
            class="admin-tab"
            :class="{ active: activeTab === 'contacts' }"
            @click="activeTab = 'contacts'"
          >
            Demandes de contact <span class="badge">{{ contacts.length }}</span>
          </button>
          <button
            class="admin-tab"
            :class="{ active: activeTab === 'callbacks' }"
            @click="activeTab = 'callbacks'"
          >
            Demandes de rappel <span class="badge">{{ callbacks.length }}</span>
          </button>
        </div>

        <div class="admin-actions">
          <button class="btn btn-primary" @click="refreshData">
            <i class="fas fa-sync-alt"></i> Rafraîchir
          </button>
        </div>

        <div v-if="loading" class="loading-state">
          <i class="fas fa-spinner fa-spin"></i> Chargement...
        </div>

        <div v-else-if="error" class="error-state">
          <i class="fas fa-exclamation-triangle"></i> {{ error }}
          <button class="btn btn-primary" @click="refreshData">
            Réessayer
          </button>
        </div>

        <!-- Contacts Table -->
        <div v-if="activeTab === 'contacts' && !loading" class="data-table">
          <div v-if="contacts.length === 0" class="empty-state">
            Aucune demande de contact n'a été reçue.
          </div>
          <table v-else>
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="contact in contacts" :key="contact.id">
                <td>{{ formatDate(contact.timestamp) }}</td>
                <td>{{ contact.name }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ getServiceLabel(contact.service) }}</td>
                <td>
                  <button
                    class="btn-icon"
                    @click="viewDetails(contact, 'contact')"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Callbacks Table -->
        <div v-if="activeTab === 'callbacks' && !loading" class="data-table">
          <div v-if="callbacks.length === 0" class="empty-state">
            Aucune demande de rappel n'a été reçue.
          </div>
          <table v-else>
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Téléphone</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="callback in callbacks" :key="callback.id">
                <td>{{ formatDate(callback.timestamp) }}</td>
                <td>{{ callback.name }}</td>
                <td>{{ callback["callback-phone"] }}</td>
                <td>
                  <span
                    class="status-badge"
                    :class="
                      callback.status === 'completed' ? 'completed' : 'pending'
                    "
                  >
                    {{
                      callback.status === "completed" ? "Traité" : "En attente"
                    }}
                  </span>
                </td>
                <td>
                  <button
                    class="btn-icon"
                    @click="viewDetails(callback, 'callback')"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <button
                    class="btn-icon"
                    :class="callback.status === 'completed' ? 'disabled' : ''"
                    @click="markAsCompleted(callback)"
                    :disabled="callback.status === 'completed'"
                  >
                    <i class="fas fa-check"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Modal for details -->
    <div class="modal" :class="{ active: showModal }">
      <div class="modal-content">
        <span class="modal-close" @click="showModal = false">&times;</span>
        <h2>{{ modalTitle }}</h2>

        <div
          v-if="selectedItem && modalType === 'contact'"
          class="detail-content"
        >
          <div class="detail-row">
            <div class="detail-label">Date :</div>
            <div class="detail-value">
              {{ formatDate(selectedItem.timestamp) }}
            </div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Nom :</div>
            <div class="detail-value">{{ selectedItem.name }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email :</div>
            <div class="detail-value">{{ selectedItem.email }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Téléphone :</div>
            <div class="detail-value">{{ selectedItem.phone }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Service :</div>
            <div class="detail-value">
              {{ getServiceLabel(selectedItem.service) }}
            </div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Message :</div>
            <div class="detail-value message">{{ selectedItem.message }}</div>
          </div>
        </div>

        <div
          v-if="selectedItem && modalType === 'callback'"
          class="detail-content"
        >
          <div class="detail-row">
            <div class="detail-label">Date :</div>
            <div class="detail-value">
              {{ formatDate(selectedItem.timestamp) }}
            </div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Nom :</div>
            <div class="detail-value">{{ selectedItem.name }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Téléphone :</div>
            <div class="detail-value">{{ selectedItem["callback-phone"] }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Statut :</div>
            <div class="detail-value">
              <span
                class="status-badge"
                :class="
                  selectedItem.status === 'completed' ? 'completed' : 'pending'
                "
              >
                {{
                  selectedItem.status === "completed" ? "Traité" : "En attente"
                }}
              </span>
            </div>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn btn-secondary" @click="showModal = false">
            Fermer
          </button>
          <button
            v-if="
              modalType === 'callback' &&
              selectedItem &&
              selectedItem.status !== 'completed'
            "
            class="btn btn-primary"
            @click="markAsCompleted(selectedItem)"
          >
            Marquer comme traité
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminView",
  data() {
    return {
      activeTab: "contacts",
      contacts: [],
      callbacks: [],
      loading: false,
      error: null,
      showModal: false,
      selectedItem: null,
      modalType: null,
      modalTitle: "",
    };
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
      this.loading = true;
      this.error = null;

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Use mock data instead of API calls
        this.contacts = [
          {
            id: "1682605200000",
            timestamp: "2025-04-27T14:00:00.000Z",
            name: "Marie Dupont",
            email: "marie.dupont@example.com",
            phone: "06 12 34 56 78",
            service: "seniors",
            message:
              "Bonjour, je cherche une aide à domicile pour ma mère de 85 ans qui habite dans le 11ème arrondissement. Elle aurait besoin d'une assistance environ 3 fois par semaine pour le ménage et les courses. Pouvez-vous me contacter pour discuter des possibilités et des tarifs? Merci d'avance.",
            consent: true,
          },
          {
            id: "1682518800000",
            timestamp: "2025-04-26T10:30:00.000Z",
            name: "Jean Martin",
            email: "jean.martin@example.com",
            phone: "07 65 43 21 09",
            service: "menage",
            message:
              "Je souhaite avoir des informations sur vos prestations de ménage à domicile. Je recherche quelqu'un pour 2h chaque semaine. Merci.",
            consent: true,
          },
        ];

        this.callbacks = [
          {
            id: "1682691600000",
            timestamp: "2025-04-28T09:15:00.000Z",
            name: "Sophie Laval",
            "callback-phone": "06 98 76 54 32",
            status: "pending",
          },
          {
            id: "1682604000000",
            timestamp: "2025-04-27T12:45:00.000Z",
            name: "Pierre Durand",
            "callback-phone": "07 11 22 33 44",
            status: "completed",
          },
        ];
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        this.error =
          "Une erreur est survenue lors du chargement des données. Veuillez réessayer.";
      } finally {
        this.loading = false;
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    },

    getServiceLabel(serviceId) {
      const serviceMap = {
        seniors: "Aide aux seniors",
        menage: "Ménage à domicile",
        repas: "Préparation de repas",
        enfants: "Garde d'enfants",
        administratif: "Aide administrative",
        autre: "Autre demande",
      };
      return serviceMap[serviceId] || serviceId || "Non spécifié";
    },

    viewDetails(item, type) {
      this.selectedItem = item;
      this.modalType = type;
      this.modalTitle =
        type === "contact"
          ? "Détails de la demande de contact"
          : "Détails de la demande de rappel";
      this.showModal = true;
    },

    async markAsCompleted(callback) {
      if (callback.status === "completed") return;

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Update in local state
        const callbackInList = this.callbacks.find((c) => c.id === callback.id);
        if (callbackInList) {
          callbackInList.status = "completed";
        }

        // Update selected item if it's the one being viewed
        if (this.selectedItem && this.selectedItem.id === callback.id) {
          this.selectedItem.status = "completed";
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour du statut:", error);
      }
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  padding-top: 40px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.admin-header {
  background-color: var(--primary);
  color: white;
  padding: 40px 0;
  margin-bottom: 30px;
}

.admin-header h1 {
  color: white;
  margin-bottom: 10px;
}

.admin-tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.admin-tab {
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  color: var(--text-color);
}

.admin-tab.active {
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
}

.badge {
  background-color: var(--primary);
  color: white;
  border-radius: 50px;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 5px;
}

.admin-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.data-table {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.empty-state,
.loading-state,
.error-state {
  padding: 40px;
  text-align: center;
  color: #6c757d;
}

.error-state {
  color: var(--error);
}

.btn-icon {
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
  font-size: 16px;
}

.btn-icon.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge.pending {
  background-color: #ffeeba;
  color: #856404;
}

.status-badge.completed {
  background-color: #d4edda;
  color: #155724;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}

.detail-content {
  margin: 20px 0;
}

.detail-row {
  display: flex;
  margin-bottom: 15px;
}

.detail-label {
  width: 120px;
  font-weight: 600;
}

.detail-value {
  flex: 1;
}

.detail-value.message {
  white-space: pre-line;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.modal-actions button {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .admin-tabs {
    flex-direction: column;
  }

  .detail-row {
    flex-direction: column;
  }

  .detail-label {
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>
