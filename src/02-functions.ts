function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(3, 4));

function log(name: string, userId?: string): void {
  console.log("Hello", name);
  console.log("with ID", userId || "anonym");
}
log("str1", "id-3");
log("str2");

function crash(): never {
  throw new Error("Crash");
}

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}

const sum2 = (a: number, b: number): number => a + b;

function slice(str: string, start: number, end?: number): string {
  let newStr = "";

  let lastIndex;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}
