# Definition for singly-linked list.
class ListNode:    
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:    
    def addTwoNumbers(self, l1:ListNode, l2: ListNode) -> ListNode:
        """    
        :type l1: ListNode
        :type l2: ListNode  
        :rtype: ListNode
        """
        sum = self.make_num(self.make_reverselinkedlist(self.make_list2(l1))) + self.make_num(self.make_reverselinkedlist(self.make_list2(l2)))
        result = self.make_reverselinkedlist(self.make_list(sum))

        return result       

    def make_reverselinkedlist(self,sum_list):
        p = None
        for x in sum_list:
            node = ListNode(x)
            node.next = p
            p = node 
        return node       
        
    def make_num(self,linkedlist):
        getdata = linkedlist
        num = ""
        while getdata:
            num += f'{getdata.val}'
            getdata = getdata.next
        return int(num)

    def make_list(self,sum):
        mylist = list(map(int,str(sum)))
        return mylist
    
    def make_list2(self,linkedlist):
        mylist:list = []
        getdata = linkedlist
        #print("getdata.val",getdata.next.val)
        while getdata:
            mylist.append(getdata.val)
            getdata = getdata.next
        return mylist
