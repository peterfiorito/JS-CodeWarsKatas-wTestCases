function convertHashToArray(hash){
  //your code here - sort the keys!

var output = [], item;

var result = Object.keys(hash).map(function(key) {

  return [String(key), hash[key]];
});
var output = result.sort();
 console.log (output);
return output
}