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
  let in_arr = [];
  let arr = [];
  for (x of nums) {
    let i = nums.indexOf(x);
    console.log(i);
    while (i < nums.length) {
      //console.log(i);
      let sum = x + nums[i + 1] + nums[i + 2];
      console.log("x", x);
      if (sum == 0) {
        in_arr.push(x, nums[i + 1], nums[i + 2]);
        arr.push(in_arr);
        in_arr = [];
      }
      i++;
    }
  }
  return arr;
};
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
result.forEach((f) => {
  f.sort();
  console.log(f);
});
// let a = [];
// let b = [];
// a.push(1, 2, 3);
// b.push(a);
// console.log(a, b);
// b.forEach((i) => console.log("i", i));
let a = [1, 2, 3];
let bb = [
  [1, 2, 3],
  [4, 5, 6],
  [1, 2, 3],
];
//let ccc = new set(bb);
