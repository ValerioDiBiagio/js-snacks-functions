/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.



function arrayTwo(elements)  {
    const newArray = [];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const firstLetter = element.charAt(0);
        newArray.push(firstLetter);

    }
        return newArray;

}


// Invoca la funzione qui e stampa il risultato in console

console.log(arrayTwo(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]