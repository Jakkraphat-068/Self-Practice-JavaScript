/////////* ทวนความจำที่เกี่ยวกับ Array *//////////
//////// การสร้าง array มีหลายแบบ
let arr0 = ['Hi'] // สร้างปกติ
let cars = [];  // สร้างไว้แล้วค่อย add item เข้าไปทีหลัง
cars[0]= "Toyota";
cars[1]= "Volvo";
cars[2]= "BMW";
delete cars[1]; // ลบ array 
console.log(arr0);
console.log(cars);
console.log(cars[2]);


let b1 = new Array(10)
b1.push(false)
console.log(b1);




console.log(typeof arr0);  // <- array เป็น object 
let arr1 = ['Hi'] 
console.log(arr0 === arr1); // <- ต่อให้มีค่าเหมือนกันเป๊ะๆ array สองตัวก็จะไม่เท่ากัน เพราะ มันเป็น address คนล่ะตัวกัน
arr0 = arr1 // ทำให้สองตัวชี้ address เดียวกัน 
console.log(arr0 === arr1); // <- แบบนี้ถึงจะเป็น true

//array มี index เริ่มที่ 0 เป็นเลขลำดับให้ข้อมูลแต่ล่ะตัว
//////*1 Array เก็บ Data Type ได้หลายแบบใน array ตัวเดียว*/
let name = "Bloom";
let ar0 = [12, 'B', "go",name ];
let ar1 = [5, '8', ar0, true];
console.log(ar1);
console.log(ar1[1])

///////*2 ' ... ' ในที่นี้มีสองความหมาย *///////
// 1. Spread คือกระจายข้อมูลจากใน array ออกมา Array.from() ใช้คล้ายกับ spread
let ar2 =  [1,true];
let ar3 = ['b', name];
let con1 = [ar3, ...ar2] 
console.log(con1) //con1 จะมี 1 กับ true อยู่ด้วย
// 2. The rest ก็คือ A จะเก็บ
let ar4 = [10, 20, false, 40, 50];
let [a, ...b] = ar4; 
console.log(a); 
console.log(b);   

// ** spread สามารถทำให้ แยกแต่ล่ะตัวอักษรใน string เป็น array  ได้
let letter1 = [...'Hello world'] 
console.log(letter1);
//["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

///////*3 เมธอดที่ใช้บ่อย *///////
let ar5=[name,1];
///push() เพิ่มค่าไปที่ท้ายสุดของ  array
ar5.push(true); 
console.log(ar5);

///unshift()	เพิ่มค่าไปที่หน้าสุดใน array	
ar5.unshift(false); 
console.log(ar5);

///pop()	ลบค่าที่ท้ายของ array	
ar5.pop(); 
console.log(ar5);

///shift()	ลบค่าหน้าสุดของ array	
ar5.shift(); 
console.log(ar5);

/// splice ใช้ได้หลายอย่าง ลบ เพิ่ม แทนที่ โครงสร้างง่าย
//ชื่อarray.splice(เริ่มตรงไหน, ลบกี่ตัว, เพิ่ม, เพิ่ม...)
// splice ใช้แบบ ลบ
let ar6 = [name, "b", false, "d"];
ar6.splice(0, 2);  // <- หมายถึง  ลบเริ่มจาก index ที่ 0 ไป 2 ตัว (รวมตัวมันเองด้วย)
console.log(ar6);
// splice ใช้แบบ เพิ่ม
ar6.splice(1, 0, true, 'x') //  <- หมายถึง  เริ่มจาก index ที่ 1 ไม่ต้องลบ แล้วใส่ค่าต่อจาก index 1 ไป สองตัว คือ true, 'x'
console.log(ar6);
// splice ใช้แบบ แทนที่
ar6.splice(0, 1, "Jame");  // <- หมายถึง  ลบเริ่มจาก index ที่ 0 แล้วใส่เป็น Jame แทน
console.log(ar6);

/// filter
/*array.filter(เงื่อนไข);*/
let ar7 = [10, 25, 30, 45, 60];


let result = ar7.filter(num => num > 30);// เลือกตัวเลขที่มากกว่า 30

console.log(result); // [45, 60]

/// map

 /*array.forEach(function(element, index, array) { ใช้วนลูป array โดยเฉพาะ
  // โค้ดที่อยากให้ทำกับ element
 });*/

let ar8 = [10, 20, 30];

ar8.forEach(function(num) {
  console.log(num);
});


/// slice 
 /*array.slice(start, end)*/
const ar9 = ["mango", "apple", "mangosteen", "oranges", "mangoes"]

console.log(ar9.slice(2));
console.log(ar9.slice(0, 3));

/// fill
/*array.fill(value, start, end) */

let ar10 = [1, 2, 3, 4];
ar10.fill(0);
console.log(ar10); 

console.log(ar10.fill(null));

/// reduce
const ar11 = [1, 2, 3, 4];
const sum = ar11.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // ผลลัพธ์: 10
console.log(ar11);


/// sort()
const ar12 = [10, 2, 30];
ar12.sort((a, b) => a - b); // เรียงจากน้อยไปมาก
console.log(ar12); // [2, 10, 30]

 // sort(กรณี object)
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Jack", age: 30 }
];
people.sort((a, b) => a.age - b.age); // เรียงตามอายุจากน้อยไปมาก
console.log(people); 

////////* ลองทำโจทย์ from chatgbt*////////
/* 1) ให้ array ของคำว่า ["js", "html", "css", "node"]
เขียนโค้ดวนลูปเพื่อแปลงให้เป็น ตัวพิมพ์ใหญ่ทั้งหมด เช่น ["JS", "HTML", "CSS", "NODE"]*/
let pactice1 = ["js","html","css","node"]
for (let i = 0; i < pactice1.length; i++) {
  pactice1[i] = pactice1[i].toUpperCase();
}
console.log(pactice1);


/* 2) ให้ array ของตัวเลข [5, 10, 15, 20, 25]
เขียนฟังก์ชันหาผลรวมของตัวเลขทั้งหมด หาค่าเฉลี่ย แสดงผลว่ามีตัวเลขใดบ้างที่มากกว่าค่าเฉลี่ย */
let pactice2 = [17,10,15,20,25,4]
function getSum(array1) {
  return array1.reduce((sum, num) => sum + num, 0);
}

function getAVG(array2) {
  summary = getSum(array2);
  return summary / pactice2.length;
}

function getMOREAVG(array3) {
  avg = getAVG(array3);
  for (let y = 0; y < array3.length; y++) {
    if (array3[y] > avg) {
      console.log(array3[y]);
    }
  }
}
console.log(getSum(pactice2));
console.log(getAVG(pactice2));
console.log(getMOREAVG(pactice2));


/*3) let books = ["Harry Potter", "Lord of the Rings", "Naruto", "One Piece"];
เพิ่ม "Attack on Titan" ท้ายสุด
ลบ "Naruto" ออก
เรียงชื่อหนังสือตามตัวอักษร */

let books = ["Harry Potter", "Lord of the Rings", "Naruto", "One Piece"]
books.push("Attack on Titan")
delete books[2]
books.sort() // จะทำให้ข้อมูลเรียงตามตัวอักษร A ไป Z
console.log(books);


/*4)
let products = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 12000 },
  { name: "Monitor", price: 8000 }
];
หาสินค้าราคาต่ำกว่า 15000
หาสินค้าที่แพงที่สุด
หาผลรวมราคาสินค้าทั้งหมด*/

let products = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 12000 },
  { name: "Monitor", price: 8000 }
];

// หาสินค้าราคาต่ำกว่า 15000
let lessthen15000 = products.filter(products => products.price < 15000);
console.log("Less then 15000:", lessthen15000);  

// หาสินค้าที่แพงที่สุด แบบ ใช้ reduce
let maxProduct = products.reduce((max, item) => item.price > max.price ? item : max);
console.log("สินค้าที่แพงที่สุด:", maxProduct); 

// ทำลูปหาสินค้าที่แพงที่สุด
let x = 0;
let mostprice = products[x].price;
while (x < products.length) {
  if (mostprice < products[x].price) {
    mostprice = products[x].price;
  }
  x++
}
console.log(mostprice);  

//หาผลรวมราคาสินค้าทั้งหมด 
pricesum = products[0].price
for (let xx = 1; xx < products.length; xx++) {
   pricesum = pricesum + products[xx].price;
}
console.log(pricesum);

//// const pricesum = products.reduce((s, p) => s + p.price, 0); CHATGBT บอกวิธีนี้ดีกว่าเพราะมันจะกลายเป็น กลายเป็นโกลบอลโดยไม่ตั้งใจ


////// Array Destructuring Assignment

 const [a0, b0] = [5, 10]
 console.log(a0) // 5
 console.log(b0) // 10

 const [m] = [10, 20, 30, 40]
 console.log(m) // 10

 const [, , n] = [8, 16, 24, 32]
 console.log(n) // 24

 //Rest Operator Works in a Destructuring Assignment
 const [c0, y, ...z] = [5, 10, 15, 20, 25] //with rest operator
 console.log(z) // [15,20,25]

////// Iterating Arrays
let letter2 = [...'Hello world'] 
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
 let msg = ''
 for (let ch of letter2) {
 msg += ch + ', '
 }
 console.log(msg)
 
let sentence = letter2.join('');
console.log(sentence);


/////// เสริม for in vs for of
///// ตัวอย่างที่เห็นได้ชัด
const arr = [10, 20, 30];

// for...in
for (const index in arr) {
  console.log(index); // 0, 1, 2
  console.log(arr[index]); // 10, 20, 30
}

// for...of
for (const value of arr) {
  console.log(value); // 10, 20, 30
}
