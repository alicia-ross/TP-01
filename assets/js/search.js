document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const toggleButton = document.getElementById('toggle-view-btn');
    const searchInput = document.getElementById('search-input');
    const cardCount = document.getElementById('card-count');

    if (gridContainer) {
        const cards = Array.from(gridContainer.getElementsByClassName('card'));
        
        /**
         * Met à jour le nombre de cartes visibles affiché
         */

        const updateCardCount = () => {
            const visibleCards = cards.filter(card => !card.classList.contains('hidden')).length;
            cardCount.textContent = `${visibleCards} film(s)`;
        };

        /** JS Doc inutile */

        /**
         * Toggle entre l'affichage en colonne et l'affichage en grille
         */

        toggleButton.addEventListener('click', () => {
            gridContainer.classList.toggle('single-column');
        });

        /** JS Doc inutile */

        /**
         * Filtre les cartes en fonction de la valeur de recherche entrée
         */

        searchInput.addEventListener('input', () => {
            const searchValue = searchInput.value.toLowerCase();

            cards.forEach(card => {
                const titleElement = card.querySelector('.card-title');
                const descriptionElement = card.querySelector('.card-description');

                if (titleElement) {
                    const title = titleElement.dataset.search;
                    const searchData = `${title}`;

                    if (searchData.includes(searchValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });

            updateCardCount();
        });

        updateCardCount();
    }
});
