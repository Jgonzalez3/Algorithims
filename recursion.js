function rSigma(num, sum = 0){
    if(num == 1){
        return sum+1
    }
    sum += num;
    return rSigma(num-1, sum)
}

console.log(rSigma(3))

function rFact(num, sum = 1){
    if(num == 1){
        return sum;
    }
    sum *= num;
    return rFact(num-1, sum);
}
console.log(rFact(4))

function rFib(num){
    if(num <= 2 ){
        return 1
    }
    return rFib(num-1) + rFib(num-2);
}
//Big 0: 2^n
console.log("RFib", rFib(5))


//Flood Fill all values adjacent to values to starting location, that share starting location value. recursive function: canvas = matrix of arrays, (x,y)= location in matrix canvas[x][y], value at location in matrix will change to color value and also all adjacent values similar to original location (x,y).
function rFloodFill(canvas,x,y,color,temp=canvas[x][y]){
    canvas[x][y] = color;
    console.log("CANVAS",canvas);
    //canvas[x-1] undefined check needed due to bug for first level of matrix [x]
    if(canvas[x-1] !==undefined && canvas[x-1][y] == temp){
        rFloodFill(canvas,x-1,y,color,temp)
    }
    if(canvas[x+1] !==undefined && canvas[x+1][y] == temp){
        rFloodFill(canvas,x+1,y,color,temp)
    }
    if(canvas[x][y-1] == temp){
        rFloodFill(canvas,x,y-1,color,temp)
    }
    if(canvas[x][y+1] == temp){
        rFloodFill(canvas,x,y+1,color,temp)
    }
    return canvas
}
console.log(rFloodFill(canvas=[
    [1,3,3,4],
    [2,5,2,2],
    [3,2,2,4],
    [4,2,5,4]
],x=1,y=2,color=4,temp=canvas[x][y]))

// Rising Square Recursive function. C.Log odds up to Num, then C.Log Evens on way down from Num.
function rRisingSq(num, sub = 1){
    if(sub === 2 ){
        console.log(sub * sub);
        return;
    }
    if(sub % 2 !== 0){
        console.log(sub * sub);
        sub += 2;
        if(num < sub){
            sub -= 1;
        }
        if(num === sub && num % 2 !== 0){
            console.log(sub * sub);
            sub -= 1;
        }
    }
    if(sub % 2 === 0){
        console.log(sub * sub);
        sub -=2;
    }
    rRisingSq(num, sub);
}
console.log("Rising Squares", rRisingSq(8));

// Binary Search Recursion find index location given int val
function rBinarySearch(arr, num, m=Math.round(arr.length/2), s = 0, e = arr.length-1){
    console.log("function Start", arr, num, m, s, e);
    if(arr[m] == num || arr[s] == num || arr[e] == num){
        console.log(num);
        return m || s || e;
    }
    if(arr[m]<num){
        let temp = m;
        console.log("arr[m]<num", m, arr[5])
        return rBinarySearch(arr, num, m =Math.round(m + ((m-s)/2)), s = temp, e);
    }
    if(arr[m]>num){
        let temp = m;
        console.log("arr[m]>num", m, arr[5])
        return rBinarySearch(arr, num, m= Math.round(s + (m-s)/2), s, e = temp);
    }
    else{return false};
}
console.log("rBinarySearch", rBinarySearch([1,2,3,4,5,6,7,8,9], 3));

// Single Linked List:
class SLL{
    constructor(){
        this.head = null;
    }
    ATF(val){
        let newNode = new Node(val);
        let temp = newNode;
        temp.next = this.head;
        this.head = temp;
        return this;
    }
    //Reverse SLL in place with recursion
    rReverse(runner = this.head, temp = null, holder = null){
        if(!runner.next){
            runner.next = temp;
            this.head = holder;
            return this;
        }
        holder = runner.next;
        runner.next = temp;
        temp = runner;
        runner = holder;
        return this.rReverse(runner, temp, holder);
    }
}
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.right = null;
        this.left = null;
    }
}
let SLL1 = new SLL();
let SLL2 = new SLL();
console.log("SLL1", SLL1.ATF(10).ATF(3).ATF(4).ATF(8));
console.log("SLL2", SLL2.ATF(10).ATF(3).ATF(4).ATF(8));
console.log("SLL1 rReverse", SLL1.rReverse());

class BST{
    constructor(){
        this.root = null;
    }
    Add(val){
        let newNode = new Node(val);
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while(runner){
            if(runner.val> val){
                if(!runner.left){
                    runner.left = newNode;
                    return this;
                }
                runner = runner.left;
            } else{
                if(!runner.right){
                    runner.right = newNode;
                    return this;
                }
                runner = runner.right;
            }
        }
    }
    //Find Total amount of Nodes in BST
    rFindSize(runner = this.root, count=1){
        if(!runner){
            return 0;
        }
        console.log("Runner",runner, count);
        if(runner.left){
            count = this.rFindSize(runner.left, count+=1)
        }
        console.log("count", count)
        if(runner.right){
            count = this.rFindSize(runner.right, count +=1);
        }
        return count;
    }
    //Find highest Level of nodes.
    rHeight(size=0, max=1, runner =this.root){
        if(!runner){
            return 0
        }
        console.log("MAX", max, runner)
        if(!runner.left && !runner.right){
            console.log("TEMP", max);
            console.log("HEIGHT", size)
            if(max > size){
                size = max;
                console.log("HEIGHT", size)
            }
            return size;
        }
        if(runner.left){
            let temp = max;
            size = this.rHeight(size, max+=1, runner.left);
            console.log("TEMP R.LEFt", temp);
            max = temp;
        }
        if(runner.right){
            size = this.rHeight(size, max+=1, runner.right);
            console.log("SIZE", size, max)
        }
        return size;
    }
}

let BST1 = new BST();
console.log("BST1 Add values:", BST1.Add(12).Add(15).Add(10).Add(17).Add(9).Add(16).Add(7).Add(3).Add(20).Add(8).Add(21).Add(1));
console.log("BST1 Find Size", BST1.rFindSize());

console.log("BST1 Height:", BST1.rHeight());

