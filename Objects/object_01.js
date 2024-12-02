
//OBJECTS HAS KEY : VALUE PAIR

// symabol
const mySymbol = Symbol("key1")
// OBJECT LITERAL

const jsObj= {
    name : "Nandu",
    email : "nanda@ggl.com",
    location : "blore",
    // mySymbol :"Rose"
    [mySymbol] :"Rose"  // if we specify key [within ] then access using []
}

//OBJECT ACCESS : differenct ways we can access the value of an object
// console.log(jsObj.name)
// console.log(jsObj["name"])
// console.log(jsObj)
// // console.log(jsObj.mySymbol)
// console.log(jsObj[mySymbol])

//ALTER THE VALUE
/*
jsObj.name = "Somaa"
console.log(jsObj.name)

//ACCESS THE FUNCTION USING OBJECT
jsObj.greet1 = function(){
    console.log("Hello User!!")
}

console.log(jsObj.greet1)

console.log(jsObj.greet1())

jsObj.greet2 = function(){
    console.log(`Hello User ${this.name}`)
}

// console.log(jsObj.greet2())

//IF WE DON'T WANT TO CHANGE THE VALUE THEN 'FREEZE IT'

Object.freeze(jsObj) // if we freeze the object we can't add/ change anything

jsObj.name = "Nandini"
console.log(jsObj.name)

*/
/*
// OBJECT AS A SINGLETON
const obj1 = new Object()
console.log(obj1)

const obj2 = {} // NON  SINGLETON OBJECT/ LITERALL
console.log(obj2)
*/

const user ={ } //CREATE OBJECT FIRST THEN ASSIGN THE VALUE FOR IT'S KEY
user.id="2024Dec"
user.name="Nanda"
user.isLoggedIn=false,
user.course ="CS"

//console.log(user)



//OBJECT INSIDE OBJECT

const kantarUser = {
    email : "nanda@kantar.com",
    fullname : {
        Fname : "Nanda",
        LName : "Dwd"
    },
    age : 23
}
//console.log(kantarUser)
//console.log(kantarUser.fullname)
//console.log(kantarUser.fullname.Fname)
//console.log(kantarUser.name?.Fname)

//MERGE OBJECT LIKE ARRAY MERGE

const ob1 ={1:"a", 2:"b"} //TO GET ALL THE FUNCTIONS IN AN OBJECT PLACE THIS CODE IN CONSOLE AND PRINT OB1 WILL GET ALL THE METHODS
const ob2 ={3:"c", 4:"d"}
const ob22 ={5:"c", 6:"d"}

/*
const ob3 = ob1 + ob2  // NOT CONCATE
console.log(ob3)

const ob4 = {ob1 , ob2 } //OBJECT INSIDE OBJECT
console.log(ob4)

const ob5 = Object.assign({}, ob1,ob2,ob22) // IT CONFIRMS THAT ALL THE OBJECT ARE SOURSE AND RESULT IS STORED IN {} AN EMPTY OBJECT.
console.log(ob5)

const ob6 = {...ob1,...ob2} //... IT MEANS SPREAD THE OBJECT THEN COMBINE THEM
console.log(ob6)
*/
/*
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(Object.hasOwn(user,'isLoggedIn')) // CHECK WETHER THE OBJECT HAS KEY OR NOT

*/

//OBJECT DE - STRUCTURE
//console.log(user.course)
//BUT IF I WANT TO USE COUNSE VALUE IN MULTIPLE TIMES THEN .NOTAION WILL NOT BE THE GOOD WAY.
//
const {course} = user // const{WHICH VALUE U WANT TO EXTRACT} = FROM WHICH OBJECT WANT TO EXTRACT THE VALUE
console.log(course)

//TO CREATE USER DEFINED VARIABLE INSTEAD OF USING OBJECT KEY DIRECTLY 
const {course : CourseTaken} = user //WE CAN ASSIGN PROPER NAMES
console.log(CourseTaken)

//JSON IS NOTHING BUT AN OBJECT LIKE
/*
{
    "id"="2024Dec",
"name"="Nanda",
"isLoggedIn"=false,
"course" ="CS"
}

//or it might be array
[
    {OBJECT },
    {OBJECT}
]

*/

