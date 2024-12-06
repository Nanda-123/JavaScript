Javascript Projects :

Project 1 : Change BackgroundColor On Click of Button

``` JavaScript
const btns = document.querySelectorAll(".button")
// console.log(btns)

btns.forEach(element => {
//    console.log(element)

   element.addEventListener("click",function(e){
    // console.log(e)
    // console.log(e.target)
    //   console.log(e.target.id)
    const btncolor= e.target.id
     console.log( "btn clicked : ",btncolor)
     const body = document.querySelector("body")

    //  console.log(body)
    // body.style.backgroundColor="red"
     switch (btncolor) {
        case  "grey" : body.style.backgroundColor=e.target.id
            
            break;
        
        case  "white" : body.style.backgroundColor=e.target.id
            
            break;
        
        case  "blue" : body.style.backgroundColor=e.target.id
            
            break;
        case  "yellow" : body.style.backgroundColor=e.target.id
            
            break;
        
       
        
     
        default:  body.style.backgroundColor= body.id
            break;
     }

   })



});

```

Project 2 : BMI(Body Mass Index) Calculator

``` Javascript

const form = document.querySelector("form")

// const height = parseInt(document.querySelector("#height").value) // wi;; get empty value beuse we are fetching befor ethe submit event and after the page load so 

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value)
    // console.log(height)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")// NO PARSEINT -> BCZ IT'S AN ELEMENT

    if( height == '' ||height < 0 ||isNaN(height) || weight =='' ||weight < 0 ||isNaN(weight) ){
        results.innerHTML =`Please enter Valid Height : ${height} & Weight ${weight} `
    }

    else {
        const bmi = (weight / ((height *height)/10000 )).toFixed(2);
        console.log(bmi)
        // console.log(bmi.toFixed(3))
        // console.log(Math.round(bmi),4);
        //TO SHOW TH RESULT
        results.innerHTML =`<span>${bmi} </span>`
        const guide = document.querySelector("#guide")
        /*
        NOTE : DONT WRITE CONDITIOPNS INSIDE THE SWITCH CASE : BCZ it only evaluate T/F : case (bmi < 18.6):
        guide.innerHTML = "Under Weight";
        */


       // Use if-else for range-based BMI classification
       if (bmi < 18.6) {
        guide.innerHTML = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        guide.innerHTML = "Normal Weight";
    } else if (bmi > 24.9) {
        guide.innerHTML = "Over Weight";
    } else {
        guide.innerHTML = "Please enter correct values";
    }
    }

})

```

Project 3: 
```Javascript
const clockid=document.getElementById("clock")
// const clockid = document.querySelector("#clock")  //BOTH R SAME

// console.log(clockid)
// let date = new Date()
// console.log(Date());

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clockid.innerHTML=date.toLocaleTimeString()
},1000); //1000- 1 sec, This setinterval method runs each sec


```

Project 4 : GUESS THE NUMBER

```Javascript

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



```