// 1. Ciclo per i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    // - Se n è multiplo di 3 e di 5 → FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
     // - Se n è multiplo di 3 → Fizz
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    // - Se n è multiplo di 5 → Buzz
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    // - Altrimenti → stampare n stesso
    else{
        console.log(i);
    }
}