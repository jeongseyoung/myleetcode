/**
 * @param {string} digits
 * @return {string[]}
 */
/*
Example 1:
Input: digits = "23" //string
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/  
/*  
digits 이라는 숫자 문자열을 입력받음. 각 숫자 키패드에 해당하는 알파벳 문자열로 만들 수 있는 모든 문자열의 리스트를 출력하는 문제.
*/    
var letterCombinations = function (digits) {
  const dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  //console.log(dic[2].split(""));
  let i = 0;
  let result = [""];
  while (i < digits.length) {
    //console.log("digits[i]", digits[i]);
    let a = dic[digits[i]];
    //console.log("1", a);
    let temp_res = [];
    for (let x = 0; x < result.length; x++) {
      for (let y = 0; y < a.length; y++) {
        //console.log("2", a[y]);
        //console.log(result[x], a[y]);
        console.log(result[x]);
        temp_res.push(result[x] + a[y]);
      }
    }
    result = temp_res;
    i++;
  }
  console.log(result);
  return result;
};

//let digits = 23; //Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
//let digits = 2; //Output: ["a","b","c"]
let digits = "234"; //Output: ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"];
const res = letterCombinations(digits);

//let t_a2 = Array.from(str);
//console.log(t_a2);
