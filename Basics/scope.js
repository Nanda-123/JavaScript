// GLOBAL SCOPE
/*
var c=450
let b=45

// BLOCK SCOPE

if(true){ //{ } INDICATES THE SCOPE IN FUNCTIONES/ IF ELSE [NOT IN OBJECT BCZ IT'S OBJECT DECLARATION]
    let a=10 
    const b=20
    var c=30
    console.log(b)

} 
// OUTSIDE OF SYMBOL } WE CAN'T ACCESS THE a,b,c bcz THOSE SCOPE IS WITHIN {}

var c = 650 //FOR VAR DATATYPE NO DIFFERENTIATION BETWEEN GLOBAL & LOCAL SCOPE IT FETCH THE LATEST VALUE EVEN THOUGH WE DECLARE OUTSIDE THE FUNCTION [GLOBAL VARIABLE]


//console.log(a)
console.log(b)
console.log(c) // IT PRINT'S HTE VALUE OF 'C'
*/
//CALL FUNCTION INSIDE THE FUNCTION


function one(){
    const Fname = "Nanda"
    function two(val){
        const Lname= val
        console.log(Fname + " "+ Lname) //inside function can access variables from outside function bcz those are global to inside function but vise versa not possible
    }
//   console.log(Lname) //CAN'T ACCESS OUTSID ETHE fun two()
  two("Indoor")
}
//one()

if(true){
    const name1= "Ram"
if(name1 == "Ram"){
  
    const age = 23
    if(age != null){
        const job ="IT"
        console.log(` ${name1} and his age is: ${age} working in ${job}`)

    }
 }
}
