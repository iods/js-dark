function Queue() {
  let queue = [];

  function enqueue(num) {
    queue[queue.length] = num;
    return queue;
  }

  function dequeue() {
    if (queue.length === 0) {
      return `Queue is already empty`;
    } else {
      for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i + 1];
      }
      queue.length = queue.length - 1;
      return queue;
    }
  }

  function peek() {
    if (queue.length === 0) {
      return `Queue is empty`;
    } else {
      return queue[0];
    }
  }

  function isEmpty() {
    if (queue.length === 0) {
      return `true`;
    } else {
      return `false`;
    }
  }

  function size() {
    return queue.length;
  }

  return {
    enqueue,
    dequeue,
    peek,
    isEmpty,
    size,
  };
}

let result = Queue();
console.log(result.enqueue(3));
console.log(result.enqueue(6));
console.log(result.enqueue(9));
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.dequeue());
console.log(result.enqueue(6));
console.log(result.enqueue(9));
console.log(result.peek());
console.log(result.isEmpty());
console.log(result.size());
