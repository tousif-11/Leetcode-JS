/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};
var isPalindrome = function(x) {
  let str = String(x);
  let reverse = "";
  for(let i =str.length - 1; i>=0; i--){
    reverse += str[i];
  }if (reverse === str){
    return true
  }else {
    return false
  };
  
};