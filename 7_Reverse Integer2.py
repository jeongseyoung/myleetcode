def reverse(x: int) -> int:
    output = ""
    if x < 0: 
        output = int(str(x)[1:][::-1]) * -1
    else: 
        output = int(str(x)[::-1])
               
    if output <= -2**31 or output >= 2**31 - 1: return 0
    #print(output)       
    return output   
                 
if __name__ == "__main__":
    #x = -123      
    x = 10
    #x = 1534236469      
    #x = 8192 # 2918
    print(reverse(x))
    #a = "abc"
    #print(a[::-1])    

    







