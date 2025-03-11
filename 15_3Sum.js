/*
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
      
Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
  
Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //console.log(nums);
  //main
  let in_arr = [];
  let arr = [];
  let i = 0;
  while (i <= nums.length) {
    let n_index = i + 1;
    while (n_index <= nums.length) {
      let nn_index = n_index + 1;
      //console.log("??", i, n_index, nn_index);
      while (nn_index <= nums.length) {
        let sum = nums[i] + nums[n_index] + nums[nn_index];
        //console.log(x, nums[i + 1], nums[i + 2], "=", sum);
        //console.log("x", x);
        if (sum == 0) {
          in_arr.push(nums[i], nums[n_index], nums[nn_index]);
          arr.push(in_arr.sort((a, b) => a - b));
          in_arr = [];
        }

        //console.log(nums[i], nums[n_index], nums[nn_index]);
        nn_index++;
      }
      n_index++;
    }
    i++;
  }
  //console.log("arr", arr);
  //중복제거
  let temp_dic = {};
  let result = arr.filter((f) => {
    let temp = f.join("");
    //temp_dic[temp]가 존재하지 temp_dic에 없으면(false라면)
    if (!temp_dic[temp]) {
      temp_dic[temp] = true; //temp_dic에 저장.
      return true; // f를 result에 저장, false면 그냥 넘기고 다음 f실행
    }
    return false;
  });
  result.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  return result;
};
//const nums = [-1, 0, 1, 2, -1, -4];
//const nums = [-1, 0, 1, 0];
//const nums = [-2, 0, 1, 1, 2];
const nums = [1, 12, -1, 2, 7, 9, 13, 22, 2, -12, -19, -2, -1];
// const nums = [
//   -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14,
//   13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
//   -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
//   -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4,
//   2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10,
//   -4, -15, -9, -1, -1, 3, 4, 1, 8, 1,
// ];
const result = threeSum(nums);

console.log(result);

// let a = [1, 2, 3];
// let bb = [
//   [-1, 0, 1],
//   [-1, 0, 1],
// ];
// let cc = {};
// let r = bb.filter((f) => {
//   let temp = f.join("");
//   if (!cc[temp]) {
//     cc[temp] = true;
//     return f.sort();
//   }
//   return false;
// });
//let dd = { aa: "a" };
//console.log(r);

// for (i in nums) {
//   let n_index = Number(i) + 1;
//   let nn_index = n_index + 1;
//   console.log("??", n_index);

//   while (nn_index <= nums.length) {
//     let sum = nums[i] + nums[n_index] + nums[nn_index];
//     console.log("temp", nums[i], nums[n_index], nums[nn_index]);
//     if (sum == 0) {
//       console.log("0");
//     }
//     nn_index++;
//   }
// }
