function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
let x = 1

class Book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}
//export list
 // change TAX-> VAT
export {Book, echo, getLength as default, TAX as VAT}; // ans
