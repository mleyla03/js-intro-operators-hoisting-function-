//Regular Function
function word1(num,wordy){
   let res=""
   for(let i=1; i<=num;i++){
      res=res+wordy
   }
   return res
}
console.log(word1(2,"L"))

//Arrow Funtion

word2=(num,wordy)=>{
   let res=""
   for(let i=1;i<=num;i++){
      res=res+wordy
   }
   return res
}
console.log(word2(2,"E"));
//Anonim Function
const word3=function(num,wordy){
   let res=""
   for(let i=1;i<=num;i++){
      res=res+wordy
   }
   return res
}
console.log(word3(2,"A"))