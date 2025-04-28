// This file contains the JavaScript code for the application, handling any client-side interactions and functionality.

document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.innerText = "Bienvenue sur notre service à la personne!";
    }

    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            alert(`Vous avez cliqué sur le service: ${this.innerText}`);
        });
    });
});