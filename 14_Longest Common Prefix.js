/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "" 
         
Example 1:  
Input: strs = ["flower","flow","flight"]
Output: "fl"        
                                              
Example 2:    
Input: strs = ["dog","racecar","car"]
Output: ""   
Explanation: There is no common prefix among the input strings
*/             
                  
/*
배열 첫번째 문자를 앞에서부터 잘라가며(substring) 배열 내에 있는 문자들과 비교한다. 
2중 for문을 사용하면 시간복잡도를 줄일 수 있다 -> substring할 for문, 문자들을 비교할 for문
일치하는 문자가 없다면 빈문자("") 반환. 
*/
           
/**
 * @param {string[]} strs
 * @return {string}
 */   
var longestCommonPrefix = function (strs) {
  let result = "";
  if (strs.legnth <= 1) {
    return result;
  } else if (strs.length == 1 && strs[0].length == 1) {
    return strs[0];
  }
  outside: for (let i = 0; i <= strs[0].length; i++) {
    let temp_str = strs[0].substring(0, i);
    for (c of strs) {
      if (temp_str == c.substring(0, temp_str.length)) {
        result = temp_str.substring(0, i);
      } else {
        result = temp_str.substring(0, i - 1);
        break outside;
      }
    }
  }
  console.log("r", result, result.length);
  return result;
};
strs = ["flower", "flow", "flight"]; //"fl"
//strs = ["dog", "racecar", "car"];
//strs = [""];
//strs = ["a"];
//strs = ["flower", "flower", "flower", "flower"];
//strs = ["c", "acc", "ccc"]; //""
console.log("rrrrr", longestCommonPrefix(strs));











