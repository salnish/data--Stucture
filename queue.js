class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Enqueue data in the queue
  enqueue(elm) {
    let node = new Node(elm),
      current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Remove the item from the queue
  dequeue() {
    let current = this.head;

    //if there is item then remove it
    //and make the next element as the first
    if (current) {
      let elm = current.data;
      current = current.next;
      this.head = current;
      this.size--;
      return elm;
    }

    return null;
  }

  //Return the first element in the queue
  displayFront(){
    if (this.head){
        return this.head.data
    }
    return null
  }

  //Return the last element in the queue
  displayRear(){
    let current =this.head;

    //if head is empty
    //return null
    if(current===null){
        return null;
    }

    //Return the last element
    while(current.next){
        current= current.next;
    }

    return current.data;
  }
}
let queue = new LinkedList();

queue.enqueue("sal");
queue.enqueue("dil");

console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
console.log(queue.displayFront())
console.log(queue.displayRear())
