/*
INSTEAD OF CREATING PROTOTYPE ONLY ON CREATED OBJECT WE CAN CREATE ON BJECT IT SELF BCZ:
ARRAYS, FUNCTION ALL ARE OBJECTS  So if we create on Object it self it will we applicable for all.
*/

// create an object for reference

user ={
    name : "Nandu",
    age : 18,
    pwd : 123
}
// console.log(user);
Object.prototype.changeName = function(){
    console.log("U called Object Prototype chnageName ");   
}

// user.changeName();

//check for array the same above prototype

const places =["paris", "Kashmir","USA"]
// places.changeName(); // it also success bcz u created pttype on core Object

// Now create it only on array

// places.prototype.increment = function () { //ERROR: Ur creating Ptype on array reference Not the Array .

Array.prototype.increment = function () {
    console.log("U called Specific Array Prototype!!");    
}
// places.increment();

//user.increment(); //It's specifically created On Array so  "NOT ACCESSIBLE FOR OBJECT"

//CREATE PROTOTYPE ON STRING:

const str = " Bengaluru    ";

String.prototype.stringLength= function(){
    console.log(this); // who call the fuction that reference
    // console.log(this.trim().length); // Removes Spaces and gives length
    let len = this.trim().length;
    console.log(`String length is  : ${len}`);
    
}

//Call the Created Prototype
// str.stringLength();
// "Nandini".stringLength();

//Prototypal Inheritance

 function grandParent (name,age){
    this.name ="Grand"
    this.age = 80
}
 function parent(name,age) {
    this.name ="parent";
    this.age = 40;
}
function child(name,age) {
    this.name ="child";
    this.age = 25;
    // __proto__ : grandParent //I want to inherit the prototype from Grand -> child [This is old methos]
}
/** : NOTEEE
 * because grandParent is not a function or constructor, so it does not have a prototype property. In JavaScript, 
 * only functions (including constructor functions and classes) have the prototype property.
 * grandParent is an object literal, not a constructor function or class.
    Objects created with object literals do not have a prototype property.
 */

/*
const grandParent = {
    name :"Grand",
    age : 80
}

grandParent.prototype.grand= function(){ //NOT POSSIBLE THIS BCZ OF ABOVE INFO
    console.log(" U called : Grand Parent Prototype!!");   
}
*/

// const gParent = new  grandParent(); /**prototype property is only available on constructor functions or classes, not on instances created from them. */

grandParent.prototype.grand= function(){ //prototypes we have to attach on functions/ constructor NOT on Instance.
    console.log(" U called : Grand Parent Prototype!!");   
}

const gParent =  new grandParent();

// console.log(gParent) // give the function details

//NOTE :
/** grandParent.grand(); 
 Why grandParent.grand() Doesn't Work
The prototype is a property of the constructor function (grandParent.prototype), 
but prototype methods are not directly accessible from the constructor function itself. Instead, 
they are accessible through instances of the constructor.

The prototype object provides the shared methods or properties for all instances created by new grandParent(). 
However, the constructor function (grandParent) itself does not have these methods.
 */

//ACCESS THE PROROTYPES ONLY WITH INSTANCE
gParent.grand();


//INHERITANCE

// Object.setPrototypeOf(child,grandParent);
Object.setPrototypeOf(child.prototype, grandParent.prototype);


/**
 * Use new child() to create an instance (cld), which inherits from child.prototype. 
 * Since child.prototype now has grandParent.prototype in its chain, 
 * cld can access grandParent.prototype.grand.
 */

const cld = new child();
cld.grand();

// -----------
const Teacher={
    makeVedio : true
}

const TeachingSUpport ={
    isAvailable : false
}
const TASupport ={
    fullTime : true,
    __proto__ : TeachingSUpport //OLD Approch for INheritance
    //TASupport can access all the prototypes of TeachingSUpport
}

Teacher.__proto__ = user ;

//NEW APPROACH

Object.setPrototypeOf(TASupport,TeachingSUpport) ;;
