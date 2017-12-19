function yesNo(arr){

var arrc =arr.slice(0);
var i = 1;
var j = arr.length;
var check = arr[0];

for (i; i<=j; i++){
  var aux = arrc.splice(i,1);
  arrc.push(aux);
}
if(typeof check === "number"){
var final = arrc.map(Number);
}
else {
var final = arrc.map(String);
}
if (final.length > arr.length){
   final.pop();
}
console.log(final)
return final
}