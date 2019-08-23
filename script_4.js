const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

function bornIn70() {
    entrepreneurs.forEach(man => {
        if(man.year >= 1970 && man.year <= 1979){
            console.log(man);
        }
    });
}

function arrayMan(){
    let arrayMan = []
    entrepreneurs.forEach(man => {
        arrayMan.push(man.first + " " + man.last);
    });
    console.log(arrayMan);
}

function ageToday(){
    let today = new Date();
    let yearToday = today.getFullYear(); 
    entrepreneurs.forEach(man => {
        let age = yearToday - man.year;
        console.log(`${man.first} ${man.last} a ${age} ans`)
    });
}

function alphDesc(){
    let arrayMan = []
    entrepreneurs.forEach(man => {
        arrayMan.push(man.last);
    });
    arrayMan.sort()
    console.log(arrayMan)
}