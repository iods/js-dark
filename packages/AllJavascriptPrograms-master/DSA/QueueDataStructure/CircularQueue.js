function CircularQueue(maxSize) {
  let queue = new Array(maxSize);
  let currentSize = 0;
  let head = -1;
  let tail = -1;

  function enqueue(num) {
    if (isFull()) {
      return `Queue is already full`;
    } else if (isEmpty()) {
      head = 0;
      tail = 0;
    } else {
      tail = (tail + 1) % maxSize;
    }
    queue[tail] = num;
    currentSize++;
    return queue;

    // if (currentSize != maxSize) {
    //   if (tail == maxSize - 1) {
    //     tail = 0;
    //   } else {
    //     tail++;
    //   }
    //   queue[tail] = num;
    //   currentSize++;
    //   if (head == -1) {
    //     head = tail;
    //   }
    //   return queue;
    // } else {
    //   return `Queue is already full`;
    // }
  }

  function dequeue() {
    if (isEmpty()) {
      return `Queue is already empty`;
    } else {
      queue[head] = null;
      head = (head + 1) % maxSize;
    }
    currentSize--;
    return queue;

    // if (currentSize != 0) {
    //   queue[head] = null;
    //   if (head == maxSize - 1) {
    //     head = 0;
    //   } else {
    //     head++;
    //   }
    //   currentSize--;
    //   return queue;
    // } else {
    //   head = -1;
    //   tail = -1;
    //   return `Queue is already empty`;
    // }
  }

  function peek() {
    if (isEmpty()) {
      return `Queue is empty`;
    } else {
      return queue[head];
    }
  }

  function size() {
    return currentSize;
  }

  function isFull() {
    return currentSize === maxSize;
  }

  function isEmpty() {
    return currentSize === 0;
  }

  return {
    enqueue,
    dequeue,
    isFull,
    isEmpty,
    peek,
    size,
  };
}

let maxSize = 3;
let result = CircularQueue(maxSize);
console.log(result.enqueue(20));
console.log(result.enqueue(40));
console.log(result.dequeue());
console.log(result.enqueue(60));
console.log(result.enqueue(80));
console.log(result.enqueue(100));
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.enqueue(60));
console.log(result.enqueue(80));
console.log(result.peek());
console.log(result.size());
