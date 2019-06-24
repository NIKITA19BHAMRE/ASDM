exports.factorial=function(num){
   var ans=1;
   for(var i=1;i<=num;i++){
       ans=ans*i;   
   }
   return ans;
}