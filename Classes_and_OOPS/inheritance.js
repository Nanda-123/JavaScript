class User{
    constructor(userName){
        this.userName=userName;
    }
    userLoggedIn(){
        console.log(`Logger in User is : ${this.userName}`);
    }
    userMailInfo(email,pwd){
        console.log(`User MailID is : ${this.email} &  Password : ${this.pwd}`); //Works 
        /**IMP NOTE :
         * The method references this.email and this.pwd. 
         * These properties are already defined in the Teacher class constructor (from this.email = email and this.pwd = pwd).
            Because the instance chai already has these properties, the method finds them on the object.
         * 
         */
        // console.log(`User MailID is : ${email} &  Password : ${pwd}`);  //OUTPUT : UNDEFINED  
        
    }
}

class Teacher extends User{
    constructor(userName, email, pwd){
        /**Can you call super(this.username)?
            No, you cannot use super(this.userName) because super must be called before accessing this. In JavaScript,
            the this reference is not available until after the parent class constructor has been invoked. 
            */
        //NOTE : SUPER CAN BE CALLED ONLY ONCE IN A CLASS.
        //Always call super with required arguments directly in the constructor before accessing this.

        super(userName); //super is used in a subclass to call constructors of the parent class.
        // super( email, pwd); //super is used in a subclass to call methods of the parent class.
        this.email=email;
        this.pwd = pwd;
    }
    teacherLoggedIn(){
        console.log(`Logger in Teacher Name is : ${this.userName} &  email : ${this.email}`);
    }
}

const chai = new Teacher("Nanda","nanda@ggl.com",666);
//Calling parent from the Instance of Child class
// console.log(chai.userLoggedIn());  //Dont use the console.log bcz these 2 methods are not returning anything to print they it self has print stmt's
/*
chai.userLoggedIn();
chai.teacherLoggedIn();
chai.userMailInfo();
*/
const coffee = new User("Yatika");
// coffee.teacherLoggedIn; //WRONG : Only instances of Teacher (or subclasses of Teacher) have access to IT'S method.
/*
coffee.userLoggedIn();
coffee.userMailInfo();
*/

console.log(chai == coffee);

console.log(chai == Teacher);
console.log(User == coffee);

console.log(chai instanceof Teacher);
console.log(coffee instanceof User);

console.log(chai instanceof User);
console.log(coffee instanceof Teacher);



