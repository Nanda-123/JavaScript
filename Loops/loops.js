//FOR
const array = [ "Nanda","Soma","Rakku","Putti","Ram"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element)
}

//Break & Continue
/*
BREAK : It breaks the flow once the condition got true, cursor completely comes out

CONTINUE : It skips the current rows amd print from next row to end
It will not comes out of loop 
*/

const arr = [1,2,3,4,5,6]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // if(element==3) break;
    if(element==3) continue;
    //console.log(element)

}

var a=6
while (a < 10) {
    //console.log(a) //INFINITE
    a++;
}
// console.log("While loop COmpleted!!")
//DO -WHILE
do {
   // console.log(a)
    
} while(a>10);

//LOOPS FOR ARRAYS

//FOR - IN 
/*
key : we can assign any names
object : any object

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

//FOR OF 
for (const element of object) {
    
}

*/

const arr1 = [1,2,3,4,5,6,7,8,9,99,88,77,22,12,43,35]

// object : I want loop the array so 

for (const num of arr1) {
    //console.log(num)
}
 const name =" Hello Nanda, Indoor"
 for (const i of name) {
   // console.log(`${i}`) // Prints each characters
 }


 //MAP
 
 const map1 = new Map()
 map1.set("Name" , "Nanda")
 map1.set  ("Age" , 50)
 map1.set  ("gender" , "Female")
 map1.set  ("Job" , "Sales")
 /*
console.log(map1)

//ITERATE THROUGH THE MAP :for -of

for (const iterate of map1) {
    console.log(iterate) // PRINTS IN THE FORM OF : ARRAY
}
console.log("Prints only KEY")
for (const [key] of map1) {
    console.log([key])
    // console.log(key) // PRINTS WOTHOUT []
}

console.log("Prints only VALUE")

for (const [key, value] of map1) {
    console.log(key, " : " ,value)
}
*/
//ITERATE THROUGH THE MAP :for -of ->NOT USED WITH MAP 

/*
for (const key in map1) {
    console.log(key)
}

*/
//USING ABOVE ITERATION METHOD WE CAN'T ITERATE THE OBJECT

//OBJECT ITERATION. USING FOR - IN
const myObj ={
    name : "Nanda",
    age : 25,
    job :"Marketing",
    location : "Dwd"
}

for (const key in myObj) {
    // console.log(key) //ONLY PRINTS THE KEY
    // console.log(myObj) //  PRINT COMPLETE OBJECT 4 TIMES BECAUSE OBJECT HAS 4 KEY-VALUE PAIR . [SO 4 TIME ITERATIONS]
    // console.log(myObj[key]) // PRINTS ONLY VALUE
}

//ARRAY ITERATION USINF FOR-IN : ARRAY ALSO HAS KEY'S STARTS FROM 0

const arr2 =["ram","sham","bheem","Soma"]
for (const key in arr2) {
    // console.log(arr2) //prints array 4 times
    // console.log(arr2[key]) //Print the value inside the array
    //console.log(key) //gives the integer key of arr2
}

//FOR - EACH LOOP
/*
const val = arr2.forEach(element => { //THIS IS CALLED CALL-BACK FUNCTION ()=>{}
     console.log(element)
});
// console.log(val)


//USING FILTER METHOD
const val2 =  arr1.filter((ele)=> ele>50)
// console.log(val2)


//USING FOR EACH LOOP
const v1 = arr1.forEach((element)=> {
        if(element>50){
             console.log(element)
           // console.log([element]) //WITH []
        }
})

//FILTER ON ARRAY ARR2

let vb = arr2.filter ( (name) => name =="ram" )  //HERE THESE IS NO SCOPE OPENED MEANS {}
console.log(vb)

let VC = arr2.filter ( (name) => {name =="ram"} )  //IT RETURN EMPTY [] BCZ NAME IS INSIDE THE SCOPE, TO PRINT THIS RETURN THE NAME
console.log(VC)

let vx = arr2.filter ( (name) => { return name =="ram"} )  //IT RETURN EMPTY [] BCZ NAME IS INSIDE THE SCOPE, TO PRINT THIS RETURN THE NAME
console.log(vx)
*/

//INCREMENT BY 10 :1
const a1 = [1,2,3,4,5]
/*
console.log(a1)

for( let i=0; i< a1.length ; i++){

    a1[i] =a1[i]  + 10  //changes the original array 
}
console.log(a1)

//2 USING MAP

let res = a1.map((num )=> num+10) //IT AUTOMATICALLY RETURN THE VALUE SO STORE IT IN A VARIABLE
console.log(res)  //NOT DISTURBING THE MAIN ARRAY

// 3 FOR EACH
a1.forEach((num) =>{
     num = num +  10;
    console.log(num) //not changing existing array
})

//4 filter
*/

//CHAINING 1.USING map()
/*
let n2 = a1
         .map((num)=> num*10) //first executed
         .map((num)=> num + 10) //sec
         .filter((num)=> num >=40)
         .forEach((num)=>{ //FOREACH WILL NOT RETURN ANYTHING FOR THE CALL BACK FUNCTIONS
            let bb = num -5;
            // return bb
            console.log(bb)
         })
// console.log(n2)

*/
//REDUCE () : AUTOMATICALLY SUMS WITH THE PREVIOUS VALUE

const a2 = [1,2,3,4]
let r1 = a2.reduce(function(accumalator, currentValue) {
    console.log(`acc : ${accumalator} and CuurentValue : ${currentValue}`  )
    return accumalator + currentValue
}, 0 ) // intial value  is 0

console.log(r1)

//without scope : means without return

var r2 = a2.reduce((acc, curr)=> acc+ curr)
console.log(r2)

// we can also acces with variable like a2.reduce(acc,item)=>acc+item.price,0)
/*
Feature	           for...in	                                                    for...of
Purpose	            Iterates over keys of an object or indices of an array.	    Iterates over values of an iterable object.
Works With	        Objects, arrays, and other enumerable properties.	        Arrays, strings, maps, sets, and other iterables.
Returns	            Keys (or indices).	                                        Values.
Use Case	        Access object properties.	                                Access array or iterable values.
Order Guarantee	No guarantee of order.	Preserves order for iterables.
*/

