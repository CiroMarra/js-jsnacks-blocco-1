//Dato un array contenente 10 numeri, stampare in console il numero più grande.


// Lista di 10 numeri all'interno dell'array
const arrayList = [10,20,30,40,50,60,70,80,90,100];
// segna come primo numero più grande "0"
let magNumber = arrayList[0];
// Inizia a controllare nell'array  i numeri fino a trovare il numero più grande.
for (let i = 1; i < arrayList.length; ++i) {
    if (arrayList[i] > magNumber) {
        magNumber = arrayList[i];
    }
}
// Mostra il numero più grande all'interno dell'array.
console.log(magNumber);
