"""
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
        
The algorithm for myAtoi(string s) is as follows:
    
Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result
"""
"""
Example 1:
Input: s = "42"
       
Output: 42    
      
Explanation:     

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
    
Example 2:
Input: s = " -042"

Output: -42

Explanation:

Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
"""

def myAtoi(s: str) -> int:
    if s == "" or s == "-" or s == "+": return 0
    negative, temp_int = False, ""
    int_max, int_min = 2 ** 31 - 1, -(2 ** 31)        
    
    #temp_str = s.replace(" ","") # 모든공백 제거
    """
    strip() 양쪽
    lstrip() 왼쪽 공백 제거
    rstrip() 오른쪽
    """
    temp_str = s.lstrip() # 왼쪽 공백 제거

    if len(temp_str) == 0: return 0
        
    if temp_str[0] == "-":
        negative = True
        temp_str = temp_str[1:]
    elif temp_str[0] == "+": temp_str = temp_str[1:]
    elif temp_str[0:2] == "+-": return 0
    
    #print(temp_str[0])            
    for i in range(len(temp_str)):
        if not temp_str[0].isdigit(): return 0 # isdigit s[0]이 숫자인지
        temp_int += temp_str[i]
        if not temp_str[i].isdigit(): 
            temp_int = int(temp_int[0:i])
            break
                
    if negative: temp_int = int(temp_int) * -1
        
    return min(int_max,int(temp_int)) if int(temp_int) > 0 else max(int_min,int(temp_int)) 

if __name__=="__main__":
    #s = "42" # 42
    #s = " -042" # -42
    #s = " -042a" 
    #s = "1337c0d3" # 1337 
    #s = "  -1337c0d3"
    #s = "0-1" # 0
    #s = "-91283472332" # -2147483648
    #s = "words and 987" # 0
    #s = "+-12" # 0
    #s = "+1" # 1
    s = "   +0 123" # 0
    #s = "   -042" # -42
    print(myAtoi(s))
    arr = [
        "a","aa","aaa","aaaaaa","bxcsdfsfsdf","sdklsdj"
    ]
    temp = max(arr, key=len)
    print(temp)
    #print(len(""))
    # a = 1
    # print(type(a))
    # if type(a) is int:
    #     print("dz")
    # a = "-"
    # if not a.isdigit():
        # print("nnnnnn")
    


