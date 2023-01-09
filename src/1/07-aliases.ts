type MyBoolean = false | true;

type Pair = [string, string];

type Pairs = Pair[];

export type TypeCar = {
  brand: string;
  isNew?: boolean;
  name?: string;
  type: string;
  wheels: number;

  [key: string]: unknown;
};
