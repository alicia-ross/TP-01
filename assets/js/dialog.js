/**
 * Affiche le dialog avec les détails de l'article.
 * @param {Article} article - L'article à afficher dans le dialog
 */

function showModal(article) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('titre');
    const modalImage = document.getElementById('image');
    const modalAuteur = document.getElementById('auteur');
    const modalDate = document.getElementById('date');
    const modalMots = document.getElementById('mots');
    const modalTemps = document.getElementById('temps');
    const modalDescription = document.getElementById('description');

    const modalClose = document.querySelector('.close');

    modalTitle.textContent = article.title;
    modalImage.src = article.modalImage;
    modalAuteur.textContent = article.auteur;
    modalDate.textContent = article.date;
    modalMots.textContent = article.mots;
    modalTemps.textContent = article.tempsEstime;
    modalDescription.textContent = article.modalDescription;

    modal.style.display = 'block';
}

/**
 * Ferme le dialog
 */

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Ajoute un écouteur d'événement pour fermer le dialog lorsque qu'on clique sur le bouton de fermeture

const modalClose = document.querySelector('.close');
modalClose.addEventListener('click', closeModal);

