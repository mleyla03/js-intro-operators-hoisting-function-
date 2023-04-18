function oneNumber1(num,seven){
   if(num % seven ==0){
      return"7-ye bolunur"
   }
   else{
    var count=num-(seven+(num % seven))%seven
     return count;
   }
}
var res=oneNumber1(40,7)
console.log(res);

//Arrow Function
const oneNumber2=(num,seven)=>{
   if(num % seven ==0){
      return"7-ye bolunur"
   }
   else{
    var count=num-(seven+(num % seven))%seven
     return count;
   }
};
var res=oneNumber1(49,7)
console.log(res);

//Anonim Function
const oneNumber3=function(a){
   if(num % seven ==0){
      return"7-ye bolunur"
   }
   else{
    var count=num-(seven+(num % seven))%seven
     return count;
   }
};
var res=oneNumber1(42,7)
console.log(res);


