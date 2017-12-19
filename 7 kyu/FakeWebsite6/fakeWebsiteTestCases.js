const fcode=function(str){
  const isChar = function(a) {
    if(a){
      var code = a.toLowerCase().charCodeAt(0)
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}

function an(bk){
  return bk.issue>0 ? "Beta Status:Waiting for issues to be resolved" :
         bk.vote.length<5 ? "Beta Status:Testing & feedback needed" :
         bk.rank.length<8 ? "Beta Status:Ranking feedback needed" :
         bk.example==false ? bk.random==false ? "Beta Status:Example and random testcases needed" :
                                                "Beta Status:Example testcases needed" : 
         bk.random==false ? "Beta Status:Random testcases needed" :
 `Kata approved. vote scores:${bk.vote.reduce((a,b)=>a+b)}, rank:${Math.round(bk.rank.reduce((a,b)=>a+b)/bk.rank.length)}kyu`
  
}

function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"
  return allc[~~(allc.length*Math.random())]; 
}
function rndc1(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"
  return allc[~~(allc.length*Math.random())]; 
}
function rndc2(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  return allc[~~(allc.length*Math.random())]; 
}
function rnds(n){
  var len= n||~~(6*Math.random())+6;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc1();
  return rs.join("");
}
function rnds1(){
  var len= ~~(12*Math.random())+4;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc1();
  return rs.join("");
}
function rnds2(){
  var len= ~~(10*Math.random())+6;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc2();
  return rs.join("");
}
function rndkata(){
  
  return ~~(100*Math.random())%3!=0 ? 
  {name:rnds(),
  issue:(~~(100*Math.random())%3!=0?0:~~(5*Math.random())),
  vote:rndvote(),
  rank:rndrank(),
  example:(~~(100*Math.random())%4!=0?true:false),
  random:(~~(100*Math.random())%4!=0?true:false)}:
  {name:rnds(),
  issue:0,
  vote:rndvote(~~(5*Math.random())+5),
  rank:rndrank(~~(5*Math.random())+8),
  example:true,
  random:true}
}
function rndvote(n){
  var len= n|| ~~(10*Math.random());
  for (var i=0,rs=[];i<len;i++) rs[i]= ~~(4*Math.random())+1;
  return rs;
}
function rndrank(n){
  var len= n|| ~~(12*Math.random());
  for (var i=0,rs=[];i<len;i++) rs[i]= ~~(8*Math.random())+1;
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

Test.assertSimilar(kataStatus({name:"Training JS #1",issue:1,vote:[4,3,2,1],
rank:[8,7,6],example:true,random:true}),
  "Beta Status:Waiting for issues to be resolved");

Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,3,2,1],
rank:[8,7,6],example:true,random:true}) ,
  "Beta Status:Testing & feedback needed");
  
Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6],example:true,random:true}) ,
  "Beta Status:Ranking feedback needed");
  
Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:false,random:true}) ,
  "Beta Status:Example testcases needed");
  
Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:true,random:false}) ,
  "Beta Status:Random testcases needed");
  
Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:false,random:false}) ,
  "Beta Status:Example and random testcases needed");
  
Test.assertSimilar(kataStatus({name:"Training JS #1",issue:0,vote:[4,4,3,2,1],
rank:[8,7,6,8,7,6,8,7,6],example:true,random:true}) ,
  "Kata approved. vote scores:14, rank:7kyu");
  
console.log("<br><font size=4><b>--------100 Random Test--------</b></font>")
console.log("")

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var kk= rndkata(),ans=an(kk);
  console.log("<font color='#CD7F32'>Test for: betaKata="+JSON.stringify(kk)+"</font>","")
  var useran=kataStatus(kk);
  Test.assertSimilar(useran, ans);
}

console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")