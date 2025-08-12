/**
 * @param {string} s
 * @return {boolean}
 */
// "[{}]"   
//   ^                   
var isValid = function (s) {
  const temp_dic = {        
    "(": ")",
    "[": "]",  
    "{": "}"   
  };     
  let arr = [];
  if (s.length <= 1) return false;
  for (let i in s) {     
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") arr.push(s[i]);
    else if (temp_dic[arr[arr.length - 1]] === s[i]) arr.pop();
    else return false;
  }
  return arr.length === 0;
};
//const s = "]"; //output : false
//const s = "()[]{}"; //Output : true
//const s = "[{}]"; // output : true
//const s = "([)]"; // output : false
const s = "(]"; //Output: false
let bbb = isValid(s);
console.log("result", bbb);



