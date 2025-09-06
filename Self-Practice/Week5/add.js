
///////////////////////////////// CommonJS ////////////////////////////////////
// ตัวอย่าง 1 ฟังก์ชัน
/*function add(a, b) {
  return a + b;
}
module.exports = add;   // export ค่าเดียว (default style)*/

//   ตัวอย่าง 2 ฟังก์ชัน
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
module.exports = { add, multiply }; // export เป็น object
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////// ES Modules Export/////////////////////////////////////
// Named export (หลายตัวได้)
export const pi = 3.14;
export function add(x,y){ return x+y; }

// Default export (ได้ตัวเดียวต่อไฟล์)
export default class Person {
  constructor(name) { this.name = name; }
}

// export function
// one function 
export function sayHi(name){ return `Hi, ${name}`; }

//  export two function
function add01(a,b){ return a+b; }
function multiply(a,b){ return a*b; }
export { add01, multiply }

