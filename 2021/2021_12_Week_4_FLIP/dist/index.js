const TILES = 36;

let tileArea = document.querySelector(".tile-area");
console.log(tileArea);

let playArea = document.querySelector(".play-area");
console.log(playArea);

let cardTypes = [
  "champagne", // 0
  "confetti", // 1
  "dance", // 2
  "fireworks", // 3
];

let playWindows = [
  document.querySelector("#play-win-1"),
  document.querySelector("#play-win-2"),
  document.querySelector("#play-win-3"),
  document.querySelector("#play-win-4"),
];

let gameState = 0;
let rand = [];
let animationFinished = 0;

document.querySelector(".butt").addEventListener("click", () => {
  if (gameState == 0) {
    rand = generateRandomNumbers(4, 0, TILES);
    gameState = 1;
  } else {
    gameState = 0;
  }

  for (let i = 0; i < 4; i++) {
    const tile = document.querySelector(`#tile-${rand[i]}`);
    const tileWrapper = document.querySelector(`.tile-${rand[i]}-wrapper`);
    const state = Flip.getState(`#tile-${rand[i]}`);

    const parent = tile.parentElement === tileWrapper ? playWindows[i] : tileWrapper;
    parent.appendChild(tile);

    Flip.from(state, {
      duration: 1,
      scale: true,
      stagger: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        if (i == 3) {
          if (gameState == 1) {
            checkWin();
          }
          if (gameState == 0) {
            removeWinClass();
          }
        }
      },
    });
  }
});

let removeWinClass = () => {
  let cardsInTileArea = Array.from(tileArea.querySelectorAll("[class^=tile]"));
  cardsInTileArea.forEach((card) => {
    card.classList.remove("win");
  });
};

let checkWin = () => {
  let selectedCards = Array.from(playArea.querySelectorAll("[class^=tile]"));

  if (selectedCards) {
    let cardTypes = [];
    selectedCards.forEach((card) => {
      cardTypes.push(card.getAttribute("data-type"));
    });

    if (
      !!cardTypes.reduce(function (a, b) {
        return a === b ? a : NaN;
      })
    ) {
      selectedCards.forEach((card) => {
        card.classList.add("win");
      });
    } else {
      console.log("differnt");
    }
  }
};

window.onload = () => {
  // generate tiles and tiles wrappers
  for (let i = 0; i < TILES; i++) {
    let tile = document.createElement("div");
    let tileWrapper = document.createElement("div");
    tileWrapper.classList.add(`tile-${i}-wrapper`);
    tileWrapper.classList.add(`tile-wrapper`);

    tile.classList.add("tile");
    tile.setAttribute("id", `tile-${i}`);

    tileWrapper.appendChild(tile);
    tileArea.appendChild(tileWrapper);

    let rand = generateRandomNumbers(1, 0, 4);
    tile.innerHTML = `<img src="img/${cardTypes[rand]}.png"></img>`;
    tile.dataset.type = rand;
  }
};

let generateRandomNumbers = (amount, lower_bound, upper_bound) => {
  unique_random_numbers = [];

  while (unique_random_numbers.length < amount) {
    var random_number = Math.floor(Math.random() * (upper_bound - lower_bound) + lower_bound);
    if (unique_random_numbers.indexOf(random_number) == -1) {
      unique_random_numbers.push(random_number);
    }
  }

  return unique_random_numbers;
};
