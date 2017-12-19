function addExtra( arr ){
  var finalList = arr.slice(); //slice the old array into the new one
  finalList.push(arr) //push the old array, as an array into the list
  console.log(finalList);//check what it returns
  return finalList //return the list
}