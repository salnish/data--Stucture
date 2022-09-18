class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  //Return and remove top element  
  //Return undefined if stack is empty
  pop() {
    if (this.count==0) return undefined
    let deleteItem = this.items[this.count-1]
    this.count-=1
    console.log(`${deleteItem} is deleted`)
    return deleteItem
  }
}

const stack = new Stack();

stack.push(100)
stack.push(200)
stack.push(300)

stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop()) 
