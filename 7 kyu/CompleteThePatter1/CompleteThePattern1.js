function pattern(n){
 var output="";
   // Happy Coding ^_^
var i = 1;
var j= 1;
if (n == 1){
output = "1";
}//close if
else {
for(var i=1; i<=n; i++)
  {
    for(var j=1; j<=i; j++)
    {
      output +=i;
     }//close interior for
if (i<n){
  output += "\n";
  }
   } //close outer for
console.log(output);
}//close else
return output
}//close function