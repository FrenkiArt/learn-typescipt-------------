interface IVehicle {}

export class Vehicle {
  // private cratedAt: Date;

  constructor(protected createdAt: Date) {}

  public drive(speed: number): void {
    console.log("Let's go!");
    this.log(speed);
  }
  public stop() {
    console.log("Stopped!");
  }
  private log(speed: number) {
    console.log("Vehicke has changed speed to", speed, this.createdAt);
  }
  protected altLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  // color: string;
  // maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());

    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  public changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog("Speed was changed");
  }

  getInfo() {
    console.log(this.color, this.maxSpeed, this.createdAt);
  }
}

const car1 = new Car("red", 200);
