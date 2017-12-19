function solution(number){
  // convert the number to a roman numeral
var roman = {
    map: [
        1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC',
        50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I',
    ]};
var value = '';
for (var idx = 0; number > 0 && idx < roman.map.length; idx += 2) {
  while (number >= roman.map[idx]) {
          value += roman.map[idx + 1];
          number -= roman.map[idx];
            }
}
return value;
}