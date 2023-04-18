
//Regular Function
function factorial1(a){
    var count=1;
    if(a==0 || a==1)
    {
       return count;
    }
    else if(a>1){
        for(let i=a; i>=1; i--)
        {
           count=count*i
        }
        return count
    }
    else{
        return" a is negative number"
    }
}
var a=4;
 count=factorial1(a)
 console.log(a +` `+"faktorial"+` `+"-"+ ` `+count)


//Arrow Function
 factorial2=(a)=>{
    var count=1;
    if(a==0 || a==1)
    {
       return count;
    }
    else if(a>1){
        for(let i=a; i>=1; i--)
        {
           count=count*i
        }
        return count
    }
    else{
        return" a is negative number"
    }
 }
 var a=5;
 count=factorial2(a)
 console.log(a +` `+"faktorial"+` `+"-"+ ` `+count)


//Anonim Function
const factorial3=function(a){
    var count=1;
    if(a==0 || a==1)
    {
       return count;
    }
    else if(a>1){
        for(let i=a; i>=1; i--)
        {
           count=count*i
        }
        return count
    }
    else{
        return" a is negative number"
    }
 }
 var a=-3;
 count=factorial3(a)
 console.log(a +` `+"faktorial"+` `+"-"+ ` `+count)