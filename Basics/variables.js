const accountId = 111
let accounName="SBI"
var accountEmail='nanda@google.com'
accountCity = 'Goa' //not a good practice but it's allowed in Js
let accountState // gives value : undefined
accountState1 // though error : undefined


//accountId=555 NOT ALLOWED

/*

Try avoid using Var because it has block scope and functional scope

*/

accounName="Soma"
accountEmail='soma@ggl.com'
accountCity='bali'
console.log(accountId)
console.table([accountId,accounName,accountEmail,accountCity,accountState])
 
