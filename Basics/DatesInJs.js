

let mydate = new Date() // Date is an Object
console.log(typeof(mydate))
console.log(mydate)
// console.log(mydate.getDate())
// console.log(mydate.getDay()) // GETS DAY OF THE WEEK
// console.log(mydate.getFullYear())
// console.log(mydate.getMonth())
// console.log(mydate.getTime()) // time it consoder from jan1 1970 to till date
// console.log(mydate.getTimezoneOffset())
// console.log(mydate.getUTCDay())

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString()) // GIVES THE TIME

console.log(mydate.toLocaleString('default',{    // USED TO COSTOMISE THE DATE .
    weekday:'long' // full day soelling will get it 
}
))




