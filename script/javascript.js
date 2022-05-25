/* 1. Insérer les données des livres sur la pages d'accueil */

/* Tri pour les sorties récentes */
let lastReleases = [...books];
lastReleases.sort((a, b) => b.releaseDate - a.releaseDate);

/* Tri pour les meilleures ventes */
let bestSales = [...books];
bestSales.sort((a, b) => b.nbSales - a.nbSales);

// On récupère les containers HTML dans le DOM grâce à leurs IDs
let lastReleasesHtml = document.getElementById("last-releases");
let bestSalesHtml = document.getElementById("best-sales");

// On insère les sorties récentes
insertBooksInHtml(lastReleases, lastReleasesHtml);
// On insère les meilleures ventes
insertBooksInHtml(bestSales, bestSalesHtml);


/* 2. Afficher la page article au clic d'un livre */

// On récupère les titres de livres de la page d'accueil
const bookTitles = document.getElementsByClassName('home-book-title');

// Pour chaque titre de livre, on associe un évènement au clic
for (const bookTitle of bookTitles) {
    // On récupère l'ID du livre à travers data-bookid
    let bookId = bookTitle.dataset.bookid;
    bookTitle.addEventListener('click', () => {
        window.location.href="./article.html?bookid="+bookId;
    });
}


