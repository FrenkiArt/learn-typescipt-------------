interface IDtoPoint {
  x: string;
  y: string;
}

function printPoint(point: IDtoPoint): void {
  console.log(`Coordinates of the point is x: ${point.x} and y: ${point.y}`);
}

printPoint({ x: "3", y: "5" });

const obj1 = {
  x: "1",
  y: "2",
};

const obj2 = {
  x: "1",
  y: "2",
  z: "3",
};

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log("Hello", user.firstName.toUpperCase());
  if (user.lastName) {
    console.log("Nice to meet you Mr.", user.lastName?.toUpperCase());
  }
}

printName({ firstName: "Arthur", lastName: "Arthur" });

/* Создайте интерфейсы User и Admin.

User должен содержать следующие ключи:

login, email, password, isOnline, lastVisited
Admin содержит все те же ключи, плюс ключ role.

Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

Проверьте, что поля не пустые и выведите приветственное сообщение в консоль. */

interface IUser {
  email: string;
  isOnline: boolean;
  lastVisited: Date;
  login: string;
  password: string;
}

interface IAdmin {
  email: string;
  isOnline: boolean;
  lastVisited: Date;
  login: string;
  password: string;
  role: string;
}

function login(dto: IUser | IAdmin) {
  if (dto.login && dto.password) {
    console.log("Hello", dto.login);
  }
}

const user: IUser = {
  email: "sdf@mail.ru",
  isOnline: true,
  lastVisited: new Date(2023, 1, 9),
  login: "userName",
  password: "userPassword",
};

const admin: IAdmin = {
  email: "sdf@mail.ru",
  isOnline: true,
  lastVisited: new Date(2023, 1, 9),
  login: "userName",
  password: "userPassword",
  role: "superAdmin",
};

login(user);
