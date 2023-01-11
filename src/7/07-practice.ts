// Опишите типы для класса Temperature:

export class Temperature {
  constructor(private celsius: number) {}

  protected get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  protected set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  public static(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}
