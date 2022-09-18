class Node {
    constructor(){
        this.data=0;
        this.link=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
    }

    push(x){
        let temp=new Node();

        if (temp==null){
            console.log("heap overflow");
            return;
        }
        temp.data=x;
        temp.link=this.top;
        this.top= temp;
    }

    isEmpty(){
        return this.top==null;
    }

    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }
        else{
            console.log("stack is empty");
            return -1
        }
    }

    pop(){
        if (this.top==null){
            console.log("stack underflow");
            return;
        }
        this.top= this.top.link;
    }

    display(){
        if (this.isEmpty()){
            console.log("stack underflow")
        }
        else{
            let temp =this.top;
            while (temp!=null){
                console.log(temp.data);
                temp=temp.link;
            }
        }
    }
}

// let obj = new Stack();

// obj.push(11);
// obj.push(35)

// obj.display()

// console.log(obj.pop())
// console.log(obj.pop())
// console.log(obj.pop())
// obj.peek()


class Queue {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    enqueue(elm){
        let node = new Node(),current;
        node.data=elm;
        if(this.head===null){
            this.head=node;
            console.log(this.head)
        }else{
            current=this.head;
            while(current.link){
                console.log(current.link)
                current=current.link;
                console.log(this.head);
                console.log(current);
            }
            current.link =node;
            console.log(this.head)
        
        }
        this.size++;
    }
}

let q= new Queue();

q.enqueue(45);
q.enqueue(23);
q.enqueue(99);
q.enqueue(65);