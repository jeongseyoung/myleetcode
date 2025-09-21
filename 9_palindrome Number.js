//const { max, keys } = require("lodash");

//const { result } = require("lodash");
     
/**   
 * @param {number} x
 * @return {boolean}      
 */              
//-231 <= x <= 231 - 1   
var isPalindrome = function (x) {      
  temp_str = String(x);
  //const max_num = 2 ** 31 - 1;
  //const min_num = -(2 ** 31);
  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    return false;
  }
  //temp_str_reverse = temp_str.split("").reverse().join("");
  return temp_str == temp_str.split("").reverse().join("") ? true : false;
};
           
let isPalindrome2 = function (x) {
  if (x > 2 ** 31 - 1 || x < -(2 ** 31) || String(x)[0] == "-") {
    //if (x < 0) {
    return false;
  }
  let temp_str = "";
  let temp_num = x;
  //for (i = 0; i <= String(x).length - 1; i++) {
  while (temp_num != 0) {
    temp_str += String(temp_num % 10);
    temp_num = Math.floor(temp_num / 10);
    console.log(temp_str, temp_num);
  }
  //console.log(x, Number(temp_str), 9999 / 10);
  return x == Number(temp_str) ? true : false;
};
let abc = isPalindrome2(9999);
console.log(abc);

x = 121;
//x = 1551;
isPalindrome(x);





