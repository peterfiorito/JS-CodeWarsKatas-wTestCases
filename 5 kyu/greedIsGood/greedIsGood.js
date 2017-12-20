function score( dice ) {
  // Fill me in!
  var points1 = 0;
  var ord = dice.sort();
  for(var i =0; i<ord.length;i++){
    if (ord[i]==ord[i+1] && ord[i+1]==ord[i+2]){
      switch(ord[i]){
        case 1:
          points1 += 1000;
          break;
        case 6:
          points1 += 600;
          break;
        case 5:
          points1 += 500;
          break;
        case 4:
          points1 += 400;
          break;
        case 3:
          points1 += 300;
          break;
        case 2:
          points1 += 200;
          break;
      }
      ord.splice(i,2);
    }
    else if (ord[i]==1){
        points1 += 100;
    }
    else if(ord[i]==5){
      points1 += 50;
    }
    else{
      points1 +=0;
    }
  }
  console.log(dice,points1);
  return points1
}