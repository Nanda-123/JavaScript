//FOR
const array = [ "Nanda","Soma","Rakku","Putti","Ram"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element)
}

//Break & Continue
/*
BREAK : It breaks the flow once the condition got true, cursor completely comes out

CONTINUE : It skips the current rows amd print from next row to end
It will not comes out of loop 
*/

const arr = [1,2,3,4,5,6]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // if(element==3) break;
    if(element==3) continue;
    //console.log(element)

}

var a=6
while (a < 10) {
    console.log(a) //INFINITE
    a++;
}
console.log("While loop COmpleted!!")
//DO -WHILE
do {
    console.log(a)
    
} while(a>10);

