class Solution(object):
        
    def nextPermutation(self, nums):        
        temp = [n for n in nums]
        temp.sort(reverse=True)
        tempbool = False           
        for i in range(0, len(temp)):
            print(temp[i], nums[i])
            if temp[i] != nums[i]:
                tempbool = True
                break     
        print(f"tempbool {tempbool}")
        if tempbool: nums = self.rotate(nums)
        else: nums.sort(reverse=False)
        print(nums)
                   
    def rotate(self, nums):
        i = len(nums)
        j = 0
        z = 0
        while True:
            while True:
                #print(f"i: {i} j: {j} nums: {nums}")
                i = i - 1
                if i == j or z == 1: break            
                elif nums[i-1] < nums[i]:
                    z = z + 1 
                    nums[i-1], nums[i] = nums[i], nums[i-1]
                else: break
            j = j + 1
            i = len(nums)
            if j == i: break
        print(f"rotate nums {nums}")
        return nums
        


if __name__ == "__main__":
    nums = [1,2,3]
    sol = Solution()
    sol.nextPermutation(nums)


