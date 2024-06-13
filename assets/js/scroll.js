/**
 * Ajoute un écouteur d'événement pour défiler vers le contenu principal lorsque le bouton est cliqué.
 * 
 * @param {Event} event - L'événement de clic.
 */

document.querySelector('#bouton-defilement').addEventListener('click', function() {
    document.querySelector('#contenu-principal').scrollIntoView({ behavior: 'smooth', speed: 'slow' });
});