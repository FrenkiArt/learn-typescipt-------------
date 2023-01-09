function sum(a: number, b: number): number {
  return a + b;
}

function log(name: string): void {
  console.log("Hello ", name);
}

function crash(): never {
  throw new Error("Crash");
}
