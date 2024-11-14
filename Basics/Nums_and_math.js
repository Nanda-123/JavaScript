const num1 = 100
console.log(num1)


const num2 = new Number(102) // WE ARE SURE THAT THE VALUE IS OF TYPE NUMBER ONLY
console.log(num2)

const convert= num2.toString() //it converted to String
console.log(convert)
console.log(convert.length)

console.log(num2.valueOf()) // GIVES NATIVE  VALUE
console.log(num2.toFixed(3))// AFTER THE NUMBER HOW MANY DECIMAL(ZERO'S) WE WANT TO SHOW
const num3 = 105.57836
console.log(num3.toPrecision(4)) //IT WILL ROUND UP FOR THE POSITION 4

console.log(typeof(num2.toLocaleString())) // IT CONVERT the value into indian format and to string

const num4 = 1000000
console.log(num4.toLocaleString("en-IN"))



//+++++++++++ MATH +++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // CONVERTS ONLY NEGATIVE VALUE TO POSITIVE VALUE
console.log(Math.abs(4))
console.log(Math.round(5.678))
console.log(Math.round(5.468))
console.log(Math.ceil(5.32)) // ALWAYS GIVES THE UPPER NUMBER
console.log(Math.floor(5.97)) // ALWAYS GIVES THE lower NUMBER
console.log(Math.max(4,2,8))
console.log(Math.min(4,2,8))
console.log(Math.pow(2,3)) //2^3



console.log(Math.random())//gives DOME RANDOM NUMBER RANGE BETWEEN 0 - 1
console.log(Math.random()*10) // it move the decimal point one digit right side, but we can get value 0.67 if the random value is 0.06
console.log((Math.random()*10)+1) // IT MAKE SURE'S THAT VALUE WILL ALWAYS > 1

// I NEED A VALUE WHICH IS ALWAYS > MIN VALUE
 let min =10
 let max=20
 console.log((Math.random())*(max-min+1)) //RESULT WILL BE < MIN VALUE
 console.log(((Math.random())*(max-min+1)+min))  // RESULT ALWAYS > MIN VALUE


