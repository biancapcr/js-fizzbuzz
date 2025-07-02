# FizzBuzz
===
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

===

## Scomposizione in sotto-problemi

===
1. Ciclo numerico
- Implementare un ciclo for da 1 a 100:

for (let i = 1; i <= 100; i++){
  // ...
}

2. Controllo delle condizioni di Fizzbuzz

- ? Se il numero è multiplo di 3 e di 5 → FizzBuzz;
- ? Se il numero è multiplo di 3 → Fizz;
- ? Se il numero è multiplo di 5 → Buzz;
: Altrimenti → stampare il numero stesso.

( - Utilizzare l'operatore modulo % per verificare:

Multipli di 3 (i % 3 === 0);
Multipli di 5 (i % 5 === 0);
Multipli di 3 e 5 (i % 3 === 0 && i % 5 === 0). )

4. Stampa dell'output

- All'interno di ogni blocco condizionale, usare console.log per stampare: "FizzBuzz", "Fizz", "Buzz" o il valore di i.

5. Verifica 

- Controllare che l'output corrisponda alle istruzioni.