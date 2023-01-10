type WindowProp = keyof Window;

const myValue: WindowProp = "outerHeight";

interface PC {
  brand: string;
  year: string;
}

type Typ1 = keyof PC; // brand / year

const val1: Typ1 = "brand";

type Tuple1 = keyof [string, number]; // 0 / 1

const val2: Tuple1 = "1";
