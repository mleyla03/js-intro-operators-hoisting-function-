

//Regular Function

function twoNumber1(a){
    let count=0;
    if(a<=50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                count++
            }
        }
        console.log(count);
    }
    else if(50<a<=100){
        for (let i=1; i<a;i++){
            if(i%5==0){
                count++
            }
        }
        console.log(count);
    }
    else{
        for( let i=1; i<a; i++){
            if(i%8==0){
                count++
            }
        }
        console.log(count);
    }
   
}
twoNumber1(98)



//Arrow Function
const twoNumber2=(a)=>{
    let count=0;
    if(a<=50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                count++
            }
        }
        console.log(count);
    }
    else if(50<a<=100){
        for (let i=1; i<a;i++){
            if(i%5==0){
                count++
            }
        }
        console.log(count);
    }
    else{
        for( let i=1; i<a; i++){
            if(i%8==0){
                count++
            }
        }
        console.log(count);
    }
};
twoNumber2(60)


//Anonim Function
const twoNumber3=function(a){
    let count=0;
    if(a<=50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                count++
            }
        }
        console.log(count);
    }
    else if(50<a<=100){
        for (let i=1; i<a;i++){
            if(i%5==0){
                count++
            }
        }
        console.log(count);
    }
    else{
        for( let i=1; i<a; i++){
            if(i%8==0){
                count++
            }
        }
        console.log(count);
    }
   
 }
 twoNumber3(110)



    
        
    

  
