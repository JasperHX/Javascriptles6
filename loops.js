// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

// stap 1 Hoera declareren
// stap 2 for loop maken
// stap 3 i is kleiner dan 3
// console.log
//
const celebrations = 'Hoera!';

for (let i = 0; i < 3; i++) {
    console.log(celebrations)
}
;

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================

// stap 1 loop en klaar declareren
// stap 2 for loop maken
// stap 3 for loop met 5 items
// stap 4 alles kleiner dan 4 is loop en al het andere is klaar (dus groter dan 5)

const rounds = "loop...";
const ready = "klaar!";

for (let i = 0; i < 5; i++) {
    if (i < 4) {
        console.log(rounds);
    } else {
        console.log(ready);
    }
}
// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// stap 1 15 declareren
// stap 2 for loop maken waarbij i < 16 is (totaal 15 nummers beginnend bij 0
// stap 3 twee if statements

// Oefening:
//
let fir = 15;

if (15 % 2 === 0) {
    console.log('bijna')
} else (console.log('niet goed'))

const numbers = 15;

for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log('even');
    }
    if (i % 2 !== 0)
        console.log('oneven');
}

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

// stap 1 for loop maken die getallen 0 t/m 9 logt
// stap 2 wanneer kleiner dan 3 console.log
// stap 3 wanneer gelijk aan of groter dan 3 maar kleiner dan 6 console.log met '>'
// stap 4 wanneer groter of gelijk aan 6 dan console.log + '>>'

for (let i = 0; i <= 10; i++) {
    if (i < 3) {
        console.log(i)
    }
    if (i >= 3 && i < 6) {
        console.log('>' + i)
    }
    if (i >= 6) {
        console.log('>>' + i)
    }
}
