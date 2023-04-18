//Regular Function

function month1(num){
    if(num==1){
        return "Yanvar"
    } 
    else if(num==2){
        return "Fevral"
    }
    else if(num==3){
        return "Mart"
    } else if(num==4){
        return "Aprel"
    }
    else if(num==5){
        return "May"
    }
    else if(num==6){
        return "Iyun"
    }
    else if(num==7){
        return "Iyul"
    }
    else if(num==8){
        return "Avgust"
    }
    else if(num==9){
        return "Sentyabr"
    }
    else if(num==10){
        return "Oktyabr"
    }
    else if(num==11)
    {
        return "Noyabr"
    }
    else if(num==12){
        return"Dekabr"
    }
    else{
        if(num>12 || num<0){
            return"invalid input return"
        }
    }
   
}
var count=month1(-10)
console.log(count)


//Arrow Function

month2=(num,letter)=>{
    if(num==1){
        return "Yanvar"
    } 
    else if(num==2){
        return "Fevral"
    }
    else if(num==3){
        return "Mart"
    } else if(num==4){
        return "Aprel"
    }
    else if(num==5){
        return "May"
    }
    else if(num==6){
        return "Iyun"
    }
    else if(num==7){
        return "Iyul"
    }
    else if(num==8){
        return "Avgust"
    }
    else if(num==9){
        return "Sentyabr"
    }
    else if(num==10){
        return "Oktyabr"
    }
    else if(num==11)
    {
        return "Noyabr"
    }
    else if(num==12){
        return"Dekabr"
    }
    else{
        if(num>12 || num<0){
            return"invalid input return"
        }
    }
 }
 var count=month2(10)
 console.log(count)

 //Anonim Function
const month3=function(num,letter){
    if(num==1){
        return "Yanvar"
    } 
    else if(num==2){
        return "Fevral"
    }
    else if(num==3){
        return "Mart"
    } else if(num==4){
        return "Aprel"
    }
    else if(num==5){
        return "May"
    }
    else if(num==6){
        return "Iyun"
    }
    else if(num==7){
        return "Iyul"
    }
    else if(num==8){
        return "Avgust"
    }
    else if(num==9){
        return "Sentyabr"
    }
    else if(num==10){
        return "Oktyabr"
    }
    else if(num==11)
    {
        return "Noyabr"
    }
    else if(num==12){
        return"Dekabr"
    }
    else{
        if(num>12 || num<0){
            return"invalid input return"
        }
    }
 }
 var count=month3(5)
 console.log(count)