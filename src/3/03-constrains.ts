function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(len("asdf"));
console.log(len(["sdf"]));
console.log(len({ length: 12 }));
// len(123);
// len(true);
// len({ a: 1 });
