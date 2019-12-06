let stack = ['hi', 9 , 'ironbit', 'plus', 55];
const addToEnd = (stackArray, element) => { 
    let lastElement = stackArray.length;
    if (stackArray == undefined){
        lastElement = 0;
        stackArray[lastElement] = element;
    } else{
        stackArray[lastElement] = element;
    }
}

const removeFromEnd = (stackArray) => {
    let lastElement = stack.length;
    stackArray.splice(lastElement-1, lastElement);
};


const removeFromStart = (stackArray) => {
    stackArray.splice(0, 1);
};

console.log(stack);
addToEnd(stack, 21);
console.log(stack);
removeFromEnd(stack);
console.log(stack);
removeFromStart(stack);
console.log(stack);

class Node {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class List{
    constructor(){
        this.head = null;
    }

    add(val){
        let newNode = new Node(val, this.head);
        this.head = newNode;
    }

    remove(){
        if (this.head === null){
            return null;
        } else {
            this.head = this.head.next;
        }
    }
}

let list = new List();
list.add(1);
list.add(2);
list.remove();
console.log(list);