function luhn(number){
//   Alternative method) The check digit (x) is obtained by computing the sum of the other digits (third row) then subtracting the units digit from 10 (67 => Units digit 7; 10 − 7 = check digit 3). In algorithm form:
//
// Compute the sum of the non-check digits (67).
// Take the units digit (7).
// Subtract the units digit from 10.
// The result (3) is the check digit. In case the sum of digits ends in 0 then 0 is the check digit.
  number = number.toString().split("").reverse();

  number = number.map(function(str){
    return Number(str);
  });

  var checkDigit = number.shift();

  for(var i = 0; i < number.length; i += 2){
    number[i] *= 2;
    if(number[i] > 9){
      number[i] -= 9;
    }
  }

  var digitSum = number.reduce(function(sum, current){
    return sum + current;
  });

  var calculatedCheckDigit = digitSum === 10 ? 0 : 10 - (67 % 10);

  return !(checkDigit - calculatedCheckDigit);
}

module.exports = luhn;
