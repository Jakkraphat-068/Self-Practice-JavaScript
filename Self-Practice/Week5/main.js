
////////////////// CommonJS /////////////////////
/*// ตัวอย่าง 1 ฟังก์ชัน
const plus = require('./add');  // import
console.log(plus(5, 3)); // 8 */

// ตัวอย่าง 2 ฟังก์ชัน
const { add, multiply } = require('./calc');
console.log(add(2,3));       // 5
console.log(multiply(2,3));  // 6

////////////////////////////////////////////////
///////////////// ES Modules Import //////////////
// Default import
import Person from './add.js';

// Named import
import { pi, add } from './add.js';

// Rename import
import { pi as circlePI } from './add.js';

// Import ทั้งหมดเป็น object
import * as utils from './add.js';
console.log(utils.pi, utils.add(2,3));

// import one function
import { sayHi } from './add.js';
console.log(sayHi("Alice"));

//import two function 
import { add01, multiply } from './add.js';

// ES Module (default export)
import a from './add2.js'; // ใช้ชื่ออะไรก็ได้
console.log(a());


