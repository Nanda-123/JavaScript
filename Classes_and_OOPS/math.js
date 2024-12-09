
// console.log(Math.PI); 
/*
Math.PI= 5;
console.log(Math.PI);// why we can't change th ePI value

*/

// Check Math.PI property

const  PIValue = Object.getOwnPropertyDescriptor(Math,"PI"); //(Object , Object Property)
// console.log(PIValue);

/**
 * FOR PI  :
 * writable: false, : not overrride
   enumerable: false, : not iterable / not allow looping 
   configurable: false
 */

   //We can also assign these properties to our own Objects

   const User ={
    name : "Nanda",
    email : "nanda@ggl.com",
    pwd : "manda123"
   }

   console.log(User);
   console.log(Object.getOwnPropertyDescriptor(User,"pwd"));
   
   //Now Don't allow pwd to iterate 

   Object.defineProperty(User,"pwd",{
    enumerable : false // In the final for loop output u will not get the pwd.
   })

   //Try itering the Object Properties 
   for (let  [key, value] of Object.entries(User)) {
    console.log(`${key} : ${value}`);
     
   }
   



