const form = document.querySelector("form")

// const height = parseInt(document.querySelector("#height").value) // wi;; get empty value beuse we are fetching befor ethe submit event and after the page load so 

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value)
    // console.log(height)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")// NO PARSEINT -> BCZ IT'S AN ELEMENT

    if( height == '' ||height < 0 ||isNaN(height) || weight =='' ||weight < 0 ||isNaN(weight) ){
        results.innerHTML =`Please enter Valid Height : ${height} & Weight ${weight} `
    }

    else {
        const bmi = (weight / ((height *height)/10000 )).toFixed(2);
        console.log(bmi)
        // console.log(bmi.toFixed(3))
        // console.log(Math.round(bmi),4);
        //TO SHOW TH RESULT
        results.innerHTML =`<span>${bmi} </span>`
        const guide = document.querySelector("#guide")
        /*
        NOTE : DONT WRITE CONDITIOPNS INSIDE THE SWITCH CASE : BCZ it only evaluate T/F : case (bmi < 18.6):
        guide.innerHTML = "Under Weight";
        */


       // Use if-else for range-based BMI classification
       if (bmi < 18.6) {
        guide.innerHTML = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        guide.innerHTML = "Normal Weight";
    } else if (bmi > 24.9) {
        guide.innerHTML = "Over Weight";
    } else {
        guide.innerHTML = "Please enter correct values";
    }
    }

})
