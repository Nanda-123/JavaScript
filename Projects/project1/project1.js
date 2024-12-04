const btns = document.querySelectorAll(".button")
// console.log(btns)

btns.forEach(element => {
//    console.log(element)

   element.addEventListener("click",function(e){
    // console.log(e)
    // console.log(e.target)
    //   console.log(e.target.id)
    const btncolor= e.target.id
     console.log( "btn clicked : ",btncolor)
     const body = document.querySelector("body")

    //  console.log(body)
    // body.style.backgroundColor="red"
     switch (btncolor) {
        case  "grey" : body.style.backgroundColor=e.target.id
            
            break;
        
        case  "white" : body.style.backgroundColor=e.target.id
            
            break;
        
        case  "blue" : body.style.backgroundColor=e.target.id
            
            break;
        case  "yellow" : body.style.backgroundColor=e.target.id
            
            break;
        
       
        
     
        default:  body.style.backgroundColor= body.id
            break;
     }

   })



});
