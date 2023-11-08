class Stack {
  stackOfItems = [];
  currentSize;
  maxSize;

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.currentSize = this.stackOfItems.length;
  }

  push(num) {
    if (this.currentSize >= this.maxSize) {
      return `Stack is already full`;
    } else {
      this.stackOfItems[this.stackOfItems.length] = num;
      this.currentSize++;
      return this.stackOfItems;
    }
  }

  pop() {
    if (this.currentSize === 0) {
      return `Stack is already empty`;
    } else {
      this.currentSize--;
      this.stackOfItems.length = this.currentSize;
      return this.stackOfItems;
    }
  }

  peek() {
    if (this.currentSize === 0) {
      return `Stack is empty`;
    } else {
      return this.stackOfItems[this.stackOfItems.length - 1];
    }
  }

  isEmpty() {
    if (this.currentSize !== 0) {
      return `false`;
    } else {
      return `true`;
    }
  }

  size() {
    return this.currentSize;
  }
}

let maxSize = 3;
let stack = new Stack(maxSize);
console.log(stack.push(20));
console.log(stack.push(40));
console.log(stack.push(60));
console.log(stack.push(80));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push(60));
console.log(stack.push(80));
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
