/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const newArray = []

function arrayTwo()  {
    for (let i = 0; i <= names.length -1; i++) {
        const letterNumberOne = names[i].substring(0,1);
        newArray.push(letterNumberOne);

    }
        return newArray;

}


// Invoca la funzione qui e stampa il risultato in console

console.log(arrayTwo(newArray));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]