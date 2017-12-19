function persistence(num) {
   //code me
var sum = 0;
var per = 0;
var val1 = num.toString(10).split("");
    
while( val1.length > 1 ) {
        sum = 1;
        val1.forEach( function(number) {
            sum = sum * number;
        });
        val1 = sum.toString(10).split("");
        per++;
    } ;
    
    return per;
}