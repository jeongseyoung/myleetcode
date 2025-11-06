"""
Runtime
0ms
Beats 100.00%       
ㅋ;   
nums안에서 조작해야됨.(modify nums *in-place* instead.)
***queue 이용. 이게 핵심
"""   
class Solution(object):        
    def __init__(self):  
        self.name = "removeElement"   
    def removeElement(self, nums: list[int], val: int) -> int:    
        """     
        :type nums: List[int]
        :type val: int     
        :rtype: int
        """  
        print(f"{nums} {val}")
        #nums = [n for n in nums if val != n]
        #return len(nums)
        #print(nums)
        for _ in range(len(nums)):
            if nums[0] != val:
                nums.append(nums[0])
                nums.remove(nums[0]) 
            else: nums.remove(nums[0]) 
        print(nums)
        return len(nums)

if __name__ == "__main__":
    print(f"**27. Remove Element**")
    nums, val =  [0,1,2,2,3,0,4,2], 2
    sol = Solution()
    sol.removeElement(nums, val)



