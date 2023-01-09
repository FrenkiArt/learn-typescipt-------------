interface ICar {
  brand: string;
  isNew?: boolean;
  name?: string;
  type: string;
  wheels: number;
}

const car: ICar = {
  brand: "BMW",
  isNew: true,
  type: "Sedan",
  wheels: 4,
};
