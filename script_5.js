const books = [
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function asBeenRented(){
    books.forEach(book => {
        if(book.rented > 0){
            console.log("tout les livres ont ete empreinte au moins une fois");
        }
    });
  }

function mostPopular(){  
    let bestBook = [];
    books.forEach(book => {
        bestBook.push(book.rented);
    });
    function compare(x, y) {
        return y - x;
    }
    bestBook.sort(compare);
    books.forEach(book => {
        if(bestBook[0] == book.rented){
            console.log(`livre le plus populaire : ${book.title} avec ${book.rented} vues`);
        }
    });
}

function lessPopular(){
    let bestBook = [];
    books.forEach(book => {
        bestBook.push(book.rented);
    });
    function compare(x, y) {
        return x - y;
    }
    bestBook.sort(compare);
    books.forEach(book => {
        if(bestBook[0] == book.rented){
            console.log(`livre le moins populaire : ${book.title} avec ${book.rented} vues`);
        }
    });
}

function findMe(){
    books.forEach(book => {
        if(book.id == 873495){
            console.log(`id 873495 : ${book.title}`);
        }
    });
}

function deletId(){
    books.forEach(book => {
        if(book.id == 133712){
            book.delete();
        }
    });
}

function orderDesc(){  
    let orderBook = [];
    books.forEach(book => {
        orderBook.push(book.title);
    });
    orderBook.sort();
    console.log(orderBook);
}