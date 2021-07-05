/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/
var email = prompt("Inserisci la tua email per accedere");
var listEmail = ["pippo@mail.it", "pluto@mail.it", "paperino@mail.it"];
var mail = document.getElementById ("mail");
console.table (listEmail);
var isAllowed = false;
for (var i = 0; i < listEmail.length; i++) {
    if (email === listEmail[i]) {
        isAllowed = true;
        mail.innerHTML = "Benvenuto";
    } 
}
if (!isAllowed) {
    alert("Questa email non è registrata nei nostri sistemi, accesso negato");
}