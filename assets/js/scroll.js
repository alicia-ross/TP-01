/**
 * Ajoute un écouteur d'événement pour défiler vers le contenu principal lorsque le bouton est cliqué.
 * 
 * @param {Event} event - L'événement de clic.
 */

/** Ce feature peu etre facilement realisé sans js. Mais je suis content de voir que tu as exploré et que tu y sois parvenue. */

document.querySelector('#bouton-defilement').addEventListener('click', function() {
    document.querySelector('#contenu-principal').scrollIntoView({ behavior: 'smooth', speed: 'slow' });
});