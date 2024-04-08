class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }
  getPerimeter() {
    let sum = this.side1 + this.side2 + this.side3 + this.side4
    return sum
  }
}
/////
class Rectangle extends Quadrilateral {
  constructor(length, width) {
    super(length, width, length, width)
  }
  getArea() {
    return (this.side1 * this.side2)
  }
}

///
class Square extends Rectangle {
  constructor(length, width = length) {
    super(length, width)
  }
  getDiagonal() {
    let diagonal = this.side1 * Math.sqrt(2)
    return diagonal
  }
}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
