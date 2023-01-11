export class Circle {
  constructor(public radius: number) {}

  protected static pi: number = 3.14;

  private static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  get area() {
    return Circle.pi * this.radius * this.radius;
  }
}

const c1 = new Circle(200);
// c1.pi;
// Circle.pi;
// Circle.calculateArea(25);
c1.radius;

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius);
    Circle.pi;
  }
}
