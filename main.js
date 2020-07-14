const name = "Mateusz";
const age = 31;

console.log(`Nazwam się ${name},
mam ${age} lat
i zaczynam lubić JS`);

const empty = document.querySelector(".empty-js"); // document.querySelector "zapisuje" do zmienne

console.log(empty);

empty.innerHTML = "Test pustego diva";

const humanOne = {
  name: 'Maciek',
  age: 35,
  address: {
    street: 'Długa',
    city: 'Białystok'
  }
};

const humanTwo = {
  name: 'Mateusz',
  age: 0,
  address: {
    street: 'Krótka',
    city: humanOne.address.city
  }
};

console.log(humanOne);
console.log(humanTwo);

if ((humanOne.age === 0) || (humanTwo.age === 0)) {
  console.log("Któryś z Humanów nie żyje")
} else if (humanOne.age > humanTwo.age) {
  console.log("Human one jest starszy");
} else if (humanTwo.age > humanOne.age) {
  console.log("Human two jest starszy");
} else if (humanOne.age == humanTwo.age) {
  console.log('Mają tyle samo lat');
} else if (humanOne.age == 0) {
  console.log("Human One nie żyje")
} else if (humanTwo.age == 0) {
  console.log("Human Two nie żyje")
}

// test Nan

const stringTest = 'test';
const stringTest2 = 'test2';

var wynik = stringTest2 - stringTest;

console.log(wynik);

// test Nan

const button = document.querySelector('.action--js');



button.addEventListener('click', () => {
  const heading = document.querySelector(".main__heading--js")
  heading.innerHTML = "Podmiana po kliknięciu";
  heading.classList.toggle('klasa-z-js')
});

//zmienna. addEventListener('co wywołuje',funkcja która się wykona po 'co wywwołuje')

//przetestuj efekt powiekszenia zdjęcia po najechaniu myszką


const hamburger = document.querySelector('.navigation__button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

let isDark = true;


const switcher = document.querySelector(".dark--js");

switcher.addEventListener('click', () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#FAFAFF");
    document.documentElement.style.setProperty("--text-color", "#000000");
    isDark = false;
    console.log(isDark);
  } else {
    document.documentElement.style.setProperty("--background-color", "#000000");
    document.documentElement.style.setProperty("--text-color", "#FAFAFF");
    isDark = true;
    console.log(isDark);
  }

})