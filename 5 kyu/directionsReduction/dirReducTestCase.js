a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
Test.assertSimilar(dirReduc(a), ["WEST"])
b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
Test.assertSimilar(dirReduc(b), [])
c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
Test.assertSimilar(dirReduc(c), ["NORTH"])
u = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
Test.assertSimilar(dirReduc(u), ["EAST", "NORTH"])
v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
Test.assertSimilar(dirReduc(v), ["NORTH", "EAST"])
u=["NORTH", "WEST", "SOUTH", "EAST"]
Test.assertSimilar(dirReduc(u), ["NORTH", "WEST", "SOUTH", "EAST"])


Test.describe( "More tests : . . . ", function(){
  var rr = [["NORTH","EAST"],["EAST","SOUTH"],["SOUTH","WEST"],["WEST","NORTH"],["NORTH","NORTH","NORTH"]]
  
  Test.randomize(rr).forEach(function(res){
      var aa = ["NORTH","SOUTH"], bb = ["EAST","WEST"];
      var rnd = function(){ return ~~(Math.random()*2)};
      var u = res.slice(0)
      
      for( var x=0, z=2+rnd(); x<z; x++ ){
        var a = rnd(), b = rnd();
        if( x%2 ){
          u.push(aa[a]);u.push(aa[(a+1)%2]);
          u.unshift(bb[b]);u.unshift(bb[(b+1)%2]);
        }else{
          u.push(bb[b]);u.push(bb[(b+1)%2]);
          u.unshift(aa[a]);u.unshift(aa[(a+1)%2]);
        }
      }
      
      console.log(Test.inspect(u));
      Test.assertSimilar(dirReduc(u),res);
    });
    
})