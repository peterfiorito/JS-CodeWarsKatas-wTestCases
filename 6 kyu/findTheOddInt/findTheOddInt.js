function findOdd(A) {
  //happy coding!
var arr = A.slice(0).sort();
console.log(arr)
var hash = {};

arr.forEach(function(e) { 
    if(hash[e]) hash[e]++;
    else hash[e] = 1;
});

var result = []; 
  for(var e in hash) {
    if(hash[e] % 2)
      result.push(+e);
  }

var final = result[0];

  return final;
}