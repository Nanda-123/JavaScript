const clockid=document.getElementById("clock")
// const clockid = document.querySelector("#clock")  //BOTH R SAME

// console.log(clockid)
// let date = new Date()
// console.log(Date());

setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clockid.innerHTML=date.toLocaleTimeString()
},1000); //1000- 1 sec, This setinterval method runs each sec

