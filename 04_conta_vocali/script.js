/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numOfvolws(string) {

    const volwes = ['a','e','i','o','u'];

    let volwsNumber = 0;

    for (let i = 0; i < string.length; i++) {

        for (let v = 0; v < volwes.length; v++) {
            if (string[i]=== volwes[v]) volwsNumber++;
        }
    }

    return volwsNumber;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(numOfvolws(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)