
#Input: nums = [1,1,2]
#Output: 2, nums = [1,2,_]

#Input: nums = [0,0,1,1,1,2,2,3,3,4]
#Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        print(f"{self}, {nums}")
            
        if not nums: return 0
        
        result = [nums[0]]
        for i in nums:
            if i == result[len(result)-1]: pass
            else: result.append(i)
            
        length = len(result)
        result.extend(['_'] * (len(nums) - len(result)))
        #print(f"result: {result} length: {length}")
        
        return length, result
    
        
if __name__ == "__main__":
    nums = [1,1,2] 
    solution = Solution()
    print(solution.removeDuplicates(nums))
