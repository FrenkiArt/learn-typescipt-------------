type Status = "ok" | "loading" | "error";

const staticX: Status = "loading";

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
    return false;
  }

  console.log(id);
}

printId("sdf");
printId(333);

function welcome(person: [string, string] | string) {
  if (Array.isArray(person)) {
    console.log("Hello", person.join(" "));
    return false;
  }

  console.log("Hello", person);
}

welcome(["Arthur", "TheBestovich"]);
welcome("Arthur");

/*
Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.

Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя с ключом level
и новый уровень. В теле функции для полученного объекта должен назначаться следующий уровень.

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level,
}

// create a function that change level of incoming developer
function gradeDeveloper() {
}
*/
type Level = "junior" | "middle" | "senior";

interface Developer {
  level: Level;
  login: string;
  skills: string[];
}

function gradeDeveloper(dto: Developer, newLvl: Level) {
  dto.level = newLvl;

  return dto;
}

export const dev1: Developer = {
  level: "junior",
  login: "sdf",
  skills: [""],
};

gradeDeveloper(dev1, "senior");

console.log(dev1.level);
