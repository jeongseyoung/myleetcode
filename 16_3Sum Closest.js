/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */          
                     
//숫자 3개를 더해서 target에 가장 가깝게 만들기
//마찬가지로 포인터 3개를 잡고 더하면서 비교한다.
//     
var threeSumClosest = function (nums, target) {
  console.log("target", target);
  let r = null;   
  //let min_num = 0;
  //let temp_result = 0;
  let result = 0;
  let s = 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i <= nums.length; i++) {
    let n2 = i + 1;
    let n3 = nums.length - 1;
    while (n2 < n3) {
      let sum = nums[i] + nums[n2] + nums[n3];
      //console.log(i, n2, n3);
      //console.log("sum", sum, "target", target);

      if (sum == target) return target;

      if (sum < target) n2++;
      else if (sum > target) n3--;
      if (r == null) r = sum;

      console.log("a", Math.abs(sum - target), "b", Math.abs(r - target));
      console.log("sum", sum, "r", r, "s", s, sum > s);
      if (
        Math.abs(sum - target) < Math.abs(r - target) &&
        Math.abs(s) < Math.abs(sum)
      ) {
        //s = Math.max(Math.abs(s), Math.abs(sum));
        s = sum;
        //n3--;
      } else if (
        Math.abs(sum - target) > Math.abs(r - target) &&
        Math.abs(s) < Math.abs(r)
      ) {
        //s = Math.max(Math.abs(s), Math.abs(r));
        s = r;
        //++;
      }
      //console.log("sss", s);
      //result = Math.max(result, s);
      //console.log("temp result", result);

      //result = Math.abs(sum - target) < Math.abs(r - target) ? sum : r;
      console.log("sdfsdf", s);
    }
  }
  return s;
};
//const mynums = [0, 1, 2]; //target = 0 output = 3
// const mynums = [
//   833, 736, 953, -584, -448, 207, 128, -445, 126, 248, 871, 860, 333, -899, 463,
//   488, -50, -331, 903, 575, 265, 162, -733, 648, 678, 549, 579, -172, -897, 562,
//   -503, -508, 858, 259, -347, -162, -505, -694, 300, -40, -147, 383, -221, -28,
//   -699, 36, -229, 960, 317, -585, 879, 406, 2, 409, -393, -934, 67, 71, -312,
//   787, 161, 514, 865, 60, 555, 843, -725, -966, -352, 862, 821, 803, -835, -635,
//   476, -704, -78, 393, 212, 767, -833, 543, 923, -993, 274, -839, 389, 447, 741,
//   999, -87, 599, -349, -515, -553, -14, -421, -294, -204, -713, 497, 168, 337,
//   -345, -948, 145, 625, 901, 34, -306, -546, -536, 332, -467, -729, 229, -170,
//   -915, 407, 450, 159, -385, 163, -420, 58, 869, 308, -494, 367, -33, 205, -823,
//   -869, 478, -238, -375, 352, 113, -741, -970, -990, 802, -173, -977, 464, -801,
//   -408, -77, 694, -58, -796, -599, -918, 643, -651, -555, 864, -274, 534, 211,
//   -910, 815, -102, 24, -461, -146,
// ]; //target = -7111 output = -2960
//const mynums = [0, 1, 2]; //target = 0 output 3
const mynums = [-1, 2, 1, -4]; //target 1 output 2
//const mynums = [0, 0, 0]; //target 1 output 0
//const mynums = [0, 1, 2];
console.log("s", threeSumClosest(mynums, 0));





