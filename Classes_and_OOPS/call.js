
function School(userName){
    this.userName= userName; 
    console.log("Called!!! ")
    // console.log(userName);
}

function Student(userName,Email,Pwd){
    // School(userName)  //Student fun is only calling the school not storing the result
    
    //To store the function value we can call function
    School.call(this,userName); // through tjhis the function Student telling that instead of storing in ur context useName store it in my contect that's y it's sendi it's cintext by this.
    
    this.Email= Email;
    this.Pwd= Pwd;
    //If we didn't use new keyword to create and instance then atleast we have to return inside function otherwise output:undefined
    /*
    const data =  `${userName}, ${Email},${Pwd}`
    return data;
    */
    
}

//NOTE :
/*
const data = Student("Nanda","Jan@ggl.com",555) //IF WE CANN THE FUNCTION LIKE THIS 
console.log(data);
*/
/** WILL GET THE UNDEFINED :
 * Why data is undefined:
    When Student is invoked without new, this inside the function points to the global object (in non-strict mode) or undefined (in strict mode).
    The function does not have a return statement, so it returns undefined by default.
 */

//To use Student as a constructor function, you need to call it with the new keyword:
const data1 = new Student("Nanda","Jan@ggl.com",555) 
console.log(data1);