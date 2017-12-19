function getMiddle(s)
{
  //Code goes here!
var calc = s.length;
var mid = Math.round(calc/2);
console.log(mid);
var aux = mid-1;
var aux2 = mid+1;

if (s.length == 1){
  var getMiddle = s;
}
else if (calc%2 == 0) {
  var getMiddle = s.slice(aux,aux2);
}
else {
var getMiddle = s.slice(aux,aux+1);
}
return getMiddle
}