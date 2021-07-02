/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.*/
var giocatore1 = document.getElementById("giocatore1")
var giocatore2 = document.getElementById("giocatore2")
var risultato = document.getElementById("risultato")
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
giocatore1.innerHTML = randomNumber1
giocatore2.innerHTML = randomNumber2
if (randomNumber1 > randomNumber2) {
    risultato.innerHTML = "Hai vinto!"
} else if (randomNumber1 == randomNumber2) {
    risultato.innerHTML = "Pari"
} else risultato.innerHTML = "Hai perso!"

