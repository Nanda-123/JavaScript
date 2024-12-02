
//Immediately Invoked Function Expressions (IIFE)
/* An IIFE is a JavaScript function that is executed immediately after its definition. It is a self-contained function that runs as soon as it is created, without needing to be explicitly called.

(function() {
    // Code here runs immediately
})();

*An IIFE creates an isolated scope for variables and functions. Variables declared inside an IIFE are local to that function and cannot be accessed from the global scope.
 They cannot be accessed outside the IIFE.
* No risk of overwriting or interfering with other variables in the global scope.
* Use IIFEs to create an isolated scope for variables to avoid polluting the global namespace.


*/

const name = "Nanda" ;
(function one(){             //ONE() is a names IIFE 
    console.log(`USER NAME IS ${ name}`)
}) () ;

/*
STEP1 : COVERT THE FULL FUNCTION WITH ()
STEP2 : () USE TO CALL THE FUNCTION
STEP3 : ; IT INDICTAES THAT THE END OF THE FUCTION BEFORE CALLING ANOTHER IIFE WE SHOULD END THE EXISTING FUNCTION CALL

 one() // we can call the function anytime.
 */

( (age) =>{ //ARROW FUCTION WITHOUT SPECIFYING THE NAMES
    console.log(`Username is : ${name}, Age : ${age}`)
})(23);

( function two(age){
    console.log(` Username is : ${name}, Age : ${age}`)
})(55)

//WHEN WE USE IIFE WE SHOULD END EVERYTHING WITH ;
