
/*
Array is Resizable (we can change the sixe of the array).
we can insert the element from different types like : int, boolean,string etc

*/

// const arr1 = [99,"nanda", 'True']
// console.log(arr1[2])

let arr2= new Array(1,2,3,4,5)
// console.log(arr2[0])
// console.log(arr2)

//ARRAYS METHODS
// arr2.push(7)
// arr2.push(8)
// console.log(arr2)

// arr2.pop() // REMOVES ONLT THE LAST ELEMENT EVEN THOUGH U SOECIFIED ANY VALUE
// console.log(arr2)

// arr2.unshift(8) // IT INSERT AT THE START POSITION
// console.log(arr2)
// arr2.shift() // IT REMOVES THE STARTING ELEMENT
// console.log(arr2)
// arr2.shift()
// console.log(arr2)

/*
console.log(arr2.includes(5)) // TO CHECK EXISTENCE OF AN ELEMENT
console.log(arr2.indexOf(4)) 
console.log(arr2.indexOf(55))  // return -1 is not exists

console.log(arr2)
const a3 = arr2.join()
console.log(a3) // ARRAY CONVERTED TO STRING
console.log(typeof(a3))

//SLICE & SPLICE

console.log('Original Array : ',arr2)
let a1= arr2.slice(1,3) // NOT CONSIDER THE END ELEMENT
console.log(a1)
console.log('After Slice Array : ',arr2)

let a2= arr2.splice(1,3) // IT INCLUDES THE END ELEMNET AND REMOVES/ CUTS THE ELEMENTS FROM ORIGANAL ARRAY
console.log(a2)
console.log('After splice Array : ',arr2)


*/
const high_Frd =["ram", "rakku","paru"]
const clg_Frd = ["Soma","raghu","varu"]

// high_Frd.push(clg_Frd) // IT PUTS ARRAY INSIDE ARRAY
// console.log(high_Frd)

// console.log(high_Frd+clg_Frd) // GIVE IN STRING FORMAT

// const allFrds= high_Frd.concat(clg_Frd)
// console.log(allFrds)

//SPREAD OPERATOR [...A1,...A2,...A3]-> IT SPLITS THE SRRAY FIRST , SPLITINTO AN INDIVIDUAL ELEMENT THEN DO THE CONCAT

const all=  [...high_Frd,...clg_Frd]
    console.log(all)

let arrInsideArr = [1,[2,3],[4,5,6],[7],[8,9],[3,8]]
let newarr= arrInsideArr.flat(Infinity)// it gives single array with all the elemts
console.log(newarr)

console.log(newarr.includes("NANDA"))
console.log(Array.isArray("NANDA"))
console.log(Array.from("NANDA")) //CREATE AN ARRAY
console.log(Array.from ({name : "NANDA"})) // VALUE IS AN OBJECT so it return empty array

let n1=100
let n2=n4=n5=300
let n3 = 200
console.log(Array.of(n1,n2,n3,n4)) // CREATE AN ARRAY FROM VARIABLE DECLARATION

