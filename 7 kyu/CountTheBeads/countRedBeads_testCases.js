describe("Testing", function(){
  it("Basic tests", function(){
    Test.assertEquals(countRedBeads(0), 0);
    Test.assertEquals(countRedBeads(1), 0);
    Test.assertEquals(countRedBeads(3), 4);
    Test.assertEquals(countRedBeads(5), 8);
  });
});