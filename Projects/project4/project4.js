// console.log(parseInt(Math.random()*100 +1))
// console.log(Math.random()*100 +1)

let ranNum = parseInt(Math.random()*100 +1)

const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesse");
const Remaining = document.querySelector(".Remaining");
const lowOrHigh = document.querySelector(".lowOrHigh");
const result = document.querySelector(".result");

const p = document.createElement("p")

let prevGuess = [] //TO STORE the already gussed array so that use doesn't repeat the number
let numGuess = 1 //To count the number of Guesses
let playGame = true  //want to play the game : T / F

if(playGame){ //if user is ready
    submit.addEventListener("click", function(e){
        e.preventDefault() // hold the value before the submitting
        // console.log(userInput) //GIVED HTML BLOCK FOR CLASS GUESSfIELD
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

//function to validate the correct number [NUM bet 1 to 100 ot not]
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a Valid number")
    }
    else if (guess < 1 || guess >100){
        alert("Please enter a Valid number between 1 to 100")
    }
    else{ //if the number is valid put in the array 
        prevGuess.push(guess)

        if(numGuess >10){
            displayGuess(guess);
            displayMessage( `Game Over. `);
            endGame();
        }
        else{
            displayGuess(guess) //display the guessArray list 
            checkGuess(guess);
        }
    }
}

// to give the some error msg about the given input.
//TO CHECK Wether the input is matching with randomNumbe / < / > the Random Num
function checkGuess(guess){
    if(guess === ranNum){
        displayMessage("You guessed it right !!!")
        endGame()
    }
    else if(guess < ranNum){
        displayMessage( `Number is lowwww`)
    }
    else if(guess > ranNum){
        displayMessage( `Number is lowwww`)
    }
}

function displayGuess(guess){ //does the clean up 
    userInput.value =''
    guessSlot.innerHTML +=`${guess}, ` //pushing
    numGuess ++; //increases the guess count
    Remaining.innerHTML = `${11 - numGuess}`;


}

//to display the msg in DOM
function displayMessage(message){
    lowOrHigh.innerHTML=`<h2> ${message}</h2>`

}

function endGame(){
      userInput.innerHTML='' //clean the values first
      userInput.setAttribute("disabled", "")
      p.classList.add("button");
      p.innerHTML=`<h2 id="newGame"> Start new Game </h2>`
      startOver.appendChild();
      playGame = false;
      newGame()
}

function newGame(){
    const newgameBtn = document.querySelector("#newGame")
    newgameBtn.addEventListener("click", function(e){
        ranNum=parseInt(Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML=''
        Remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })

}




