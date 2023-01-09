function example(x?: number | string) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed();
  } else if (x === undefined) {
    console.log("No value");
  }
}

function example2(strs: string | string[] | null) {
  /* if (typeof strs === "object") {
  } */
  if (Array.isArray(strs)) {
    console.log("it is array", strs);
  }
  if (strs && typeof strs === "object") {
    console.log("it is array", strs);
  } else if (typeof strs === "string") {
    console.log("it is string", strs);
  }
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    x.concat([]);
  }
}

export type TypeFish = { swim: () => void };
export type TypeBird = { fly: () => void };

function move(animal: TypeFish | TypeBird) {
  if ("swim" in animal) {
    console.log("It is Fish");
  } else if ("fly" in animal) {
    console.log("It is Bird");
  }
}
