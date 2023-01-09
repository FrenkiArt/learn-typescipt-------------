interface ICar {
  brand: string;
  isNew?: boolean;
  name?: string;
  type: string;
  wheels: number;

  [key: string]: unknown;
}

export const car: ICar = {
  brand: "BMW",
  isNew: true,
  type: "Sedan",
  wheels: 4,
};

car.name = "my car";

console.log(car);

const car2: ICar = {
  brand: "Mersedes",
  type: "Sedan",
  wheels: 3,
};

car2.go = true;

console.log(car2);
