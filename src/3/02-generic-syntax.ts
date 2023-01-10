// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T;
// type TypeFactory<Type> = T;

type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

export function toArray<T>(...arg: T[]) {
  return arg;
}

toArray(1, 2, 3);
toArray("asdf", "dsf", "sdf");
