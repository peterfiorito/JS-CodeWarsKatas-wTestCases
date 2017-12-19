function iqTest(numbers){
  // ...
var different= 0;
var aux = numbers.split(" ");
var arr =[];
var arr2=[];
var i = 0;
var larges=aux[i];

for (i; i<aux.length;i++){
  if (aux[i] % 2 !== 0){
    arr.push(aux[i]);
  }
else if (aux[i] % 2 == 0){
  arr2.push(aux[i]);
}
}

if (arr.length > arr2.length){
    different = aux.indexOf(arr2[0]);
  }
  else {
    different = aux.indexOf(arr[0]);
  }

different += 1;
console.log(aux,arr,different)
return different
}