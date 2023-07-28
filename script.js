const introWrap = document.getElementById("introWrap");
const createButton = document.getElementById("createButton");
// dog
const dogRadio = document.getElementById("dogRadio");
const dogWrap = document.getElementById("dogWrap");
const dogName = document.getElementById("dogName");
const dogHealth = document.getElementById("dogHealthBar");
const dogHunger = document.getElementById("dogHungerBar");
const dogThirst = document.getElementById("dogThirstBar");
const dogHappy = document.getElementById("dogHappyBar");
const dogFeed = document.getElementById("dogFeed");
const dogHydrate = document.getElementById("dogHydrate");
const dogPlay = document.getElementById("dogPlay");
const healthProgress = document.getElementById("dogHealthPercent");
const hungerProgress = document.getElementById("dogHungerPercent");
const thirstProgress = document.getElementById("dogThirstPercent");
const happyProgress = document.getElementById("dogHappyPercent");
const dogPicture = document.getElementById("dogPicture");
const dogHungerSprite = document.getElementById("dogHungerSprite");
const dogHealthSprite = document.getElementById("dogHealthSprite");
const dogThirstSprite = document.getElementById("dogThirstSprite");
const dogPlaySprite = document.getElementById("dogPlaySprite");

// Cat
const catRadio = document.getElementById("catRadio");
const catName = document.getElementById("catName");
const catHealth = document.getElementById("catHealthBar");
const catHunger = document.getElementById("catHungerBar");
const catThirst = document.getElementById("catThirstBar");
const catContent = document.getElementById("catContentBar");
const catFeed = document.getElementById("catFeed");
const catHydrate = document.getElementById("catHydrate");
const catPlay = document.getElementById("catPlay");
const catWrap = document.getElementById("catWrap");
const catHealthProgress = document.getElementById("catHealthPercent");
const catHungerProgress = document.getElementById("catHungerPercent");
const catThirstProgress = document.getElementById("catThirstPercent");
const catContentProgress = document.getElementById("catContentPercent");
const catPicture = document.getElementById("catPicture");
const catHungerSprite = document.getElementById("catHungerSprite");
const catHealthSprite = document.getElementById("catHealthSprite");
const catThirstSprite = document.getElementById("catThirstSprite");
const catContentSprite = document.getElementById("catContentSprite");

// Hamster
const hamsterRadio = document.getElementById("hamsterRadio");
const hamsterName = document.getElementById("hamsterName");
const hamsterHealth = document.getElementById("hamsterHealthBar");
const hamsterHunger = document.getElementById("hamsterHungerBar");
const hamsterThirst = document.getElementById("hamsterThirstBar");
const hamsterExercise = document.getElementById("hamsterExerciseBar");
const hamsterFeed = document.getElementById("hamsterFeed");
const hamsterHydrate = document.getElementById("hamsterHydrate");
const hamsterWheel = document.getElementById("hamsterWheel");
const hamsterWrap = document.getElementById("hamsterWrap");
const hamsterHealthProgress = document.getElementById("hamsterHealthPercent");
const hamsterHungerProgress = document.getElementById("hamsterHungerPercent");
const hamsterThirstProgress = document.getElementById("hamsterThirstPercent");
const hamsterExerciseProgress = document.getElementById(
  "hamsterExercisePercent"
);
const hamsterPicture = document.getElementById("hamsterPicture");
const hamsterHungerSprite = document.getElementById("hamsterHungerSprite");
const hamsterHealthSprite = document.getElementById("hamsterHealthSprite");
const hamsterThirstSprite = document.getElementById("hamsterThirstSprite");
const hamsterWheelSprite = document.getElementById("hamsterWheelSprite");

const nameInput = document.getElementById("nameInput");
const deathScene = document.getElementById("deathScene");
const endGameWrap = document.getElementById("endGameWrap");
const restartButton = document.getElementById("restartButton");
const errorEmpty = document.getElementById("errorEmpty");
const totalTimePlayed = document.getElementById("totalTimePlayed");

const deadSong = new Audio("./sounds/acdc.mp3");
const dogSound = new Audio("./sounds/animals_dogs_x2_barking_small_001.mp3");
const catSound = new Audio("./sounds/zapsplat_cartoon_cat_meow_19819.mp3");
const hamsterSound = new Audio("./sounds/cartoon_mouse_laughter_1.mp3");
const eatingSound = new Audio("./sounds/comedy_eating_munch.mp3");
const drinkingSound = new Audio(
  "./sounds/zapsplat_cartoon_big_lick_slurp_003_77622.mp3"
);
const fetchSound = new Audio("./sounds/foley_cable_whoosh_air_001.mp3");
const wheelSound = new Audio(
  "./sounds/zapsplat_foley_plastic_hamster_wheel_spin_by_hand_001_49624.mp3"
);

let secondsPassed = 0;
let timeOutTotal;

const timer = () => {
  secondsPassed++;
  timeOutTotal = setTimeout(timer, 1000);
};

const timeDivider = (secondsPassed) => {
  minutesPassed = Math.floor(secondsPassed / 60);
  secondsPassed = secondsPassed % 60;
  return `Your pet survived for ${minutesPassed} minutes and ${secondsPassed} seconds`;
};

class Animal {
  constructor(name) {
    this.name = name;
    this.hunger = 100;
    this.health = 100;
    this.thirst = 100;
  }

  feed() {
    this.hunger = Math.min(this.hunger + 10, 100);
    this.thirst = Math.min(this.thirst - 5, 100);
  }

  hydrate() {
    this.thirst = Math.min(this.thirst + 10, 100);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.happy = 100;
  }

  playFetch() {
    this.happy = Math.min(this.happy + 10, 100);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.content = 100;
  }

  playWool() {
    this.content = Math.min(this.content + 10, 100);
  }
}

class Hamster extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.exercise = 100;
  }

  playWheel() {
    this.exercise = Math.min(this.exercise + 10, 100);
  }
}

const endGame = () => {
  endGameWrap.classList.remove("hidden");
  catFeed.disabled = true;
  catHydrate.disabled = true;
  catPlay.disabled = true;
  dogFeed.disabled = true;
  dogHydrate.disabled = true;
  dogPlay.disabled = true;
  hamsterFeed.disabled = true;
  hamsterHydrate.disabled = true;
  hamsterWheel.disabled = true;
  deadSong.play();
  totalTimePlayed.textContent = `${timeDivider(secondsPassed)}`;
  clearTimeout(timeOutTotal);
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
};

const createCat = (name) => {
  catWrap.classList.remove("hidden");
  const playerCat = new Cat(name);
  catName.textContent = `${name} The cat`;
  const timeoutStats = () => {
    if (
      playerCat.hunger == 0 ||
      playerCat.thirst == 0 ||
      playerCat.content == 0
    ) {
      playerCat.health = Math.max(playerCat.health - 5, 0);
      catHealth.style.width = `${playerCat.health}%`;
      catHealthProgress.textContent = `${playerCat.health}%`;
      if (playerCat.health < 50) {
        catPicture.src = "./images/sad-cat.jpg";
        catHealthSprite.classList.remove("hidden");
      } else {
        catPicture.src = "./images/happy-cat.jpg";
        catHealthSprite.classList.add("hidden");
      }
      if (playerCat.health == 0) {
        deathScene.textContent = `Your beloved cat ${playerCat.name}, has died.`;
        endGame();
      }
    }
    playerCat.hunger = Math.max(playerCat.hunger - 5, 0);
    catHunger.style.width = `${playerCat.hunger}%`;
    if (playerCat.hunger < 50) {
      catHungerSprite.classList.remove("hidden");
    } else {
      catHungerSprite.classList.add("hidden");
    }
    catHungerProgress.textContent = `${playerCat.hunger}%`;
    playerCat.thirst = Math.max(playerCat.thirst - 3, 0);
    if (playerCat.thirst < 50) {
      catThirstSprite.classList.remove("hidden");
    } else {
      catThirstSprite.classList.add("hidden");
    }
    catThirst.style.width = `${playerCat.thirst}%`;
    catThirstProgress.textContent = `${playerCat.thirst}%`;
    playerCat.content = Math.max(playerCat.content - 2, 0);
    if (playerCat.content < 50) {
      catContentSprite.classList.remove("hidden");
    } else {
      catContentSprite.classList.add("hidden");
    }
    catContent.style.width = `${playerCat.content}%`;
    catContentProgress.textContent = `${playerCat.content}%`;
    setTimeout(timeoutStats, 500);
  };
  setTimeout(timeoutStats, 500);
  catFeed.addEventListener("click", () => {
    playerCat.feed();
    eatingSound.play();
  });
  catHydrate.addEventListener("click", () => {
    playerCat.hydrate();
    drinkingSound.play();
  });
  catPlay.addEventListener("click", () => {
    playerCat.playWool();
  });
};

const createDog = (name) => {
  dogWrap.classList.remove("hidden");
  const playerDog = new Dog(name);
  dogName.textContent = `${name} The dog`;
  const timeoutStats = () => {
    if (
      playerDog.hunger == 0 ||
      playerDog.thirst == 0 ||
      playerDog.happy == 0
    ) {
      playerDog.health = Math.max(playerDog.health - 5, 0);
      dogHealth.style.width = `${playerDog.health}%`;
      healthProgress.textContent = `${playerDog.health}%`;
      if (playerDog.health < 50) {
        dogPicture.src = "./images/sad-dog.jpg";
        dogHealthSprite.classList.remove("hidden");
      } else {
        dogPicture.src = "./images/happy-dog.png";
        dogHealthSprite.classList.add("hidden");
      }
      if (playerDog.health == 0) {
        deathScene.textContent = `Your beloved dog ${playerDog.name}, has died.`;
        endGame();
      }
    }

    playerDog.hunger = Math.max(playerDog.hunger - 4, 0);
    if (playerDog.hunger < 50) {
      dogHungerSprite.classList.remove("hidden");
    } else {
      dogHungerSprite.classList.add("hidden");
    }
    dogHunger.style.width = `${playerDog.hunger}%`;
    hungerProgress.textContent = `${playerDog.hunger}%`;
    playerDog.thirst = Math.max(playerDog.thirst - 3, 0);
    if (playerDog.thirst < 50) {
      dogThirstSprite.classList.remove("hidden");
    } else {
      dogThirstSprite.classList.add("hidden");
    }
    dogThirst.style.width = `${playerDog.thirst}%`;
    thirstProgress.textContent = `${playerDog.thirst}%`;
    playerDog.happy = Math.max(playerDog.happy - 2, 0);
    if (playerDog.happy < 50) {
      dogPlaySprite.classList.remove("hidden");
    } else {
      dogPlaySprite.classList.add("hidden");
    }
    dogHappy.style.width = `${playerDog.happy}%`;
    happyProgress.textContent = `${playerDog.happy}%`;
    setTimeout(timeoutStats, 500);
  };
  setTimeout(timeoutStats, 500);
  dogFeed.addEventListener("click", () => {
    playerDog.feed();
    eatingSound.play();
  });
  dogHydrate.addEventListener("click", () => {
    playerDog.hydrate();
    drinkingSound.play();
  });
  dogPlay.addEventListener("click", () => {
    playerDog.playFetch();
    fetchSound.play();
  });
};

const createHamster = (name) => {
  hamsterWrap.classList.remove("hidden");
  const playerHamster = new Hamster(name);
  hamsterName.textContent = `${name} The hamster`;
  const timeoutStats = () => {
    if (
      playerHamster.hunger == 0 ||
      playerHamster.thirst == 0 ||
      playerHamster.exercise == 0
    ) {
      playerHamster.health = Math.max(playerHamster.health - 5, 0);
      hamsterHealth.style.width = `${playerHamster.health}%`;
      hamsterHealthProgress.textContent = `${playerHamster.health}%`;
    }
    if (playerHamster.health < 50) {
      hamsterPicture.src = "./images/sad-hamster.jpg";
      hamsterHealthSprite.classList.remove("hidden");
    } else {
      hamsterPicture.src = "./images/happy-hamster.jpg";
      hamsterHealthSprite.classList.add("hidden");
    }
    if (playerHamster.health == 0) {
      deathScene.textContent = `Your beloved hamster ${playerHamster.name}, has died.`;
      endGame();
    }

    playerHamster.hunger = Math.max(playerHamster.hunger - 4, 0);
    if (playerHamster.hunger < 50) {
      hamsterHungerSprite.classList.remove("hidden");
    } else {
      hamsterHungerSprite.classList.add("hidden");
    }
    hamsterHunger.style.width = `${playerHamster.hunger}%`;
    hamsterHungerProgress.textContent = `${playerHamster.hunger}%`;
    playerHamster.thirst = Math.max(playerHamster.thirst - 3, 0);
    if (playerHamster.thirst < 50) {
      hamsterThirstSprite.classList.remove("hidden");
    } else {
      hamsterThirstSprite.classList.add("hidden");
    }
    hamsterThirst.style.width = `${playerHamster.thirst}%`;
    hamsterThirstProgress.textContent = `${playerHamster.thirst}%`;
    playerHamster.exercise = Math.max(playerHamster.exercise - 2, 0);
    if (playerHamster.exercise < 50) {
      hamsterWheelSprite.classList.remove("hidden");
    } else {
      hamsterWheelSprite.classList.add("hidden");
    }
    hamsterExercise.style.width = `${playerHamster.exercise}%`;
    hamsterExerciseProgress.textContent = `${playerHamster.exercise}%`;
    setTimeout(timeoutStats, 500);
  };
  setTimeout(timeoutStats, 500);
  hamsterFeed.addEventListener("click", () => {
    playerHamster.feed();
    eatingSound.play();
  });
  hamsterHydrate.addEventListener("click", () => {
    playerHamster.hydrate();
    drinkingSound.play();
  });
  hamsterWheel.addEventListener("click", () => {
    playerHamster.playWheel();
    wheelSound.play();
  });
};

createButton.addEventListener("click", () => {
  if (
    (catRadio.checked == false &&
      dogRadio.checked == false &&
      hamsterRadio.checked == false) ||
    nameInput.value == ""
  ) {
    errorEmpty.classList.remove("hidden");
  } else {
    introWrap.classList.add("hidden");
    let nameChosen = nameInput.value;
    if (catRadio.checked) {
      createCat(nameChosen);
    } else if (dogRadio.checked) {
      createDog(nameChosen);
    } else if (hamsterRadio.checked) {
      createHamster(nameChosen);
    }
    if (dogRadio.checked == true) {
      dogSound.play();
    } else if (catRadio.checked == true) {
      catSound.play();
    } else hamsterSound.play();
  }
});

createButton.addEventListener("click", () => {
  if (
    (catRadio.checked == false &&
      dogRadio.checked == false &&
      hamsterRadio.checked == false) ||
    nameInput.value == ""
  ) {
  } else {
    timer();
  }
});
