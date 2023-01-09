function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add("sdf", "sdf"));
console.log(add(4, 3));

type asyncCb = (res: number) => number;

function asyncSumm(a: number, b: number): Promise<number>;
function asyncSumm(a: number, b: number, cb: asyncCb): number;
function asyncSumm(a: number, b: number, cb?: asyncCb): any {
  const result = a + b;

  if (cb) {
    return cb(result);
  }

  return Promise.resolve(result);
}

console.log(asyncSumm(1, 2));

/*
Дана функция head, которая возвращает либо первый символ
переданной строки, либо первый элемент переданного массива.

Приведенные типы функции заведомо избыточны.
Необходимо переписать их, используя подход перегрузки.
*/

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

console.log(head("sdf"));
console.log(head([1, 2, 3]));
console.log(head([true, false, true]));
