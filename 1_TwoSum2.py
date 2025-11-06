"""
정수 배열이 주어지면 특정 목표에 합산되는 두 숫자의 인덱스를 구하는 문제.
 
for문을 한번만 돌리는 게 핵심.
   1. 배열을 딕셔너리로 따로 만듦.
   2. 배열을 꼭 value값에 넣어야하는 건 아님
"""       
                                                       
                                  
def hash_test(nums,target):
    dic:dict = {}
    result:list = []
    #slam = False
    for i in range(len(nums)):
        dic[nums[i]] = i        
    #print(dic)
    for i in range(len(nums)):
        c = target - nums[i]
        if c in dic and i != dic[c]:
            #print(i,dic[c])
            result.extend([i,dic[c]])
            break
    print(result)
    return result 
if __name__ == "__main__":
    nums = [2,7,11,15]
    target = 9
    hash_test(nums,target)





