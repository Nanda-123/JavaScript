
// console.log(document.querySelector("#guessField"))
const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#sbmt")
const lastresult = document.querySelector(".result")
const storePrevGuesses = document.querySelector(".guesse")
const remainingGuesses = document.querySelector(".remainingGuesses")
const lowOrHigh = document.querySelector(".lowOrHigh")


//Generate a random Number
// console.log(Math.random()*10 +1)
const randomNum = parseInt(Math.random()*10 +1)

let prevGuess = [] ; //TO STORE the already gussed array so that use doesn't repeat the number
let numOfGame = 0; //To count the number of Guesses,starts from 1
let playGame = true; //want to play the game : T / F

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        /*
        This retrieves the inner HTML content of an element (e.g., <div> or <span>).
        It is used to access or modify the HTML content inside an element, typically not used for input elements.
        innerHTML works for any HTML element to get or set its inner content.
        */
        // console.log(parseInt(userInput.innerHTML)) 

        // console.log(parseInt(userInput.value))  //value is specific to form elements like <input> or <textarea>
        const guess = parseInt(userInput.value)
        validateGuess(guess)

    })
}

function validateGuess(guess){ // Validations on user Input
    if(isNaN(guess)){
        alert  `Enter a valid Number btn 1 to 100`
    }
    else if(guess < 0 || guess > 100){
        alert  `Enter a Number between 1 to 100`
    }else{
        prevGuess.push(guess);
        
        if(numOfGame > 10){
            compareGuessWithRandomNumber(guess);
            displayMessage( `Game Over!!`);
            endGame();
        }else{
            compareGuessWithRandomNumber(guess);
            displayGuess(guess);
        }
    }
}

function compareGuessWithRandomNumber(guess){
    if(guess === randomNum){
        displayMessage(`Congrats, You Matched the Random Number!!!`);
        endGame();
    }
    else if(guess < randomNum){
        displayMessage(`Your Guess is Too Lowww!!!`);
    }
    else if(guess > randomNum){
        displayMessage(`Your Guess is Too Highh!!!`);
    }

}

function displayGuess(guess){
    userInput.value ='';
    storePrevGuesses.innerHTML +=`${guess}, `;//It ensures that every guess is followed by a comma and a space, 
    // storePrevGuesses.innerHTML += guess; //Without the , , the guesses may appear unformatted and harder to read.
    numOfGame ++;
    console.log(numOfGame)  
    remainingGuesses.innerHTML= 11 - numOfGame// above consition numOfGame > 10 allows one more increment  
    //2.
    /*
    If you want the output to include extra formatting or text need to use the Literal {}
    Remaining.innerHTML = `${11 - numGuess}`;
    */   
}

function displayMessage(message){
//    const msg = document.getElementById("#.msg")
   lowOrHigh.innerHTML = `${message}`
}
let btn1 = document.createAttribute("button")

function endGame(){
    userInput.innerHTML = '';
    // userInput.setAttribute("disabled",'') ;
    prevGuess = '' ;
    playGame = false ;

    const lastDiv = document.querySelector(".msg")
    lastDiv.innerHTML = `Game is Ended Start New Game..`
    btn1.innerHTML="Start New";
    newGame();
    
    
}
function newGame(){
    btn1.addEventListener("click",function(e){
        randomNum = parseInt(Math.random()*10 +1);
        playGame = true;
        prevGuess =[];
        numOfGame =1;
    })
   

}

