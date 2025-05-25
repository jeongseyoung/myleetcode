"""
cnt = 0
        for _ in range(len(nums)):
            if nums[0] == 0:
                cnt += 1 
                del nums[0]
            else: 
                nums.append(nums[0])
                del nums[0]
        for n in range(cnt):
            nums.append(0)
"""      
"""                
0,1,0,3,12
1 0 0 3 12    
1 0 3 0 12  
1 0 3 12 0
1 3 0 12 0
1 3 12 0 0
"""     
class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        print(f"** moveZeros **")
        #print(f"nums: {nums}")
        #cnt = 0
        
        temp = 0 
        for n in range(len(nums)):
            print(temp, n) 
            if nums[n] != 0:
                nums[temp], nums[n] = nums[n], nums[temp]
                temp += 1
        
        print(f"result: {nums}")

if __name__ == "__main__":
    nums = [0,1,0,3,12,1,123,43,678,34,0,0,0,234,0,4512,5,76,2,45,23,0,0]
    sol = Solution()
    sol.moveZeroes(nums)
