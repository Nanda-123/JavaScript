function myName(){
    console.log("Nanda")
    console.log("C")
    console.log("Indoor")
}
myName // it's just a reference BUT WILL NOT EXECUTE THE FUCTION.
//myName()

//IN JS NO NEED TO MENTION THE DATATYPES FOR THE PARAMETERS

/*
function add2Nums(n1,n2){
    console.log(n1+n2)
}

add2Nums() //NOT SENDING ANY ARGUMENTS
add2Nums(3,3)
add2Nums(3,"3") //IF IT SEES THE STRING IT TRY TO COMBINE THE VALUE INSTEAD OF ADD
add2Nums("3",3) 
add2Nums(3,"A")
add2Nums(3,null)
add2Nums(null,null)
add2Nums(null)

let Result1 = add3Nums(1,2,3)
console.log("Result is : " +Result1) //FUNCTION IS NOT RETURNING

*/
//IF I WANT TO STORE THE VALUE THEN FUNCTION SHOULD RETURN SO THE RETURN VALUE WE CAN STORE.

function add3Nums(n1,n2,n3){
    // let res;
    // res= n1+n2+n3
    // return res
    // console.log("Nanda") // AFTER THE RETURN IT WILL EXECUTE ANYTHING.

    //EASY WAY TO RETURN
    return n1+n2+n3
}
/*
let Result = add3Nums(1,2,3) //ANOTHER WAY:INSTEAD OF STORING INTO NEW VARIABLE WE CAN DIRECTLY PRINT THE RETURN VALUE
//console.log("Result is : " +Result)

function userLoggedIn(name ="Soma"){ //TO PASS ANY DEFAULT VALUE,IF U DIDN'T PASS ANYTHING NOT EVEN " "
                                    //IF WE PASS THE VALUE ARGUMENT WILL OVERRIDE THE DEFAULT VALUE.
    //TO HANDLE UNDEFINED VALUE
    if(name === undefined){
    //if(!name){                                  //check is NAME IS NOT THERE.
        console.log("Please enter the UseName") // IF WE DON'T WANT TO PRINT NEXT THING THEN PUT RETURN
        return
    }

    return `${name} just logged IN`
}

console.log(userLoggedIn("Nanda"))
//console.log(userLoggedIn("")) //result : just logged IN
console.log(userLoggedIn( )) //UNDEFINED BCZ VALUE IS NOT DEFINED 

*/

// ... called -> spead operator and REST operator very based on usage

function cart(val1,val2, ...num1){ // ...use to pass the multiple value called REST OP
    return num1 

}
 //console.log(cart(100,200,300,400,500)) // BCZ IM RETURNING ONLY NM\UM1

const user1 = {
    user :"Nanda",
    price : 500
}

//PASS OBJECT AS AGRUMENT
 function handleObject(anyObject){ // In general we can pass any object
    console.log(`UseName : ${anyObject.user} and Price ${anyObject.price}`)
 }
 
 //1 WAY
 handleObject(user1)// PASS THE OBJECT
 
 // note: IF THE KEY NAME GOT CHANGED LIKE PRICES THEN THE ABOVE FUNCTION GIVES ERROR

 //2 WAY

 handleObject ({
    name : "Nandini",
    price : 750

 })

 //PASS ARRAY AS AN ARGUMENT
 const arr = [100,200,300]
  function getArrayValue(getArrayNum){ //getArrayNum generic Name
    return getArrayNum[2] // [index value]
  }

  console.log(getArrayValue(arr)) 
  console.log(getArrayValue([100,300,760,700]))  //WE CAN PASS DIRECT ARRAY
  

 




