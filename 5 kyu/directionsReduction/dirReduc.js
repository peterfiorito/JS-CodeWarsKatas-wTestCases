function dirReduc(arr){
let a = "NORTH",
    b = "SOUTH",
    c = "EAST",
    d = "WEST",
    aux= arr.slice(0),
    i = 0;

for (i;i<aux.length;i){
  if (aux[i] == a && aux[i+1] == b){
    aux.splice(i,2);
    console.log(i);
    i = 0;
  }
  else if (aux[i] == c && aux[i+1] == d){
    aux.splice(i,2);
    console.log(i);
    i = 0;
  }
   else if (aux[i] == b && aux[i+1] ==a){
    aux.splice(i,2);
    console.log(i);
    i = 0;
  }
  else if (aux[i] == d && aux[i+1] == c){
      aux.splice(i,2);
      console.log(i);
      i= 0;
  }
  else{
  i++;
  }
}