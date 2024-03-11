//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

    // lista dei numeri dell'array.
const numberList = [];
    // chiede a l'utente di inserire 6 numeri
for (let i = 0; i < 6; i++) {
    userNumber = parseInt(prompt('Inserisci il numero '));
    // controlla i numeri inseriti dall'utente.
        // controlla quali numeri inseriti dall'utente sono dispari.
    if (userNumber % 2 !== 0) {
        // i numeri dispari che l'utente ha dato vengono inseriti nell'array.
        numberList.push(userNumber);
    }
       
}
// controlla che all'interno dell'arrya ci siano solo numeri dispari.
console.log(numberList);