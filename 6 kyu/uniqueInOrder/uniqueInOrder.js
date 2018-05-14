var uniqueInOrder=function(iterable){
  // remember iterable can be a string or an array
  let arr = [], aux = [];
  typeof iterable == String ? arr = iterable.split("") : arr = iterable;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != arr[i+1]){aux.push(arr[i])}
  }
  return aux
}