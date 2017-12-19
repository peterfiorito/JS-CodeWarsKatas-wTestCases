Test.describe( "Fixed tests", _=>{
  Test.assertEquals(addExtra([1,2,3]).length, 4)
  Test.assertEquals(addExtra([1,2]).length, 3)
  Test.assertEquals(addExtra([]).length, 1)
  Test.assertEquals(Array.isArray(addExtra([1,2,3])),true, "Description: ...You should return a list..." )
  Test.assertEquals(addExtra([1,2,3]).length === addExtra([1,2,3]).reduce(acc=>acc+1,0),true, "Description: ...You are not allowed to modify length..." )
});

Test.describe( "Check more than length", _=>{
  let rnd = (a,b) => b ? a+rnd(b-a) : a ? ~~(rnd()*a) : Math.random();
  
  for( let i = 0; i< 5; i++ ){
    let data = [...Array(rnd(42))].map(_=>rnd(42)), exp = data.slice(0);
  
    Test.it( "Should keep same values in array", _=>{ Test.assertSimilar( addExtra(data).slice(0,-1), exp ) } )
    
    // Desc.says: 'You have to create a new list'
    Test.it( "Should return a 'new' list", _=>{ Test.assertNotEquals( addExtra(data), data ) } )
    
    // Donald.says: 'I've implemented the function such that it adds itself (not a number!) to the new list but it still passes all the tests...'
//    Test.it( "Should add a number to the list", _=>{ Test.assertEquals( typeof addExtra(data).slice(-1)[0], "number" ) } )
  }
  
});

Test.describe( "Random tests", _=>{
  let rnd = (a,b) => b ? a+rnd(b-a) : a ? ~~(rnd()*a) : Math.random();
  
  for( let i=0; i<99; i++ ){
    let data = [...Array(rnd(42))].map(_=>rnd(42)), exp = data.length+1;
    Test.assertEquals( addExtra(data).length, exp )
  }
  
});