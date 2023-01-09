interface IUser {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface IUser {
  isOnline?: boolean;
}

const user1: IUser = {
  email: "",
  isOnline: false,
  login: "",
  password: "",
};

/* interface Window {
  isAuth?: boolean;
}

window.isAuth; */

interface IPerson {
  firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

export interface Employee extends IUser, IPerson {
  contractStart: Date;
}

const user2: Employee = {
  email: "",
  login: "",
  password: "",
  firstName: "",
  lastName: "",
  contractStart: new Date(),
};

interface IDeveloper extends Employee {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say: () => void;
}

const dev1: IDeveloper = {
  contractStart: new Date(),
  email: "sdf@sdf",
  firstName: "firstName",
  lastName: "lastName",
  login: "firstName",
  password: "password",
  phone: "561561561",
  skills: [],
  say: function (): void {
    console.log(`Hello! I'm ${this.firstName}`);
  },
};

dev1.say();
