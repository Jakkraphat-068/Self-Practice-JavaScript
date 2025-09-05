////////////////////////// Function ////////////////////////////  

////////// Life-Time //////////
function greet00(name) {
  let message = "Hello, " + name;  // local variable
  return message;
}
console.log(greet00("Alice")); // "Hello, Alice"
// console.log(message); // Error

let c = 0
function add00(a, b) {
    c += a+ b
    return a + b;
}

console.log(add00(5, 10)); // 15
// console.log(a); // error 
console.log(c);
console.log("/////////////////////////////////////////////////////////////////////////////////////");


////////// Higher-Order-Function //////////
//// 1. ฟังก์ชันที่รับฟังก์ชันเป็นพารามิเตอร์
function greet01(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Alice";
    console.log(callback(name));
}

processUserInput(greet01); // Output: Hello, Alice!
console.log("/////////////////////////////////////////////////////////////////////////////////////");
//// 2.ฟังก์ชันที่คืนค่าฟังก์ชัน
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
console.log("/////////////////////////////////////////////////////////////////////////////////////");
////////// create function ///////

////callback function 
function processUserInput(callback) {
  const name = "John";
  callback(name); // เรียกใช้ฟังก์ชัน callback พร้อมส่งค่า name
}

function greet02(name) {
  console.log(`Hello, ${name}!`);
}

// ส่งฟังก์ชัน greet เป็น callback
processUserInput(greet02);

console.log("/////////////////////////////////////////////////////////////////////////////////////");
//// Function Declaration
function sayHello(name) {
  return "Hello, " + name;
}

console.log(sayHello("Alice"));
console.log("/////////////////////////////////////////////////////////////////////////////////////");
/* Anonymous Function
const greet = function() {
    console.log("Hello, Anonymous Function!");
}; */

//// Arrow Function 
// have one parameter
const square = x => x * x;
// have two parameter
const a00 = (a, b) => a + b;
// no parameter 
const a01 = () => console.log("Hello, world!");
console.log("/////////////////////////////////////////////////////////////////////////////////////");
// Primitive Parameter Passing
function square00(side) {
 theSide += 1 
 return side * side
 
 }
 let theSide = 2
 console.log(theSide)
 console.log(square00(theSide)) //4
 console.log(theSide)
console.log("/////////////////////////////////////////////////////////////////////////////////////");
 // Object Parameter Passing
 function myFunc(theObject) {
 theObject.model = "A9999"
 }
 const product = {model: "A1001", price: 199}
 console.log(product.model) // "A1001"
 myFunc(product);
 console.log(product.model) // "A9999"

 console.log("/////////////////////////////////////////////////////////////////////////////////////");
// Default Parameters
 function who00(name = 'Bloom') {
 return name;
 }
 console.log(who00()); 
 console.log(who00('Umaporn'))//Umaporn

console.log("/////////////////////////////////////////////////////////////////////////////////////");
 // ...spread
function sum00(num1, num2, num3) {
 return num1 + num2 + num3
 }
 let nums = [5, 20, 15]
 //spread parameter
 console.log(sum00(...nums)) //40
console.log("/////////////////////////////////////////////////////////////////////////////////////");

 // ... rest
 function sum01(opsName, ...theNumbers) {
  console.log(opsName) //'sum'
  let total = 0
  for (const num of theNumbers) {
     total += num
  }
  return total
 }
 console.log(sum01(1, 2, 3)) //6
 console.log(sum01(1, 2, 3, 4, 5))//15
console.log("/////////////////////////////////////////////////////////////////////////////////////");

// Destructuring: Unpacking elements in array passed as a function parameter
function arrayAdd1([x1], [y1]) {
 return x1+y1
 }
 const a = [5, 8]
 const b = [2, 7]
 console.log(arrayAdd1(a, b)) // 7
 function arrayAdd2([x1, y1], [x2, y2]) {
 return x1 + x2 + y1 + y2
 }
 console.log(arrayAdd2([1, 2], [3, 4])) // 10
 function arrayAdd3([x1, y1], [x2, y2]) {
 return [x1 + x2, y1 + y2]
 }
 const x = [1, 2]
 const y = [3, 4]
 console.log(arrayAdd3(x, y)) // [4,6]
 console.log("/////////////////////////////////////////////////////////////////////////////////////");

 // Destructuring: Unpacking properties from objects passed as a function parameter
 const students00 = {
  studentId: 64001,
  displayName: 'jsGuy',
  fullName: {
   firstName: 'Somchai',
   lastName: 'DeeJai'
  }
 }

 function studentId({ studentId }) {
    studentId = 65123
    return studentId
 }

function getFirstName({ displayName, fullName: { firstName } }) {
   return `${displayName} is ${firstName}`
 }
 console.log(studentId(students00)) //65123
 console.log(getFirstName(students00))
console.log("/////////////////////////////////////////////////////////////////////////////////////");
 // Destructuring: Unpacking Combined Array and Object passed as a function parameter
 const person00 = [
 { id: 1, name: 'Suda' },
 { id: 2, name: 'Surapong' },
 { id: 3, name: 'Somchai' }
 ]
 
 function getPersonName([, { name }]) {
 return name
 }
 console.log(getPersonName(person00)) // Surapong
console.log("/////////////////////////////////////////////////////////////////////////////////////");
 /////////////// ลองทำโจทย์ chatGBT gen /////////////////////////

/* 1. Function Declaration vs Expression
โจทย์: เขียนฟังก์ชันบวกเลข 2 ตัว แบบ
Function Declaration
Function Expression */

// 1.1
function z01 (a, b) {
    return a + b
}

console.log(z01(5,4));
// 1.2
const z02 = function(a, b) {return a + b}
console.log(z02(10, 100));

/* 2. Default และ Rest Parameters
เขียนฟังก์ชัน sumAll ที่บวกเลขทุกตัวที่ส่งเข้ามา และมี default parameter ถ้าไม่ส่งเลขเลยให้บวกเลขกับ 0 */

function z03 (a = 0, ...b) {
    let total = a;
    for (const i of b) {
        total += i;
    }
    return total;
}
console.log(z03());

console.log(z03(1, 20, 30));

/* 3. Arrow Function
เขียนฟังก์ชันลูกศร ที่คืนค่ากำลังสองของตัวเลขที่รับเข้ามา*/
const z04 = a => a * a
console.log(z04(5));

/* 4. Callback Function 
เขียนฟังก์ชัน  z05 ที่รับ array และ callback
 ถ้า callback เป็น double → คืนค่า array ที่คูณ 2 ทุกตัว
 ถ้า callback เป็น square → คืนค่า array ที่ยกกำลังสองทุกตัว*/

 function z05 (array, callback) {
    let result = []
    for (const i of array) {
        result.push(callback(i))
    }
    return result
}

function double05(a) {
    return a * 2
}

function square05(a) {
    return a * a
}

console.log(z05([1, 2, 3], double05)); // 
console.log(z05([1, 2, 3], square05)); //    

/* 5. Recursive Function 
เขียนฟังก์ชัน factorial(n) แบบ recursion*/

function factorial(n) {
  if (n === 0) return 1;  // base case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
