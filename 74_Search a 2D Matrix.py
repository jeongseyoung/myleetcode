class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        print(f"{matrix}, {target}")
        result = False
        for i in matrix:
            for j in i:
                print(j)
                if j == target: result = True
                else: pass
            if result: break
        return result
        

     

    

if __name__ == "__main__":
    matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    target = 3
    sol = Solution()
    print(sol.searchMatrix(matrix, target))
    
