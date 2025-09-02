//Anonymous function 'funtion that no name' ไม่สามารถอ้างชื่อได้
// stack is (เข้าทีหลังออกก่อน) queue is (คือคิวในภาษาไทยเลย)


// บาง method จะเปลี่ยนค่าเดิมของ array บางอันก็ ไม่เปลี่ยน
const word1 = ["mango", "apple", "mongosteen", "oranges"]
// 1.Anonymous Function (callback function)
// const shortwords=words.filter((word) => word.length <= 6) 

// 2. Anonymous function declartion
/*const shortwords = words.filter(function (word){
    word.length <= 6
})*/

// 3. reuse call back fuction (named function)
/*function wordLength(word) {
    return word.length <= 6
}*/
//const shortwords = words.filter(wordLength)
//const shortwords = words.filter(wordLength("apple")) // got output is boolean
//console.log(shortwords);//อันนี้การแสดงว่า filter ไป ค่าใน words ยังเหมือนเดิม

//const shortedwords = words.sort()
//console.log(words);
//console.log(shortedwords);

/* เปลี่ยนตัวทุกตัวเป็นตัวใหญ่*/
/*let letters = [...'hello world']
 let uppercase = ''
 letters.forEach((letter) => {
 uppercase += letter.toUpperCase()
 })
 console.log(`uppercase: ${uppercase}`) // "HELLO WORLD"*/

const words = ['mango','apple','mangosteen','orange']
let uppercase = words.map((word) => word.toUpperCase())
console.log(uppercase)


const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

/*const studentID = students.filter((student) => student.id % 2 == 0).map((student) => student.id)   //
console.log(studentID);
console.log(students);*/
// find word that have mango
const word2 = ["mango", "apple", "mangosteen", "oranges", "mangoes"]
const mango = word2.filter(word => word.toLowerCase().includes("mango"))
console.log(mango);

 console.log("///////////////////////////////////////////////////////////////////////////////////");
// find every word that have apple
word2.forEach(function(a, b) {
    if (a.toLowerCase().includes("apple")) {
        console.log(`${a}: have apple`);
    } else {
        console.log(`${a}: don't have apple`);
    }
});

 const product = [1, 'RED', 102]
 const productDetail = product.reduce((detail, prop) => {
     return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
 }, '')

 console.log(productDetail);

 console.log("///////////////////////////////////////////////////////////////////////////////////");

  

//find cart total and return object that show the total {total: 1080}
 const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
const totalcart = cart.reduce((pricetotal, item) => {
    pricetotal.total += item.price * item.quantity;
    return pricetotal;
}, {total: 0}) // pricetotal คือตัวเก็บค่าทั้งหมดไว้  item = cart[ณ ตอนนั้น]

console.log(totalcart);
 console.log("///////////////////////////////////////////////////////////////////////////////////");
const word3 = ["mango", "apple", "mangosteen", "oranges", "mangoes"]
word3.splice(2, 1, "banana") // replace "mangosteen"  with "banana"
console.log(word3);
word3.splice(3, 2) //remove the last two words
console.log(word3);
word3.splice(2, 0, "melon", "cherry") // add melon and cherry after apple 
console.log(word3);
/* spicial case*/ word3.splice(2) 
console.log(word3);

const word4 = ["mango", "apple", "mangosteen", "oranges", "mangoes"]

console.log(word4.slice(2));
console.log(word4.slice(0, 3));
console.log(word4.fill(null));

console.log('///////////////////////////////////////////////////////////////////////////////////////');


const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
const passingNames = []
function getPassingNames (objarr) {
    for (const inx of objarr) {
       if (inx.score > 70) {
         passingNames.push(inx.name.toUpperCase())
       }
    }

}
getPassingNames(studentScores)
console.log(passingNames);

/*const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
 
function getPassingNames(studentList){
    return studentList.filter(student => student.score >= 70).map(student => student.name.toUpperCase())
}
 
const passingNames = getPassingNames(studentScores)
console.log(passingNames); 'เป็นวิธีที่ง่ายที่สุด*/ 

console.log('////////////////////////////////////////////////////////////////////////');

console.log(Array.isArray([]));
const array1 = [50,10,20,30,40]
const array2 = ['d',6,'r']
console.log(array1.concat(array2));
console.log(array1.toString());
console.log(array1.reverse()); // เปลี่ยนแปลงค่าเดิม
console.log(array1);
console.log(array1.sort((a,b) => a - b));
console.log(array1); // เปลี่ยนแปลงค่าเดิม

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
 // ให้ sort()ชื่อนำหน้าตัวอักษรที่มาก่อน โดยไม่สน case sentitive  เพราะปกติจะเอาตัวเล็กมากก่อนเสมอ

 
const std01 = stds.sort((a, b) => a.name.localeCompare(b.name));
console.log(std01);

const name01 = []
function getfgNames (obj1) {
    let name01 = []
    stds.sort((a, b) => a.name.localeCompare(b.name));
    for (const i of obj1) {
        name01.push(i.name)
   }
   return name01
}

console.log(getfgNames(stds));

// indexof vs findindex

//indexof

//findindex ต้องการ callback function

console.log(array1.join(' '));
console.log(array1); 









 

