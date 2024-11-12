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
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
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