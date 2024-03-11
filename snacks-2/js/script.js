//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

// chiede i numeri a l'utente fino a cinque volte.
let numeriUtente = 0;
for (let i = 0; i < 5; i++) {
    // somma i numeri che l'utente ha inserito.
numeriUtente += parseInt(prompt('Inserisci il numero '));
}
    // controlla la somma totale dei numeri inseriti dell'utente.
    console.log(numeriUtente);