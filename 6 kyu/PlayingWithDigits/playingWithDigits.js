function digPow(n, p){
var aux = [];
var i = 0;
var result = 0;
var sNumber = n.toString();
  // ...

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    aux.push(Math.pow (+sNumber.charAt(i),p));
    p++;
    console.log(aux)
}


var suma = aux.reduce((a, b) => a + b, 0);
console.log(suma);

var k = (suma/n);
console.log(k)

if (Number.isInteger(k)){
  result = k;
}
else {
  result = -1;
}

return result
}