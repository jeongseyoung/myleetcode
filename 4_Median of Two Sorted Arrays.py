import math as m
"""
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

           
         
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
"""
# 중간값(median)찾기
# 내림floor 올림ceil 반올림round
def themedian(nums1,nums2) -> float:
    nums1.extend(nums2)
    nums1.sort() 
    if len(nums1) % 2 == 0:
        #median = (len(nums1)) / 2
        #return (nums1[m.floor(median)]+nums1[round(median)]) / 2
        return (nums1[int((len(nums1)) / 2)] + nums1[int(((len(nums1)) / 2)-1)]) / 2 
    else:
        #num = i_sum / 2
        #print(arr1)
        #median = len(nums1) / 2
        #print("else:","median",median)
        return nums1[m.floor(len(nums1) / 2)]
            

 


if __name__ == "__main__":
    #nums1, nums2 = [1,3], [2] #Expected 2.0
    #nums1, nums2 = [1,2], [3,4] #Expected 2.5
    nums1, nums2 = [], [2,3] #Expected 2.5
    print(themedian(nums1,nums2))
    



