interface ICar {
  go(speed: number): void;
  // maxSpeed?: number;
}

export class Car implements ICar {
  constructor() {}

  go(speed: number) {
    console.log("Let's go!");
  }
  stop() {
    console.log("Stop!");
  }
}

const car = new Car();
