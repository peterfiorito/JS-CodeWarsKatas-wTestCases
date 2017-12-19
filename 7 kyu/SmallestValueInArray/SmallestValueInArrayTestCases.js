Test.assertEquals(min([1,2,3,4,5], 'value'), 1);
Test.assertEquals(min([1,2,3,4,5], 'index'), 0);
Test.assertEquals(min([500,250,750,5000,1000,230], 'value'), 230);
Test.assertEquals(min([500,250,750,5000,1000,230], 'index'), 5);
Test.assertEquals(min([750,50000,10,50], 'value'), 10);
Test.assertEquals(min([750,50000,10,50], 'index'), 2);

// Random values
var values = new Array(50);
var minVal = -(Math.random() * 999 | 0) - 1;
var minIdx = Math.random() * 50 | 0;

for (var i = 0; i < 50; i++) {
  do {
    values[i] = 1 + Math.random() * 999 | 0;
  } while (values.indexOf(values[i]) != i)
}

values[minIdx] = minVal;

Test.assertEquals(min(values, 'value'), minVal);
Test.assertEquals(min(values, 'index'), minIdx);