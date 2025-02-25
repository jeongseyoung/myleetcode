/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/*Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/
/*                    
앞에서 했던 3Sum과 비슷한 문제.
4포인터를 잡고, 순회하면서 더해준다.
target과 같은 수가 나오면 배열에 저장.
-> 중복을 방지하기위해 딕셔너리에 키값으로 저장 후에 배열로 반환한다.
*/   
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  //let result = [];
  let dic_res = {};
  let n1 = 0;
  while (n1 <= nums.length) {
    //let n2 = n1 + 1;
    for (let n2 = n1 + 1; n2 <= nums.length - 1; n2++) {
      let n3 = n2 + 1;
      let n4 = nums.length - 1;
      //console.log(n2);
      while (n3 < n4) {
        let sum = nums[n1] + nums[n2] + nums[n3] + nums[n4];
        if (sum < target) n3++;
        else if (sum > target) n4--;
        //console.log(sum, target, n3, n4);
        if (sum == target) {
          //result.push([nums[n1], nums[n2], nums[n3], nums[n4]]);
          dic_res[[nums[n1], nums[n2], nums[n3], nums[n4]].join(",")] = true;
          n3++;
          n4--;
        }
      }
    }
    n1++;
    // }
    // const result = Object.keys(dic_res).map((a) =>
    //   a.split(",").map((c) => Number(c))
    // ); // Number로 변환 후 리턴
    // console.log(result);
    return Object.keys(dic_res).map((a) => a.split(",").map((c) => Number(c)));
  }
};
const myNums = [1, 0, -1, 0, -2, 2];
const target = 0;
//const myNums = [2, 2, 2, 2, 2]; target = 0
// const myNums = [
//   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//   10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
//   20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
//   30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
//   40, 40, 40, 40, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
//   50, 50, 50, 50, 50, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
//   60, 60, 60, 60, 60, 60, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70,
//   70, 70, 70, 70, 70, 70, 70, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
//   80, 80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
//   90, 90, 90, 90, 90, 90, 90, 90, 90
// ];
const myTarget = 0;
fourSum(myNums, myTarget);
// let a = [
//   [1, 2],
//   [1, 2],
//   [1, 2]
// ];
