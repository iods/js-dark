function Stack(maxSize) {
  let stackOfItems = [];
  let currentSize = stackOfItems.length;

  function push(num) {
    if (currentSize >= maxSize) {
      return `Stack is already full`;
    } else {
      stackOfItems[currentSize] = num;
      currentSize++;
      return stackOfItems;
    }
  }

  function pop() {
    if (currentSize === 0) {
      return `Stack is already empty`;
    } else {
      currentSize--;
      stackOfItems.length = currentSize;
      return stackOfItems;
    }
  }

  function peek() {
    if (currentSize === 0) {
      return `Stack is empty`;
    } else {
      return stackOfItems[stackOfItems.length - 1];
    }
  }

  function isEmpty() {
    if (currentSize !== 0) {
      return `false`;
    } else {
      return `true`;
    }
  }

  function size() {
    return currentSize;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
  };
}

let stack = Stack(3);
console.log(stack.push(5));
console.log(stack.push(10));
console.log(stack.push(15));
console.log(stack.push(20));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push(5));
console.log(stack.push(25));
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
