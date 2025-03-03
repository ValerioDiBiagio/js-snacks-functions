/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const result = [];
function firstLetterName(array, string) {
    for (let i = 0; i < names.length; i++){
        if (array[i].startsWith(string))
            result.push(array[i]);
        }
        return result;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterName(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
