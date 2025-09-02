////////////////// object ///////////////////////
// Simple Object
const student = {
  name: 'Bob',
  age: 32, 
  gender: 'male'
}

// Aggregated Object (object ซ้อน object)
const book = {
  isbn: 123456789,
  title: 'JavaScript',
  author: {
    firstname: 'Umaporn',
    lastname: 'Sup'
  }
}
console.log(book.author.firstname) // "Umaporn"
// if firstname: ['Uma', 'porn'] // console.log(book.author.firstname[0]) // "Uma"

// Object Value เป็น Array
const profile = {
  id: 123,
  interests: ['music', 'skiing']
}

// Object Value เป็น Function
const person = {
  id: 1001,
  firstname: 'Somsak',
  lastname: 'Jaidee',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname
  }
}

console.log(person.getFullName()) // Somsak Jaidee

console.log('////////////////////////////////////////////////////////////////////////');

// ///การสร้าง object /// //
// 1. Object Literals
const p1 = {x:10, y:20}
const p2 = {x:5, y:10}

// 2. Constructor Functions
function Point1(x, y) {
  this.x = x // กำหนด property x
  this.y = y // กำหนด property y
  Point1.prototype.distance = function (anotherPoint) {
  return Math.sqrt((this.x - anotherPoint.x)**2 + (this.y - anotherPoint.y)**2);
 }
}

const p3 = new Point1(1, 2)
const p4 = new Point1(2, 4)

console.log(p3)    // Point {x:1, y:2}
console.log(p1.x)  // 1
console.log(p4)    // Point {x:2, y:4}
console.log(p3.distance(p4));

console.log('////////////////////////////////////////////////////////////////////////');

// 3. ES6 Classes
class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(anotherPoint) {
    return Math.sqrt(
      (this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2
    );
  }
}

const p5 = new Point2(10, 30);
const p6 = new Point2(5, 4);

console.log(p5.distance(p6)); // 26.47

console.log('////////////////////////////////////////////////////////////////////////');

// 4. Object.create()
const person2 = { personId: 101, firstname: 'Somsak', lastname: 'Jaidee' }
const student2 = Object.create(person2)

student2.studentId = 651000101

console.log(person2)         // {personId:101, firstname:"Somsak", lastname:"Jaidee"}
console.log(student2)        // {studentId:651000101}
console.log(student2.personId) // 101 (inherit มาจาก person)

console.log('////////////////////////////////////////////////////////////////////////');

const book2= { 
  isbn: 123456789,
  title: "JavaScript",
  author: { firstname: "Umaporn", lastname: "Sup" }
}

// getting
console.log(book2.isbn)
console.log(book2['title'])
console.log(book2['author']['firstname'])

// setting
book2.author.firstname = 'Uma'

// create new property
book2['publishedYear'] = 2000
console.log(book2);

console.log('////////////////////////////////////////////////////////////////////////');

const square = {
  side: 10,
  area: function() { return this.side * this.side }
}

console.log(square.area()) // 100

console.log('////////////////////////////////////////////////////////////////////////');

// Object Passing by Reference
let point3 = { x:10, y:20 }
let point4 = { x:10, y:20 }
let newPoint = point3
console.log(point3);
console.log(point3 === point4);
newPoint.x = 30
console.log(point3) // {x:30, y:20}

console.log('////////////////////////////////////////////////////////////////////////');

//  Object Passing to functions
function distance(p1, p2) {
 return Math.sqrt((p1.x-p2.x) ** 2 + (p1.y-p2.y) ** 2)
    //Exponentiation operator (**)
 }
 console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 }))

console.log('////////////////////////////////////////////////////////////////////////');

// Shallow Equality
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };
const obj3 = obj1;
console.log(obj1 === obj2); // false 
console.log(obj1 === obj3); // true 

console.log('////////////////////////////////////////////////////////////////////////');

// JSON
console.log(JSON.stringify({x:5, y:6})) // "{"x":5,"y":6}"

const objA = { id:1, name:"Somchai" }
const str = JSON.stringify(objA) // แปลง object → string
const objB = JSON.parse(str)    // แปลง string → object

console.log('////////////////////////////////////////////////////////////////////////');

// Spread ใน Object
const obj4 = { foo: 'bar', x: 42 }
const obj5 = { foo: 'baz', y: 13 }

const clonedObj = { ...obj4 } 
// {foo:"bar", x:42}
console.log(clonedObj);

const mergedObj = { ...obj4, ...obj5 } 
// {foo:"baz", x:42, y:13}  (ค่า foo ถูก obj2 ทับ)
console.log(mergedObj);

console.log('////////////////////////////////////////////////////////////////////////');


// Object Destructuring
const student3 = { id:1001, fullname:"Somchai Jaidee", email:"somchai@example.com" }
//let id = student.id
//let fullname = student.fullname
//let email = student.email
let {id, fullname, email} = student3
console.log(id)       // 1001
console.log(fullname) // Somchai Jaidee
console.log(email)    // somchai@example.com

console.log('////////////////////////////////////////////////////////////////////////');

// Nested Object Destructuring
const msg = {
sender: 'Somsak',
recipient: 'Pornsuda',
content: {
header: 'Reminder our party',
body: 'let see you in the party'
 }
}
const {content: { header }} = msg
console.log(header)//Reminder our party

console.log('/////////////////////////////////////โจทย์///////////////////////////////////');


///ลองทำโจทย์ Object 
///// 1.) การเข้าถึง property
const student01 = {
  id: 101,
  name: "Alice",
  age: 20,
  address: {
    city: "Bangkok",
    zipcode: 10240
  }
};

// 1.แสดงชื่อ (name) ของ student
 console.log(student01.name);
// 2.แสดง zipcode ของ student
console.log(student01.address.zipcode);
// 3.ใช้ destructuring เพื่อดึง id และ age ออกมา
let std01ID = student01.id
let std01AGE = student01.age

console.log('////////////////////////////////////////////////////////////////////////');

///// 2.) เพิ่ม / ลบ property
let car01 = {
  brand: "Toyota",
  model: "Camry"
};

//1.เพิ่ม property year = 2020
car01.year = 2020
console.log(car01);
//2.ลบ property model
delete car01.model
console.log(car01);

console.log('////////////////////////////////////////////////////////////////////////');

///// 3.) วนลูป object
const scores01 = {
  math: 80,
  english: 75,
  science: 90
};

// เขียนโค้ดวนลูปด้วย for...in เพื่อแสดงชื่อวิชาและคะแนน
for (const key01 in scores01) {
    console.log(`${key01}: ${scores01[key01]}`);
 }   
// หาค่าเฉลี่ยของคะแนนทั้งหมด
function findAVG (obj01) {
    let sum = 0
    let count = 0
    for (const key02 in scores01) {
       sum += scores01[key02]
       count ++
    }
    let sumAVG = sum / count
    console.log(sumAVG);
}
findAVG(scores01)

console.log('////////////////////////////////////////////////////////////////////////');

//// 4) Array of Objects
const products01 = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 12000 }
];

//หาผลรวมของราคาสินค้าทั้งหมด
let total = products01.reduce((sum, item) => sum + item.price, 0);
console.log(`Total: ${total}`); 
//หาสินค้าที่มีราคามากกว่า 15000
let morethan15000 = products01.filter((more => more.price > 15000))
console.log(morethan15000);

//หาสินค้าที่ราคาถูกที่สุด
function cheapprice (obj02) {
    let mostcheap = obj02[0].price
    for (const prod of obj02) {
        if (prod.price < mostcheap) {
            mostcheap = prod
        } 
    }
    console.log(mostcheap);
    
}
cheapprice(products01)

console.log('////////////////////////////////////////////////////////////////////////');

///// 5.) การเปรียบเทียบ Object เขียนฟังก์ชัน shallowEqual(obj1, obj2) ที่คืนค่า true ถ้า object มี property และค่าข้างในเหมือนกัน
const a01 = { x: 1, y: 2 };
const b01 = { x: 1, y: 2 };
const c01 = { x: 1, y: 3 };


function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
// output ที่ต้องการ
console.log(shallowEqual(a01, b01)); // true
console.log(shallowEqual(a01, c01)); // false

