var assert = require("chai").assert;
var luhn = require("../lib/luhn");

describe("Luhn", function() {

  it("should return true if number has valid check digit", function(){
    assert.isTrue(luhn(79927398713));
  });

  it("should return false if number does not has valid check digit", function(){
    assert.isFalse(luhn(79927398714));
  });

  // it("should return true if a word is a palindrome", function() {
  //   var word = "abba";
  //   var result = isPalindrome(word);
  //   assert.isTrue(result);
  // });
  //
  // it("should return false if a word is NOT a palindrome", function() {
  //   var word = "not";
  //   assert.isFalse(isPalindrome(word));
  // });
  //
  // it("should return true if a phrase is a palindrome", function() {
  //   var phrase = "a man a plan a canal panama";
  //   assert.isTrue(isPalindrome(phrase));
  // });
  //
  // it("should return false if a phrase is NOT a palindrome", function() {
  //   var phrase = "this is not a palindrome"
  //   assert.isFalse(isPalindrome(phrase));
  // });
});
