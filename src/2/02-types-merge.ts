type Union1 = "a" | "b" | "c" | "d";
type Union2 = "z" | "s" | "c" | "v";
type Union3 = Union1 | Union2; // "a" | "b" | "c" | "d" | "z" | "s" | "v"
type Union4 = Union1 & Union2; // "c"

export type User = {
  email: string;
  login: string;
  password: string;
};

type Person = {
  firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Person;

type Developer = {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say(): void;
} & Employee;

/* const user1: Developer = {
  contractStart: new Date(),
}; */
