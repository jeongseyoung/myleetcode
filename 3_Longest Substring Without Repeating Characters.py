"""
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
         
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring
"""
def substg(s):
    #print(s.find("w"))
    mylist:list = [x for x in s]
    mydic:dict = {}
    start = 0
    max_len = 0
    for index,value in enumerate(mylist):
        if value in mydic:
                start = max(start, mydic.get(value) + 1)
                print(mydic, value, "start:", mydic.get(value), "+ 1 = ", start)    
                start = index 
            #print("start",start)    
        mydic[value] = index        
        print(index,start,index-start+1)
        max_len = max(max_len, index - start + 1) # index - start + 1 -> 길이구하기~
        print("max_len",max_len)
    #print(mydic)
    return max_len    
        
if __name__ == "__main__":
    mystr1 = "dvdf"
    mystr2 = "pwwkew"
    mystr3 = "anviaj"
    mystr4 = "ckilbkd"
    mystr5 = "abba"
    print(substg(mystr5))
