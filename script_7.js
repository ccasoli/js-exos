function question(str) {
    return str[str.length - 1] === "?"
  };
  
  function upCase(str) {
    return str === str.toUpperCase() && str
  };
  
  function fornite(str) {
    return str.toLowerCase().includes('fortnite');
  };
  
  function askMan(){
    answer = prompt('bonjour, que veux tu ?');
    if (question(answer)) {
        console.log("Ouais Ouais...");
    } else if (upCase(answer)) {
        console.log("Pwa, calme-toi...");
    } else if (fornite(answer)) {
        console.log("on s'fait une partie soum-soum ?");
    } else if (answer === "") {
        console.log("t'es en PLS ?");
    } else {
        console.log("balek.");
    };
  }
