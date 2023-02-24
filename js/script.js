/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli
di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro
programma così come lo faremmo "a mano"
*/

// PSEUDO CODICE

/*
-creo nell'HTML un elemento "ul" con un id, dentro il quale ci appenderò ciò che
 viene prodotto all'interno del ciclo che andrò a creare

-dichiarare le variabili necessarie

-creo un ciclo con variabile con una variabile che si ripete finchè la variabile
 indicata non eguaglia il limite che gli abbiamo imposto (=<100).

-all'interno del ciclo pongo diverse condizioni:
?SE la variabile è divisibile sia per 3 che per 5:
°stampa in console "FizzBuzz";

?ALTRIMENTI SE la variabile è divisibile solo per 3:
°stampa in console "Fizz";

?ALTRIMENTI SE (la variabile è divisibile solo per 5):
stampa in console "Buzz".

?ALTRIMENTI:
°stampa il valore della variabile
*/

/*
----------------------------------------------
VERSIONE CONSOLE.LOG
----------------------------------------------
*/

/*
let listEl = document.getElementById("list");

// creo il ciclo
for (let i = 1 ; i <= 100; i++) {

    // se 'i' divisibile sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {

        console.log("FizzBuzz");

    //se "i" divisibile solo per 3   
    } else if (i % 3 == 0) {

        console.log("Fizz");
      
    //se "i" divisibile solo per 5
    } else if (i % 5 == 0) {

        console.log("Buzz")
    
    //se le 3 condizioni precedenti non hanno trovato riscontro
    } else {

        console.log(i)
    }
}

*/

/*
-----------------------------------------
VERSIONE BONUS
-----------------------------------------
*/


let listEl = document.getElementById("list");

// creo il ciclo
for (let i = 1 ; i <= 100; i++) {

    //creo un nuovo elemento HTML
    let newLiEl = document.createElement('div');

    //appendo all'elemento HTML (ul) il nuovo elemento creato (li)
    listEl.append(newLiEl);

    //modifico il contenuto dell'elemento creato
    newLiEl.innerHTML = i;

    // se 'i' divisibile sia per 3 che per 5
    if (i % 3 == 0 && i % 5 == 0) {

        // modifico il valore interno dell'elemento
        newLiEl.innerHTML = "FizzBuzz";

        newLiEl.style.backgroundColor = "#f0466f";

    //se "i" divisibile solo per 3   
    } else if (i % 3 == 0) {
        
        // modifico il valore interno dell'elemento
        newLiEl.innerHTML = "Fizz";

        newLiEl.style.backgroundColor = "#0cd6a1";

    //se "i" divisibile solo per 5
    } else if (i % 5 == 0) {

        // modifico il valore interno dell'elemento
        newLiEl.innerHTML = "Buzz";

        newLiEl.style.backgroundColor = "#ffd166";
    
    //se le 3 condizioni precedenti non hanno trovato riscontro
    } else {

        newLiEl.innerHTML = i;
    }
}

