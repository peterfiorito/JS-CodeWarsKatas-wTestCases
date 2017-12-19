function spinWords(string){
  //TODO Have fun :)
var words = string.split(" ");
var x = []
for (var i = 0; i <words.length;i++){
  if (words[i].length >= 5){
      var word = words[i].split("").reverse().join("");
       x.push(word)
  }
else {
   x.push(words[i])
}
}
var spin = x.join(" ");
return spin
}