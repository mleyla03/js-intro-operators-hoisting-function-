//Regular Function
function fiveNumber1(a){
    var sum=0;
    for(var i=1; i<= a / 2; i++){
        if(a%i==0){
            sum = sum+i;
        }
    }
    if(sum==a){
        console.log(sum + ` `+"is perfect number")
    }
    else{
        console.log(sum + ` ` +"is not perfect number")
    }
}
fiveNumber1(6)

//Arrow Function
fiveNumber2=(a)=>{
    var sum=0;
    for(var i=1; i<= a / 2; i++){
        if(a%i==0){
            sum = sum+i;
        }
    }
    if(sum==a){
        console.log(sum + ` `+"is perfect number")
    }
    else{
        console.log(sum + ` ` +"is not perfect number")
    }
 }
 fiveNumber2(28)

//Anonim Function
const fiveNumber3=function(a){
    var sum=0;
    for(var i=1; i<= a / 2; i++){
        if(a%i==0){
            sum = sum+i;
        }
    }
    if(sum==a){
        console.log(sum + ` `+"is perfect number")
    }
    else{
        console.log(sum + ` ` +"is not perfect number")
    }
 }
 fiveNumber3(12)
