function kataStatus(betaKata){
  //coding here...
var message = "";
  if (betaKata.issue !== 0){
  message = "Beta Status:Waiting for issues to be resolved";
}
else if (betaKata.vote.length < 5){
  message = "Beta Status:Testing & feedback needed"
}
else if  (betaKata.rank.length < 8){
  message = "Beta Status:Ranking feedback needed";
}
else if (betaKata.example == false && betaKata.random == false){
  message = "Beta Status:Example and random testcases needed";
}
else if (betaKata.example == true && betaKata.random == false){
  message = "Beta Status:Random testcases needed";
}
else if (betaKata.example == false && betaKata.random == true){
  message = "Beta Status:Example testcases needed";
}
else {
var total = 0;
var totalRank = 0;
for(var i = 0; i < betaKata.vote.length; i++) {
    total += betaKata.vote[i];    
}
for(var i = 0; i < betaKata.rank.length; i++) {
    totalRank += betaKata.rank[i];    
}
var avg = (totalRank/betaKata.rank.length).toFixed(0);
message = "Kata approved. vote scores:" + total + ", rank:" + avg + "kyu"
}
return message
}