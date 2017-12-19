function min(arr, toReturn) {
  // TODO
var mini = Math.min.apply(null, arr);
  if(toReturn == "value"){
    return mini
  }
  else {
    var mini = arr.indexOf(mini);
    console.log(mini);
    return mini
  }
}