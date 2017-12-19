Test.describe("Tests",function(){
  var rnd = function(){ return 1+~~(Math.random()*999) };
  var p/*lus*/ = rnd()
  Test.assertEquals(solution(p+4.1), p+4)
  p=rnd(); Test.assertEquals(solution(p+4.2),  p+4)
  p=rnd(); Test.assertEquals(solution(p+4.3),  p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.5),  p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.55), p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.74), p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.74999999999), p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.7499999999+.00000000001), p+4.5)
  p=rnd(); Test.assertEquals(solution(p+4.7499999999+.0000000001), p+5)
  p=rnd(); Test.assertEquals(solution(p+4.75), p+5)
  
})