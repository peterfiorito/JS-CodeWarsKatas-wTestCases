Test.describe("Basic tests", function() {
Test.assertSimilar(yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [ 1, 3, 5, 7, 9, 2, 6, 10, 8, 4 ]);
Test.assertSimilar(yesNo(['this', 'code', 'is', 'right', 'the']), [ 'this', 'is', 'the', 'right', 'code' ]);
});

Test.describe("Random tests", function(){

function yesNoZ(array) {
    var newInstance = array.slice();
    function recursive(array, counter, newArr) {
      counter = counter || 0;
      newArr = newArr || [];
      for (var i = 0; i < array.length; i++) {
          if (counter % 2 === 0) {
              newArr.push(array.splice(i, 1));
              i = i - 1;
          }
          counter += 1;
      }
      if(array.length <= 1) return newArr.reduce((a, b) => a.concat(b), []).concat(array);
      else return recursive(array, counter, newArr); 
    }
    return recursive(newInstance); 
}

for (var j=0; j<30; j++)
{
  var array = [];
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var length = Math.ceil(Math.random() * 10)
    for(var k=0; k<=length; k++) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }
    Test.assertSimilar (yesNo(array), yesNoZ(array));
}


});