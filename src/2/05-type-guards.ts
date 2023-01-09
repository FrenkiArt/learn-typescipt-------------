type TypeFish = { swim: () => void };
type TypeBird = { fly: () => void };

function isFish(pet: TypeFish | TypeBird): pet is TypeFish {
  return (pet as TypeFish).swim !== undefined;
}

function move(animal: TypeFish | TypeBird) {
  if (isFish(animal)) {
    console.log("It is Fish");
  } else if ("fly" in animal) {
    console.log("It is Bird");
  }
}
