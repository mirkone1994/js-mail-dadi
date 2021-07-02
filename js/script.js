/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/
var email = prompt("Inserisci la tua email per accedere");
var listEmail = ["pippo@mail.it"];
var mail = document.getElementById ("mail");
console.table (listEmail);
if (email == listEmail[0]) {
    mail.innerHTML = "Benvenuto";
} else alert("Questa email non è registrata nei nostri sistemi, accesso negato");
