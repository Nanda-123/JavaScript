//function () is also and object

function MultiplyBy5(num){
    return num*5;
}
MultiplyBy5.power=2; 

// console.log(MultiplyBy5(5));
// console.log(MultiplyBy5.power); //here we are accessing the param like object access.
// // console.log(MultiplyBy5);
// console.log(MultiplyBy5.prototype); // It's as EMPTY Object{}


//like existing prototype like: slice, length we can also create own prototypes

function food(foodName , rate){
    this.foodName= foodName;
    this.foodrate = rate;
    // console.log(foodName,foodrate);
    console.log(this.foodName, this.foodrate); // Access both as properties of the instance
    
}
//Own Prototypes
food.prototype.increment = function () {
    this.foodrate++; // Increment the instance's 'foodrate' property
    console.log(this.foodrate);
}

food.prototype.printFood= function(){
    console.log(`The FOOD is : ${this.foodName}`);   
}
// const Jamun1 =  food("Jamun", 50) // without new it only executes the function will will not aware of the newly attached prototypes to the fuctions So use "new"
const Jamun = new food("Jamun", 50)
Jamun.increment();
Jamun.printFood();
/*
const tea = food("Tea", 20) 
tea.printFood();  // it will not execute, bcz it's not ware of fuctions methods / prototypes without "new"

*/