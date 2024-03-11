// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
    // numeri già presenti nel array.
const numberList = [];
    // chiedere all'utente 5 numeri.
for (let i = 0; i < 5; i++) {
    userNumber = parseInt(prompt('Inserisci il numero '));
    // controlla i numeri inseriti dall'utente.
    console.log(userNumber);
        // controlla che i numeri dati dall'utente non siano già presenti  nella lista array.
    if (!numberList.includes(userNumber)){
        // Se i numeri dati da l'utente non sono presenti giù nella lista array vengono inseriti all'interno dell'array.
        numberList.push(userNumber);
    }
}
    // controlla l'array aggiornato dopo l'inserimento dei numeri dell'utente.
console.log(numberList); 
 