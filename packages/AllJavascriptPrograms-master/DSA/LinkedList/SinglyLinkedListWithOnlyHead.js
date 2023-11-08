function Node(value) {
  return {
    value: value,
    next: null,
  };
}

function LinkedList() {
  let head = null;
  let size = 0;

  function prepend(value) {
    let node = Node(value);
    if (isEmpty()) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    size++;
  }

  function append(value) {
    let node = Node(value);
    if (isEmpty()) {
      console.log(`List is already empty`);
    } else {
      let prev = head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    size++;
  }

  function insert(value, index) {
    if (index < 0 || index > size) {
      console.log(`Index is out Of Bound`);
    }
    if (index === 0) {
      prepend(value);
    } else {
      let node = Node(value);
      let prev = head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      size++;
    }
  }

  function removeFrom(index) {
    if (index < 0 || index > size) {
      console.log(`Index is out of Bound`);
    }
    let removedNode;
    if (index === 0) {
      removedNode = head;
      head = head.next;
    } else {
      let prev = head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    size--;
    return removedNode.value;
  }

  function removeValue(value) {
    if (isEmpty()) {
      console.log(`List is already empty`);
    }
    if ((head.value = value)) {
      head = head.next;
      size--;
      return value;
    } else {
      let prev = head;
      while (prev.next && prev.next !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        size--;
        return value;
      }
      return null;
    }
  }

  function search(value) {
    if (isEmpty()) {
      return -1;
    }
    let index = 0;
    let curr = head;
    while (curr != null) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  function reverse() {
    let prev = null;
    let curr = head;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    head = prev;
  }

  function isEmpty() {
    return size === 0;
  }

  function getSize() {
    return size;
  }

  function print() {
    if (isEmpty()) {
      console.log(`List is already empty`);
    } else {
      let curr = head;
      let listValues = "";
      while (curr !== null) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  return {
    isEmpty,
    getSize,
    prepend,
    print,
    append,
    insert,
    removeFrom,
    removeValue,
    search,
    reverse,
  };
}

let result = LinkedList();
console.log(result.getSize());
console.log(result.isEmpty());
result.prepend(10);
result.print();
result.prepend(20);
result.print();
result.append(30);
result.print();
result.append(40);
result.print();
result.insert(50, 2);
result.print();
console.log(result.removeFrom(3));
result.print();
console.log(result.removeValue(20));
result.print();
console.log(result.search(50));
result.print();
result.reverse();
result.print();
