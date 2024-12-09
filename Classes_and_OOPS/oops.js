
//OBJECT LITERAL
const user = {
    userName : "Nandini",
    age : "18",
    loggedIn : true, // , imp bcz it's continuation next

    getUserDetails : function(){ //It's part of "user" object
        // console.log("Got the  User Details!!")
        console.log(`Got the  User Name : ${this.userName}`)
        //this : it means current context .
        console.log(this);

    }
    
}
// console.log(user.userName);
// // console.log(user.getUserDetails());

// console.log(this);

function User(userName,age,loggedIn){
    // userName = userName; //compiler will not understart whats what so we need to specifically assign "this" if both names are same
    this.userName = userName;
    this.age = age ;
    this.loggedIn = loggedIn;
    
    // console.log(this);
     return this; //If we are not returning this automatically it return the complete object
}
/*
 const useOne = User("Druv", 25, false);
 const useTwo = User("Manvit", 10, true); //userTwo Override the values of userOne even though it's not printing  but it's executing before print.
 //To avaoid this overriding create seperate instance using new keyword
 console.log(useOne); 
 */

 const useOne = new User("Druv", 25, false);
 const useTwo = User("Manvit", 10, true); // now Two will not override One
 console.log(useOne);  

 /**
  * When we add new :
  * NEW EMPTY OBJECT IS CREATED : It creates an EMPTY Object first {}.
  * a PROTOTYPE IS LINKED : newly created Object gets linked to the prototype property of the constructor function
  .means: Object gets access to the properties & methods defined on COnstructor prototype.
  *THE coNSTRUCTOR IS CALLED :  The constructor gunction id called with specified arguments and this is bound to newly create object.
   IF NO explicit return valur is specufied from the constructor Javascript assumes "this",  & it adds this keyword to object param
  * THE NEW OBJECT IS RETURNED :
  */
