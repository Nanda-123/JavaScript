
class User{
    constructor(userName, email, pwd){
        this.userName=userName;
        this.email=email;
        this.pwd =pwd;
    }
    encryptPassword(){
        return `${this.pwd}abccz` //WHatever the password is there it attaxched abcc at the end
    }
    changeUseName(){
        return `${this.userName.toUpperCase()}`
    }
    findLength(){
        return `${this.pwd.length}`;
        
    }
}

const user1 = new User("nanda","nanda@ggl.com", "Nandini@4567")
// console.log(user1);
// console.log(user1.encryptPassword());

// console.log(user1.changeUseName());
// console.log(user1.findLength());

//BEHIND THE SCENE
//Class user can be a object so we can access it's property by . NOTATION

function  User1(userName, email, pwd)
    {
        this.userName=userName;
        this.email=email;
        this.pwd =pwd;
    }

    User1.prototype.encryptPassword = function(){
        return`${this.pwd}xyzz`;
    }
    User1.prototype.changeUseName= function(){
        return `${this.userName.toUpperCase()}`;
    }

    const tea = new User1("Swarn" ,"swarn@amazon.com","42e362gehdjMMM")
    // console.log(tea);
    console.log(tea.encryptPassword());
    console.log(tea.changeUseName());
    