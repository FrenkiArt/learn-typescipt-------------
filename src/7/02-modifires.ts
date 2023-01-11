interface IVehicle {}

export class Vehicle {
  public drive(speed: number): void {
    console.log("Let's go!");
    this.log(speed);
  }
  public stop() {
    console.log("Stopped!");
  }
  private log(speed: number) {
    console.log("Vehicke has changed speed to", speed);
  }
  protected altLog(text: string) {
    console.log(text.toUpperCase());
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog("Speed was changed");
  }
}

const car1 = new Car();
