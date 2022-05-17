/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const numbers = createRandomNumsArray (5, 1, 100);

const showNumbers = document.querySelector(".showNumbers");
const showResult = document.querySelector(".showResult");
const title = document.querySelector("h1");
const showScore = document.querySelector("h2");

for (let i=0; i < numbers.length; i++){
    const outputDiv = document.createElement("div");
    showNumbers.append(outputDiv);
    outputDiv.append(numbers[i]);
}

setTimeout (checkingPlayerResult, 30000);

function checkingPlayerResult (){

    title.innerHTML = "What did Simon say?"

    showNumbers.style.display = "none";
    showResult.style.display = "flex";

    const playerNumbers = [];

    playerNumbers [0] = parseInt(prompt("Qual'era il primo numero?"));
    playerNumbers [1] = parseInt(prompt("Qual'era il secondo numero?"));
    playerNumbers [2] = parseInt(prompt("Qual'era il terzo numero?"));
    playerNumbers [3] = parseInt(prompt("Qual'era il quarto numero?"));
    playerNumbers [4] = parseInt(prompt("Qual'era il quinto numero?"));

    let score = 0;

    for (let i=0; i < numbers.length; i++){

        const resultDiv = document.createElement("div");
        showResult.append(resultDiv);

        if(numbers[i] === playerNumbers[i]){
            resultDiv.innerHTML = playerNumbers[i] + "<br>Giusto!";
            resultDiv.style.color = "green";
            score++;
        } else {
            resultDiv.innerHTML = playerNumbers[i] + "<br>Sbagliato!";
            resultDiv.style.color = "red";
        }
    }

    showScore.innerHTML = "Bravo! Hai indovinato " + score + " numeri!";

    showNumbers.style.display = "flex";
}

function createRandomNumsArray (size, min, max){

    const numsArray = [];

    while (numsArray.length<size){
        let myNum = createRandomNum (min,max);

        if (!numsArray.includes(myNum)){
            numsArray.push(myNum);
        }
    }
    return numsArray;
}

function createRandomNum (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}