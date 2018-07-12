using System;
using System.Collections.Generic;

namespace cSharp{
    public class SLLNode{
        public SLLNode next;
        public int val;
        public SLLNode(int val){
            this.val = val;
        }
    }
    public class SLL{
        public SLLNode head = null;
        public SLL(){}

        public void ATF(int val){
            SLLNode newNode = new SLLNode(val);
            SLLNode temp = newNode;
            temp.next = this.head;
            this.head = temp;
        }
        public void ATB(int val){
            SLLNode newNode = new SLLNode(val);
            if(this.head == null){
                this.head = newNode;
            }
            else{
                SLLNode runner = this.head;
                while(runner.next != null){
                    runner = runner.next;
                }
                runner.next = newNode;
            }
        }
    }
}