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
?SE la variabile è divisibile per 3 o per 5:

  ?SE la variabile è divisibile sia per 3 che per 5:
  °stampa in console "FizzBuzz";

  ?ALTRIMENTI SE la variabile è divisibile solo per 3:
  °stampa in console "Fizz";

  ?ALTRIMENTI (la variabile è divisibile solo per 5):
  stampa in console "Buzz".

?ALTRIMENTI:
°stampa il valore della variabile