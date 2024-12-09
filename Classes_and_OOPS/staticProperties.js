class User{
    constructor(userName){
        this.userName=userName;
    }
    userLoggedIn(){
        return `UserName is : ${this.userName}`;    
    }
    //If we don't want to allow the methos access make it static
    //static : iT WILL NOT BE ACCESSIBLE IN CHILD like : class child extends User
    static createID(){
        return '123';
    }
}

const data = new User("Nandini");
console.log(data.userLoggedIn());
// console.log(data.createID()); // ERROR : BCZ This methos is : Static