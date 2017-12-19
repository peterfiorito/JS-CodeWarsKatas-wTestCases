function songDecoder(song){
  // ...
  var str = song.replace(/WUB/g," ");
  var fin = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
  return fin
}