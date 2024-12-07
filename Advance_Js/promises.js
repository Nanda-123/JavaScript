
//INTRO :
/*
A promise in JavaScript is an object that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value. 

Using Promises:
.then(): Used to handle the resolved value of the promise.
.catch(): Used to handle errors or rejections.
.finally(): Executes a callback once the promise is settled (fulfilled or rejected).

*/


//Promise 1
const promiseOne = new Promise(function(resolve,reject){
    //Promise does ans Aync Tasks
    // DB Calls,Cryptography, network
    
    setTimeout(function(){
        // console.log("Async Call Completed !!!");
        // resolve(); // If we call the resolve it directly connect to then and executes.
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed !");
})  //then directly connected to resolve.

//Instead of storing promise in a avariable do it everthing at a time
//Promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("Async Task 2 is Completed!!");
       // resolve();
    }, 6000);
})
.then(function(){
    setTimeout(function(){
        console.log("Task 2 is COnsumed!!");
    },10000)  
})

//Promise 3 // Pass the Obj as a param to resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Async Task 3 Completed");
        // resolve({name : "Nanda", email : "Manda@ggl.com"})
    }, 2000);
})

promiseThree.then((obj)=>{
    console.log(obj);   
})

//Prominse 4 
/*
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error  = true; // OR false
        if(!true){ //If no errors , NOTE : RESULT ALWAYS FALSE
            console.log("Async Task 4 is completed!!");
            resolve({name : "Soma", email: "soma@headache.com"});
        }   
        else{
            reject("ERROR : Something went wrong!");
        }    
    }, 2000);
})

promiseFour.then((obj1)=>{
    console.log(obj1);
     console.log(obj1.email); 
     return obj1.email ; 
})
.then((email)=>{
    console.log(`User Email: ${email} ` );  
})
.catch(function(error){
    console.error("Rejected:", error);
})

*/
//NOTE : ALWAYS USE CATCH () CHINING WITH THEN().
.finally(()=>
{console.log(`It confirms that the promise is Resolved / Rejected`);

})
//PROMISE 5 : Use Async function  instead of then & Catch methods

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task 5 is completed!!")
        const error = true;
        if(error){
            resolve({mail : "async.com", pwd : "999"});
        }else{
            reject("Error : Promise 5 got an Error ")
        } 
    })   
});

async function comsumePromiseFive(){ 
    try{
        const output =  await promiseFive; //this line make sure that after promiseFive it will get response but incase error got then async will not automatically handels the error so ua etry catch block
        //Above line get executes when it get result but not the error
        console.log(output);
    }
    catch(error){
        console.log(error);
        
    }  
}
comsumePromiseFive()

//GET THE VALUES FROM AN URL  / API LINK
/*
async function getAllUsers(){
    try{// const link = fetch('https://jsonplaceholder.typicode.com/users') // It will take time to fetch the info from the link so USE await
    const link = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(link); // IF data is in string format so convert to JSON
    // console.log(link.status);
    const data = await link.json(); // SO times conversion also takes time so use await
    // console.log(data);
    
    }
    catch(error){
        console.log(`E : ${error}`);
        
    }
}
getAllUsers()

*/
//Above block we can handle using then & Catch
// some mistake in below code
/* 
promiseFive.then(()=>{
    // const link = fetch('https://jsonplaceholder.typicode.com/users'); //shows the pending action
    const link =  fetch('https://jsonplaceholder.typicode.com/users');
    setTimeout((link) => {
        console.log(link);
    }, 5000);
    console.log("LINK : ",link);
})
.catch((error)=>{
    console.log(`E :${error}`);
})

*/

//mistake corrected

//NOTE :
/* When WE use fetch, IT'S a  built-in promise provided by the Fetch API. 
This promise is automatically resolved or rejected by the browser.

How it works internally:
1. The fetch function returns a promise.
2. Internally, the browser:
    Calls resolve(response) if the network request is successful.
    Calls reject(error) if the network request fails (e.g., due to no internet).


    So, you don't need to manually call resolve or reject—the browser handles it for you.

*/
fetch('https://jsonplaceholder.typicode.com/users')
.then((gotResultBack)=>{
    return gotResultBack.json();
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>{
    console.log(`E :${error}`);
})


