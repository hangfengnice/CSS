class MathHandle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y;
  }
}
let m = new MathHandle(1, 2);
console.log(m.add());

console.log(typeof MathHandle);
console.log(MathHandle.prototype.constructor === MathHandle);
console.log(m.__proto__ === MathHandle.prototype);
