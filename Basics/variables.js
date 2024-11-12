const accountId = 111
let accounName="SBI"
var accountEmail='nanda@google.com'
accountCity = 'Goa' //not a good practice but it's allowed in Js
let accountState // gives value : undefined
// accountStakte1 // though error : undefined


//accountId=555 NOT ALLOWED

/*

Try avoid using Var because it has block scope and functional scope

*/

accounName="Soma"
accountEmail='soma@ggl.com'
accountCity='bali'
console.log(accountId)
console.table([accountId,accounName,accountEmail,accountCity,accountState])
 
//------------------ DATATYPESSSS
/*

Return type of variables in JavaScript
1) Primitive Datatypes : give the copy of original type
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes : gives the original type and al the changes will made in original value
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */

       const temp = null
       console.log(typeof temp)
       console.log(typeof NoName)

       const id = Symbol('123')
       const diffId=Symbol('123')

    //    console.log(id === diffId) // symbol datatypes will not be same// through error
       console.log(typeof id)
       const biggint= 1234567856787899n
       console.log( typeof biggint)

       const array = ['Som','Ram','Raj']
       console.log(typeof(array))

       const myobj ={
        name : "Nanda",
        age : "18"
       }

       console.log(typeof(myobj))

       const MyFunction = function (){
        console.log("Hello World!!")

       }
       console.log(typeof(MyFunction))

       //++++++++++++++ MEMORY ALLOCATION
       // Stack (Premitive),  Heap(non - Premitive)

       let Num= 125
       let Num2= Num
       Num2 = 333

       console.log(Num)
       console.log(Num2)

       let myobj1 = {
              name :'nanda',
              age : 20
       }
       console.log(myobj1)

       let myobj2 = myobj1
       console.log(myobj2)

       myobj2.name = "Soma"
       console.log(myobj1)
       console.log(myobj2)
//FOR MORE INFO CHECK JAVASCROPT MDM WEBSITE. WHERE WE CAN FIND ACTUAL SYNTAX FOR JAVASCRIPT.


const name ="Nandini"
const age1 =20

// console.log(name + age1+ "from DWD") // avoid not to use bcz not a good practice insted try

console.log(`Then name is ${name} and her AGe is ${age1} and she is from DWD`) //NOTE use :`` TO PRINT

const FName = new String("Nanda_I!")

console.log(FName.length)
console.log(FName.charAt(3))
console.log(FName.concat(' ',"Indoor"))
console.log(FName)
console.log(FName.endsWith( 'd'))// if we didn't specipy the position it will check in whole String
console.log(FName.includes("Nan")) // if we didn't specipy the position it will check in whole String
console.log(FName.indexOf("nda")) // return -1 if not found, return only the first char position in string
console.log(FName.indexOf("d"))
console.log(FName.lastIndexOf("a")) //Finds the last occurrence of the specified value in a string
console.log(FName.match("!")) 
console.log(FName.match("&")) 
// console.log(FName.matchAll("_")) 
console.log(FName.replace("da","dini")) 
console.log(FName.replace("a","m")) // only specified letter will replace
console.log(FName.replaceAll("a","i")) // It replaces the letter wherever in the string
console.log(FName.search("N")) 
console.log(FName.slice(0,4)) // NOT CONSIDER THE END POSITION
console.log(FName.split("a",2)) // IT SPLITS THE STRING AT THE POSITION OF 'a' AND GIVE THE SPECIFIED NUMBER OF SUBSTRINGS
console.log(FName.split("a",3)) // GIVES 3 SUBSTRINGS. NOTE: IT ACCEPT THE NEGATIVE VALUE, STRTS FROM END
console.log(FName.strike("a")) // I THINK GIVE HTML TAG FOR THE STRING
console.log(FName.sub('')) // GIVES HTML SUB TAG
console.log(FName.substring(5)) // gives the String  starting from position 5
console.log(FName.substring(0,6)) // not consider the end position. NOTE : NO NEGATIVE VALUE
console.log(FName.toLocaleLowerCase())
console.log(FName.toLocaleUpperCase())
console.log(FName.toLowerCase("AND"))
console.log(FName.toLowerCase())
console.log(FName.toUpperCase("and"))
console.log(FName.toString( )) //toString() method converts an object or a value to a string representation

let num = 123;
console.log(num.toString());  // Output: "123"

let bool = true;
console.log(bool.toString());  // Output: "true"

let arr = [1, 2, 3];
console.log(arr.toString());   // Output: "1,2,3"


let obj = { name: "Nanda" };
console.log(obj.toString());  // Output: "[object Object]"

let jet = "    Yashnaa    "
console.log(jet)
console.log(jet.trim())  //trim start and end whitespaces

console.log(jet.valueOf()) //To provide their "default" or "native" value. GIVES ORIGINAL VALUE


