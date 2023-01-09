enum ShapeKind {
  Circle,
  Square,
}

const myShape = ShapeKind.Circle;

interface ICircle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface ISquare {
  kind: ShapeKind.Square;
  sideLength: number;
}

const circle1: ICircle = {
  radius: 2,
  kind: ShapeKind.Circle,
};
