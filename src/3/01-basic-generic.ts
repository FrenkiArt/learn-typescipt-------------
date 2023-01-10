function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

console.log(append(1, [1, 2, 3]));
// console.log(append("sdf", [1, 2, 3]));
