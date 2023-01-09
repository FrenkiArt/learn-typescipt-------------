// Aliases
// 1. primitives, union, intersections, tuples
// 2. плохо расширяется

// Interfaces
// 1. хорошо расширяется
// 2. хорошая имплементация классов

/*
Создайте в двух вариантах (алиасах и интерфейсах)
следующую структуру:

Product : price, isNew, isSale, title
Vehicle : wheels, year, brand
Car: type, model +Product, +Vehicle
*/

type TypeProduct = {
  isNew: boolean;
  isSale: boolean;
  price: string;
  title: string;
};

type TypeVehicle = {
  brand: string;
  wheels: number;
  year: string;
};

type TypeCar = TypeProduct &
  TypeVehicle & {
    model: string;
    type: string;
  };

interface IProduct {
  isNew: boolean;
  isSale: boolean;
  price: number;
  title: string;
}

interface IVehicle {
  brand: string;
  wheels: number;
  year: string;
}

interface ICar extends IProduct, IVehicle {
  model: string;
  type: string;
}

const car: ICar = {
  brand: "",
  isNew: false,
  isSale: false,
  model: "",
  price: 0,
  title: "",
  type: "",
  wheels: 0,
  year: "",
};
