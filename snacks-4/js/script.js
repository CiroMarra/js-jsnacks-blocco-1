//Calcola la somma e la media dei primi 10 numeri.

// Array con dentro 10 numeri da 1 a 10 
const numberElements = [1,2,3,4,5,6,7,8,9,10];
// controlla l'array che tutti sia appsoto
console.log(numberElements);
// crea una variabile con il nome number
let number=0;
// inizia a fare la somma dei numeri all'interno dell'array.
for(let i = 0; i < numberElements.length; ++i) {
     number += numberElements[i];
console.log(number);

}
// calcola la media della somma dei numeri dell'array.
const media = number /  numberElements.length;
// mostra la media dell'array.
console.log (media);