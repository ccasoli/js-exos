function calculeFactoriel() {
    let number = prompt("De quel nombre veut tu calculer la factorielle ?");
    let numCal = number;
    for(let i = number; i >= 2; i--){
        numCal = numCal*(i-1);
    }
    console.log(`le resultat est : ${numCal}`);
}