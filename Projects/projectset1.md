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

Projects On Events
Project 1:  SetTimeOut()
``` javascript
<!DOCTYPE html>

<html>
    <head>
        <title>
            JavaScript 
        </title>
    </head>
    <body>
        <h1> JavaScript Evenets</h1>
        <button id="stop">Stop</button>
    </body>
    <script>
        
        // const name = "Nanda"
        

        setTimeout(function(){
            console.log("Nanda");
        },2000)

        /*
        const changeTxt = document.querySelector("h1").innerHTML ="Js Learing"
        console.log(changeTxt) //suddenlt it changes the name SO set some iterval
        */
        const setTime =  setTimeout(function(){
            const changeTxt = document.querySelector("h1").innerHTML ="Js Learing"
            console.log(changeTxt)  
        }, 3000);

        //We can stop the Event
        // clearTimeout(setTime) // Have to pass the reference of settimeout

        //We can stop the chnages using the Button

        const btn = document.getElementById("stop") ;
        // console.log(btn);
        btn.addEventListener("click",function(){
            clearTimeout(setTime)
        })

    </script>

</html>
```

Project 2:  Use BUTTON TO STOP AND START THE INTERVAL : setTimeInterval()

```javascript
<!DOCTYPE html>

<html>
    <head>
        <title>
            JavaScript 
        </title>
    </head>
    <body>
        <h1> JavaScript Evenets</h1>
        <button id="start">Start</button> 
        <button id="stop">Stop</button>
    </body>
    <script>
        /*
        setInterval(function(){
            console.log("Nandini")
        },2000)
     */ //It Prints only one time 
    
     /*
     setInterval(function(){
        console.log("Nanda") //we can't able to see every print stmt.
     },2000)
     */
    /*
     const setIntr = setInterval(function(){
        // console.log("Nanda",Date()) 
        console.log("Nanda",Date.now()) 
     },2000)

     clearInterval (setIntr)

     */
    
        const name1 = function(){
        console.log("Shree", Date.now());
        }
     /*
        setInterval(name1 , 2000);
        */
        // We can pass the Param to the fuction
     
        const name = function(param){
        console.log(param, Date.now());
        }
     /*
        const setT = setInterval(name , 2000, "Soma"); 

        clearInterval (setT) // It stops
     */

     //USE THE BUTTON TO STOP AND START THE INTERVAL

     const start = document.getElementById("start");
     const stop1 = document.getElementById("stop");

     let  intervalId 
      start.addEventListener("click",function(){
        // Store the ID of the interval
        intervalId = setInterval(name, 1000, "Hello");
     })

     stop1.addEventListener("click", function(){
        clearInterval(intervalId)
     })

    </script>

</html>
```

Project 3 : On click of Button BackgroundColor changes every sec

```Javascript
<!DOCTYPE html>

<html>
    <head>
        <title>
            JavaScript 
        </title>
    </head>
    <body>
        <h1> Change Backgroud Color Every Second</h1>
        <button id="start">Start</button> 
        <button id="stop">Stop</button>
    </body>
    <script>
    
    //1.
   
    //    const start = document.getElementById("start")
    //    const stop = document.getElementById("stop")
       
    //    /*
    //    const repeat = start.addEventListener("click", function(){
    //     console.log("hi", Date.now())
    //    }) 
    //    */// Onclick of start it display value onetime
        
    //    //Generate a Hexa Number : 0-9 and A-F
    //    /*
    //    let hex = '0123456789ABCDEF';
    //     let sym = '#'
    //     console.log(Math.random()*16) ; 
    //     console.log(Math.floor(Math.random()*16)) ; 

    //    for(let i=0 ; i<6 ; i++ ){
    //     sym += hex[Math.floor(Math.random()*16)]
    //    } // at 6th iteration it generated an Hex[123456] number
    //    console.log(sym)

    //   */ //  keep everything in one fuction so we can return the random color code.addEventListener

    // //OR let  randomNo = function(){ 
    //     function randomNo(){
    //         let hex = '0123456789ABCDEF';
    //         let sym = '#'
    //             for(let i=0 ; i<6 ; i++ ){
    //             sym += hex[Math.floor(Math.random()*16)]
    //             }
    //             return sym;
    //             // console.log(sym);
    //     }
    //     // randomNo();
    //     // console.log(randomNo());
        
    // const body = document.querySelector("body");
    // //    console.log(body)

    // //ON CLICK OF START COLOR SHOULD CHANGE
    // /*
    //    start.addEventListener("click", function(){
    //     // console.log(randomNo());
    //     body.style.backgroundColor =randomNo();      
        
    //    })
    //    */

       
    //   //ON CLICK OF START COLOR SHOULD Every Sec
    //   let res = function(){
    //     return body.style.backgroundColor =randomNo()
    //    }
    //    let clr
    //    start.addEventListener("click", function(){
    //     // let res = body.style.backgroundColor =randomNo() 
    //     // above line Only work onclick of button next time will not work SO use a function
    //     clr = setInterval(res,1000);
    //    })

    //    //Stop Onclick of Stop button
    //    stop.addEventListener("click", function(){
    //     clearInterval(clr);
    //    })
       
    //2.
    //Instead  OF CREATING FUNCTION INSIDE DIRECT CREATE OUSIDE
   
    let setIntervalID; 
    let colorCode ;
    colorCode = function (){
            let hex = '0123456789ABCDEF';
            let sym = '#'
                for(let i=0 ; i<6 ; i++ ){
                sym += hex[Math.floor(Math.random()*16)]
                }
                return sym;
        }
    
    const startChangeColors = function(){
        setIntervalID= setInterval(res, 1000);
        
        function res(){
        body.style.backgroundColor= colorCode(); 
                   
        } 
      
    }
    const stopChangeColors = function(){
        clearInterval(setIntervalID)
    }
   
    const start= document.getElementById("start").addEventListener("click",startChangeColors)
    const stop= document.getElementById("stop").addEventListener("click",stopChangeColors)
    const body = document.querySelector("body")
   

    </script>

</html>
```