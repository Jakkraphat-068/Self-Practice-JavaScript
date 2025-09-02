////////////////////////// Function ////////////////////////////
///// Life-Time /////
function greet00(name) {
  let message = "Hello, " + name;  // local variable
  return message;
}
console.log(greet00("Alice")); // "Hello, Alice"
// console.log(message); // Error

let c = 0
function add(a, b) {
    c += a+ b
    return a + b;
}

console.log(add(5, 10)); // 15
// console.log(a); // error 
console.log(c);
