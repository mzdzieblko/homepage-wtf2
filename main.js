// const name = "Mateusz";
// const age = 31;

// console.log(`Nazwam się ${name},
// mam ${age} lat
// i zaczynam lubić JS`);

// const empty = document.querySelector(".empty-js"); // document.querySelector "zapisuje" do zmienne

// console.log(empty);

// empty.innerHTML = "Test pustego diva";

const humanOne = {
  name: 'Maciek',
  age: 40,
  address: {
    street: 'Długa',
    city: 'Białystok'
  }
};

const humanTwo = {
  name: 'Mateusz',
  age: 35,
  address: {
    street: 'Krótka',
    city: humanOne.address.city
  }
};

console.log(humanOne);
console.log(humanTwo);


if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else {
  console.log("Human two jest starszy");
}
