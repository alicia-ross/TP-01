/**
 * Classe représentant un article.
 */

class Article {
    constructor(image, title, description, auteur, date, tempsEstime, mots, modalImage, modalDescription) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.auteur = auteur;
        this.date = date;
        this.tempsEstime = tempsEstime;
        this.mots = mots;
        this.modalImage = modalImage;
        this.modalDescription = modalDescription;
    }

    /**
     * @param {Article} data - Données de l'article
     * @param {string} data.image - URL de l'image de l'article
     * @param {string} data.title - Titre de l'article
     * @param {string} data.description - Description de l'article
     * @param {string} data.auteur - Auteur de l'article
     * @param {string} data.date - Date de publication de l'article
     * @param {string} data.tempsEstime - Temps estimé pour lire l'article
     * @param {number} data.mots - Nombre de mots de l'article.
     * @param {string} [data.modalImage] - URL de l'image pour le dialog
     * @param {string} [data.modalDescription] - Description pour le dialog
     * @return {Article} Un nouvel article.
     */

    /** Cool technique */

    static fromData(data) {
        return new Article(data.image, data.title, data.description, data.auteur, data.date, data.tempsEstime, data.mots, data.modalImage, data.modalDescription);
    }
}

 // Données des articles
document.addEventListener('DOMContentLoaded', () => {
    const articleData = [
        {
            image: './assets/images/article7.webp',
            title: 'Le voyage de Chihiro',
            description: 'Une jeune fille plongée dans un monde mystérieux peuplé de créatures étranges, où elle doit surmonter des obstacles pour sauver ses parents.',
            auteur: 'Hayao Miyazaki',
            date: '20 juillet 2001',
            tempsEstime: '2 heures',
            mots: 2000,
            modalImage: './assets/images/spirited.webp',
            modalDescription: 'Dans la création de ce TP\, j\'ai rencontré plusieurs problèmes\. Pour commencer\, étant très perfectionniste\, j\'ai eu de la difficulté à faire un layout que j\'aimais et j\'ai passé beaucoup de temps à faire des essais\/erreurs pour trouver quelque chose qui me plaisait vraiment\. J\'ai choisi un thème que j\'adore\, alors je voulais qu\'il soit vraiment beau\. J\'ai passé de nombreuses heures à chercher les images idéales et parfaites\, et c\'était vraiment long\. Puisque c\'est quand même vieux\, les images sont de mauvaise qualité et pas si faciles à trouver\. Mais j\'ai fini par trouver quelque chose de bien\.Ensuite\, pour le JavaScript\, j\'ai eu de la difficulté avec le nombre d\'articles qui changeait au fur et à mesure\. J\'ai dû consulter plusieurs sites web comme Stack Overflow \(https://stackoverflow.com/questions/31419700/javascript-how-to-update-count)\. J\'ai aussi eu du mal à faire en sorte que mon dialogue s\'ouvre quand je cliquais sur le bouton\. J\'ai utilisé le AI copilote intégré car je suis sur Edge, et il m\'a dit que mon bouton n\'avait pas la classe\. Alors\, je me suis rendu compte que je devais ajouter la classe à mon bouton lorsque je créais l\'élément dans l\'autre fichier JS\.Sinon\, tout au long du projet\, j\'ai fait des console\.log qui m\'ont beaucoup aidée\. Je ne suis vraiment pas bonne pour les commentaires et le JS doc \; j\'ai du mal à comprendre comment faire de bons commentaires et ce qui est pertinent d\'écrire\, donc j\'ai fait de mon mieux pour cette partie\. J\'ai aimé faire le travail \:\)'
        },
        {
            image: './assets/images/article2.webp',
            title: 'Le château ambulant',
            description: 'Une jeune femme transformée en vieille dame par une sorcière, qui trouve refuge dans le mystérieux château ambulant du magicien Howl.',
            auteur: 'Hayao Miyazaki',
            date: '23 septembre 2004',
            tempsEstime: '2 heures 15 minutes',
            mots: 2200,
            modalImage: './assets/images/chateau.webp',
            modalDescription:  'Une jeune femme nommée Sophie\, rencontre un mystérieux magicien nommé Hauru \ transformé en vieil homme par une malédiction\. \ Après avoir été chassée de sa maison par une sorcière jalouse\, Sophie trouve refuge dans le château en mouvement de Hauru \ propulsé par un démon de feu nommé Calcifer\. \ À l\'intérieur\, elle découvre un monde enchanté rempli de magie et de mystères\. \ En échange de sa compagnie\, Hauru promet d\'aider Sophie à lever la malédiction\. \ Alors qu\'ils se lancent dans cette quête périlleuse\, ils rencontrent des alliés improbables \ et affrontent de redoutables ennemis\. \ Entre les tours du château et les cieux tourbillonnants\, Sophie découvre le pouvoir de l\'amour\, de l\'amitié \ et de la confiance en soi \ dans cette aventure épique remplie de rebondissements magiques\.'
        },
        {
            image: './assets/images/article3.webp',
            title: 'Mon voisin Totoro',
            description: 'Deux jeunes sœurs, Satsuki et Mei, qui découvrent des esprits de la forêt, notamment le célèbre Totoro, à leur nouvelle maison à la campagne.',
            auteur: 'Hayao Miyazaki',
            date: '16 avril 1988',
            tempsEstime: '1 heure 30 minutes',
            mots: 1800,
            modalImage: './assets/images/totoro.webp',
            modalDescription: 'Deux jeunes filles\, Satsuki et Mei\, emménagent dans une vieille maison de campagne avec leur père pour se rapprocher de leur mère malade\. \ Bientôt\, elles découvrent que la forêt voisine est habitée par des créatures magiques appelées Totoros\. \ Mei\, la plus jeune\, rencontre un Totoro géant et amical qui devient son ami\. \ Satsuki est sceptique au début\, mais elle finit par voir les Totoros elle aussi\. \ Les deux sœurs vivent des aventures merveilleuses avec leurs nouveaux amis\, utilisant un chat-bus magique pour se déplacer et découvrir des secrets cachés de la nature\. \ Lorsque Mei disparaît en essayant de rendre visite à leur mère à l\'hôpital\, Satsuki demande l\'aide des Totoros pour la retrouver\. \ Ensemble\, ils entreprennent une quête pour réunir la famille et apporter du réconfort à leur mère\. \ \'Mon Voisin Totoro\' est une histoire touchante d\'innocence\, de découverte et de la magie de l\'enfance\.'
        },
        {
            image: './assets/images/article4.webp',
            title: 'Ponyo sur la falaise',
            description: 'Une petite fille poisson, rêve de devenir humaine. Son amitié avec un garçon nommé Sosuke déclenche une série d’événements magiques.',
            auteur: 'Hayao Miyazaki',
            date: '19 juillet 2008',
            tempsEstime: '1 heure 40 minutes',
            mots: 1900,
            modalImage: './assets/images/ponyo.webp',
            modalDescription: 'Un jeune garçon nommé Sôsuke vit avec sa mère dans une maison au sommet d\'une falaise surplombant la mer\. \ Un jour\, il découvre un petit poisson rouge coincé dans un bocal et décide de le sauver\. \ Sôsuke nomme le poisson Ponyo et promet de prendre soin de lui\. \ À sa grande surprise\, Ponyo se révèle être une princesse poisson qui rêve de devenir humaine\. \ Utilisant sa magie\, Ponyo se transforme en petite fille\, mais son pouvoir perturbe l\'équilibre de la nature\, provoquant des tempêtes et des inondations\. \ Le père de Ponyo\, un sorcier marin\, tente de la ramener dans l\'océan\, craignant que sa transformation ne cause un désastre\. \ Cependant\, Ponyo et Sôsuke partent en quête pour prouver que l\'amour et la détermination peuvent surmonter toutes les barrières\. \ \'Ponyo sur la falaise\' est une histoire enchantée sur l\'amitié\, la famille et le pouvoir de la nature\.'
        },
        {
            image: './assets/images/article5.webp',
            title: 'Princesse Mononoké',
            description: 'Un jeune guerrier, Ashitaka, se retrouve pris entre les forces de la forêt et les intérêts des humains. Une quête épique pour la paix et la compréhension.',
            auteur: 'Hayao Miyazaki',
            date: '12 juillet 1997',
            tempsEstime: '2 heures 30 minutes',
            mots: 2500,
            modalImage: './assets/images/mononoke.webp',
            modalDescription: 'Dans un Japon féodal\, le jeune prince Ashitaka est maudit par un sanglier démoniaque en protégeant son village\. \ Cherchant un remède\, il voyage vers l\'ouest et découvre une lutte entre les humains et les dieux de la forêt\. \ Il rencontre Lady Eboshi\, la dirigeante de la forge\, qui exploite les ressources naturelles\, et San\, une jeune fille humaine élevée par des loups\, surnommée Princesse Mononoké\. \ San et les esprits de la forêt veulent protéger leur terre des destructions causées par les humains\. \ Ashitaka tente de trouver un équilibre entre les deux camps\, cherchant à apaiser la colère des dieux et à guérir sa malédiction\. \ Alors que la bataille pour le contrôle de la forêt s\'intensifie\, Ashitaka et San doivent apprendre à collaborer pour sauver ce qui reste de la nature\. \ \'Princesse Mononoké\' est une épopée écologique sur le conflit entre civilisation et nature\, et la quête de paix\.'
        },
        {
            image: './assets/images/article6.webp',
            title: 'Arrietty, le petit monde des chapardeurs',
            description: 'Une jeune chapardeuse, et son ami humain Sho explorent l’équilibre entre les mondes des petits et des grands, entre amitié et découverte.',
            auteur: 'Hiromasa Yonebayashi',
            date: '17 juillet 2010',
            tempsEstime: '1 heure 35 minutes',
            mots: 1850,
            modalImage: './assets/images/arrietty.webp',
            modalDescription: 'Arrietty est une petite chapardeuse vivant sous les planchers d\'une maison de campagne avec ses parents\. \ Les chapardeurs empruntent de petits objets aux humains pour survivre sans se faire remarquer\. \ Un jour\, un jeune garçon nommé Shô vient vivre dans la maison pour se reposer avant une opération\. \ Il découvre accidentellement Arrietty lors de l\'une de ses expéditions nocturnes\. \ Malgré les avertissements de ses parents\, Arrietty se lie d\'amitié avec Shô\. \ Leur amitié met en danger le monde secret des chapardeurs\, car les humains pourraient les découvrir\. \ Lorsque la gouvernante de la maison découvre des indices de leur existence\, la famille d\'Arrietty doit envisager de déménager\. \ Shô aide Arrietty et sa famille à trouver un nouveau refuge sécurisé\. \ \'Arrietty\, le petit monde des chapardeurs\' est une histoire touchante sur l\'amitié\, le courage et la découverte des mondes cachés\.'
        },
        {
            image: './assets/images/article1.webp',
            title: 'Kiki la petite sorcière',
            description: 'Kiki, une jeune sorcière de 13 ans part vivre dans une ville côtière pour parfaire son apprentissage accompagnée de son chat noir, Jiji.',
            auteur: 'Hayao Miyazaki',
            date: '29 juillet 1989',
            tempsEstime: '1 heure 45 minutes',
            mots: 1950,
            modalImage: './assets/images/kiki.webp',
            modalDescription: 'Kiki est une jeune sorcière de 13 ans qui doit partir vivre seule pendant un an pour compléter sa formation\. \ Avec son chat noir\, Jiji\, elle s\'installe dans une ville côtière et ouvre un service de livraison en volant sur son balai\. \ Malgré des débuts difficiles\, Kiki se lie d\'amitié avec Osono\, la boulangère\, et Tombo\, un garçon passionné par l\'aviation\. \ En surmontant les défis de l\'indépendance et de l\'adaptation à la vie urbaine\, Kiki commence à perdre confiance en ses pouvoirs\. \ Lorsqu\'elle perd temporairement sa capacité à voler et à parler avec Jiji\, elle doit redécouvrir sa véritable identité et ses motivations\. \ Avec l\'aide de ses nouveaux amis et sa détermination\, Kiki retrouve ses pouvoirs et sauve Tombo d\'un accident aérien\. \ \'Kiki la petite sorcière\' est une histoire inspirante sur la croissance personnelle\, l\'amitié et la découverte de soi\.'
        },
        {
            image: './assets/images/article8.webp',
            title: 'Souvenirs de Marnie',
            description: 'Anna, une jeune fille solitaire qui découvre une mystérieuse maison et se lie d’amitié avec Marnie, une fille énigmatique qui semble appartenir au passé.',
            auteur: 'Hiromasa Yonebayashi',
            date: '19 juillet 2014',
            tempsEstime: '2 heures 5 minutes',
            mots: 2050,
            modalImage: './assets/images/souvenirsdemarnie.webp',
            modalDescription: 'Anna\, une jeune fille solitaire et asthmatique\, est envoyée à la campagne pour améliorer sa santé\. \ Elle se sent isolée et ne trouve pas sa place parmi les autres\. \ Un jour\, elle découvre une vieille maison au bord d\'un marais et y rencontre une mystérieuse fille nommée Marnie\. \ Elles deviennent rapidement amies\, partageant des moments de bonheur et des confidences\. \ Cependant\, Marnie semble apparaître et disparaître de manière énigmatique\. \ Anna découvre peu à peu que Marnie est liée à un passé trouble et à des secrets enfouis\. \ À travers des rencontres avec les habitants du village et des révélations sur Marnie\, Anna commence à comprendre l\'importance de l\'amitié et de la famille\. \ \'Souvenirs de Marnie\' est une histoire émouvante sur la découverte de soi\, les liens familiaux et la guérison émotionnelle\. \ L\'amitié d\'Anna et Marnie transcende le temps et les souvenirs\, offrant à Anna une nouvelle perspective sur la vie\.'
        },
        {
            image: './assets/images/article9.webp',
            title: 'Le vent se lève',
            description: 'Retrace la vie de Jiro Horikoshi, concepteur d’avions pendant la Seconde Guerre mondiale.',
            auteur: 'Hayao Miyazaki',
            date: '20 juillet 2013',
            tempsEstime: '2 heures 10 minutes',
            mots: 2100,
            modalImage: './assets/images/vent.webp',
            modalDescription: 'Jirô Horikoshi rêve de voler et de concevoir des avions\. \ Ne pouvant devenir pilote à cause de sa mauvaise vue\, il devient ingénieur aéronautique\. \ Inspiré par l\'aviateur italien Giovanni Battista Caproni\, Jirô travaille pour l\'entreprise Mitsubishi\, où il conçoit des avions de chasse\. \ Malgré les défis techniques et les contraintes politiques du Japon d\'avant-guerre\, il poursuit son rêve avec détermination\. \ Lors d\'un séjour en montagne pour soigner sa tuberculose\, Jirô rencontre Nahoko\, une jeune femme dont il tombe amoureux\. \ Leur amour se développe malgré la maladie de Nahoko\, et ils se marient\. \ Cependant\, la santé de Nahoko se détériore\, et elle choisit de partir pour un sanatorium\, laissant Jirô poursuivre son travail\. \ \'Le Vent se Lève\' est une histoire poignante sur la passion\, le sacrifice et la lutte entre les rêves personnels et les réalités du monde\. \ Le film célèbre la créativité et le dévouement d\'un homme face à l\'adversité\.'
        }
    ];

    const articles = articleData.map(Article.fromData);
    const gridContainer = document.getElementById('grid-container');

    /** index n'est pas utilisé */
    articles.forEach((article) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = article.image;
        img.alt = article.title;

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = article.title;
        title.dataset.search = article.title.toLowerCase();

        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = article.description;
        description.dataset.search = article.title.toLowerCase();

        const button = document.createElement('button');
        button.textContent = 'En savoir plus';
        button.classList.add('button');

        button.addEventListener('click', () => {
            showModal(article);
        });

        cardContent.appendChild(title);
        cardContent.appendChild(description);
        cardContent.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardContent);

        gridContainer.appendChild(card);
    });
});

/** 
 * Affiche le dialog avec les détails de l'article.
 * @param {Article} article - L'article à afficher dans le dialog
*/

    // Appel de la fonction dans le fichier dialog.js
function showModal(article) {
    openModal(article);
}
