function pyramide() {
    let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    let i=1;
    let space = floor -1;
    h = "#";
    b = " ";
    console.log(`your pyramid with ${floor} floors :`)
    while(i <= floor) {
        console.log(b.repeat(space) + h.repeat(i));
        i+=1
        space-=1
    }
}