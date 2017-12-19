Test.assertEquals(pattern(1),"1");
Test.assertEquals(pattern(2),"1\n22");
Test.assertEquals(pattern(5),"1\n22\n333\n4444\n55555");
Test.assertEquals(pattern(0),"");
Test.assertEquals(pattern(-25),"");
Test.assertEquals(pattern(-99),"");

function solutionPattern(n){
 var output="";
 for(var i=1; i<=n; i++)
  {
    for(var j=1; j<=i; j++)
     {  
       output+=i;
      }
    output+="\n";
   }
 return output.slice(0,-1);
}

for(var i = 0; i < 20; i++) {
  var n = Math.floor(Math.random() * 99);
  Test.assertEquals(pattern(n), solutionPattern(n));
}