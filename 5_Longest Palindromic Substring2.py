"""
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
"""
# palindrome 회문
def slam(s: str) -> str:
    output1 = a(s) # 짝수인 회문
    output2 = b(s) # 홀수인 회문
    if len(output1) > len(output2):
        return output1
    else:
        return output2
# 회문이 짝수
def a(s):
    max_start, max_end = 0, 0    
    for i in range(len(s)):
        start, end = i, i+1
        #print("a:",s[start], s[end])
        #while s[start:end+1] == "".join(reversed(s[start:end+1])) and start >= 0 and end <= len(s): # ->  이거로하면 time limit발생
        
        # 1. end <= len(s)하면 s[end]에 index out of range 에러발생 
        # 2. s[start] == s[end] 를 while문 앞에 쓰면 end < len(s) 조건을 수행도 못하고 index out of range에러 발생
        while start >= 0 and end < len(s) and s[start] == s[end]:  
            if max_end - max_start < end - start: # 이게중요
                max_start, max_end = start, end                
            #print("s",start,"e",end,s[start:end+1],"".join(reversed(s[start:end+1])))
            start, end = start-1, end+1 # 좌우로 한칸씩 이동
    return s[max_start:max_end+1]
    
# 회문이 홀수    
def b(s):
    max_start, max_end = 0, 0    
    for i in range(len(s)):
        start, end = i, i
        #print("b:",s[start], s[end])
        #while s[start:end+1] == "".join(reversed(s[start:end+1])) and start >= 0 and end <= len(s):
        while start >= 0 and end < len(s) and s[start] == s[end]:
            if max_end - max_start < end - start: # 이게중요
                max_start, max_end = start, end                
            #print("s",start,"e",end,s[start:end+1],"".join(reversed(s[start:end+1])))
            start, end = start-1, end+1 # 좌우로 한칸씩 이동
    return s[max_start:max_end+1]

    
            
                    
"""
    c b b d
    ^
    
"""

if __name__ == "__main__":
    #s = "babad"
    #s = "cbbd"
    #s = "a"
    #s = "ac"
    #s = "bb"
    #s = "abcda"
    #s = "klvxwqyzugrdoaccdafdfrvxiowkcuedfhoixzipxrkzbvpusslsgfjocvidnpsnkqdfnnzzawzsslwnvvjyoignsfbxkgrokzyusxikxumrxlzzrnbtrixxfioormoyyejashrowjqqzifacecvoruwkuessttlexvdptuvodoavsjaepvrfvbdhumtuvxufzzyowiswokioyjtzzmevttheeyjqcldllxvjraeyflthntsmipaoyjixygbtbvbnnrmlwwkeikhnnmlfspjgmcxwbjyhomfjdcnogqjviggklplpznfwjydkxzjkoskvqvnxfzdrsmooyciwulvtlmvnjbbmffureoilszlonibbcwfsjzguxqrjwypwrskhrttvnqoqisdfuifqnabzbvyzgbxfvmcomneykfmycevnrcsyqclamfxskmsxreptpxqxqidvjbuduktnwwoztvkuebfdigmjqfuolqzvjincchlmbrxpqgguwuyhrdtwqkdlqidlxzqktgzktihvlwsbysjeykiwokyqaskjjngovbagspyspeghutyoeahhgynzsyaszlirmlekpboywqdliumihwnsnwjc"
    #s = "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    s = "1551"
    print("output:",slam(s))
    #print(len(s))