Test.describe("Basic tests", function() {
  var res = weirdHexToDec('1');
  Test.it("Should return 1", function() {
    Test.assertEquals(res, 1, 'Values must be equal');
  });
  var res2 = weirdHexToDec('10');
  Test.it("Should return 16", function() {
    Test.assertEquals(res2, 16, 'Values must be equal');
  });
  var res3 = weirdHexToDec('ABCDEF');
  Test.it("Should return 11259375", function() {
    Test.assertEquals(res3, 11259375, 'Values must be equal');
  });
});

const chars = 'ABCDEF0123456789'
const rndInput = () => Array.from({length:f((r()*50)+1)}, _=>chars[r()*chars.length^0]).join('')


Test.describe('Random tests', function() {
  for(let i=0; i<50; i++) {
    let n = rndInput();
    console.log(`Testing for: ${n}`);
    let expected = parseInt(n,16);
    let actual = weirdHexToDec(n);
    if(expected!==actual) failed = true;
    Test.assertEquals(actual, expected);
  }
})

if(!failed) {
Test.describe("Congratulations!", function(){
    console.log("Thanks to your braaains your home is now safe!")
});
}
