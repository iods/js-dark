// Hashmap implementation using objects
class HashMap {
  constructor() {
    this.map = {}; // Object to store key-value pairs
  }

  // Insert a key-value pair into the hashmap
  insert(key, value) {
    this.map[key] = value;
  }

  // Retrieve the value associated with a given key
  get(key) {
    return this.map[key];
  }

  // Remove a key-value pair from the hashmap
  remove(key) {
    delete this.map[key];
  }

  // Check if a key exists in the hashmap
  contains(key) {
    return key in this.map;
  }

  // Get the number of key-value pairs in the hashmap
  size() {
    return Object.keys(this.map).length;
  }

  // Get all keys in the hashmap
  keys() {
    return Object.keys(this.map);
  }

  // Get all values in the hashmap
  values() {
    return Object.values(this.map);
  }
}

// Usage example
const myHashMap = new HashMap();

myHashMap.insert("name", "John");
myHashMap.insert("age", 30);

console.log(myHashMap.get("name")); // Output: John
console.log(myHashMap.contains("age")); // Output: true

myHashMap.remove("age");
console.log(myHashMap.size()); // Output: 1
console.log(myHashMap.keys()); // Output: [ 'name' ]
console.log(myHashMap.values()); // Output: [ 'John' ]

//mmvenkul@gmail.com
