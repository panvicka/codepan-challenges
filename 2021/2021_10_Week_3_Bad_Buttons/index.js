var ghostTemplate = document.querySelector('#ghost');
var container = document.querySelector('.container');
var text = document.querySelector('h1');

const createGhostButton = () => {
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 3; i++) {
      var ghostFragment = document.importNode(ghostTemplate.content, true);
      var ghostItem = ghostFragment.querySelector('svg');
      let transformStyle = `translateX(${88 * i}px) translateY(${90 * j}px)`;
      if (j == 0 && i % 2) {
        transformStyle = transformStyle + `rotate(180deg) rotateY(180deg)`;
      } else if (j == 1) {
        if (!(i % 2)) {
          transformStyle = transformStyle + `rotateY(180deg) `;
        } else {
          transformStyle = transformStyle + `rotate(180deg)`;
        }
      }
      ghostItem.style.transform = transformStyle;
      ghostItem.id = `ghost-${j}-${i}`;

      const eyeballs = ghostItem.querySelectorAll('.eyeball');

      var blink = new TimelineLite({
        paused: false,
        duration: getRandomArbitrary(1, 6),
        repeat: -1,
        yoyo: true,
      });

      blink.fromTo(
        [eyeballs[0], eyeballs[1]],
        0.2,
        { scale: 1 },
        { scale: 0.05 }
      );
      blink.play();
      container.appendChild(ghostItem);
    }
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const animationArray = [];
let alreadyClicked = 0;
const buttonClicked = () => {
  if (alreadyClicked == 0) {
    container.style.backgroundColor = 'transparent';
    text.style.display = 'none';

    const ghosts = document.querySelectorAll('svg');
    alreadyClicked = 1;

    var move = new TimelineLite({
      paused: false,
      duration: 10,
      repeat: 1,
    });

    ghosts.forEach((ghost, index) => {
      animationArray[index] = gsap.to(ghost, {
        rotation: getRandomInt(0, 360),
        x: getRandomInt(-500, 500),
        y: getRandomInt(-500, 500),
        duration: 1,
      });
    });
  }
};

const buttonleft = () => {
  let backToBlackTimeout = 300;
  if (alreadyClicked == 1) {
    container.style.backgroundColor = 'transparent';
    text.style.display = 'none';

    alreadyClicked = 0;
    const ghosts = document.querySelectorAll('svg');

    ghosts.forEach((ghost, index) => {
      animationArray[index].reverse();
    });
    backToBlackTimeout = 1200;
  }

  setTimeout(function () {
    container.style.backgroundColor = 'black';
    text.style.display = 'inline';
  }, backToBlackTimeout);
};

const buttonHovered = () => {
  container.style.backgroundColor = 'transparent';
  text.style.display = 'none';
};

window.addEventListener('load', createGhostButton);

container.addEventListener('click', buttonClicked);

container.addEventListener('mouseleave', buttonleft);

container.addEventListener('mouseenter', buttonHovered);
