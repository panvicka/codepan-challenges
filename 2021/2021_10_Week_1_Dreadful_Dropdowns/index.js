const menuItems = document.querySelectorAll(
  '.list-item-2, .list-item-3, .list-item-4, .list-item-5'
);
const menuTitle = document.querySelector('.list-item-1');
const bone = document.querySelector('.fa-bone');

var T1 = {
  animation: null,
  selector: '.list-item-1',
};
var T2 = {
  animation: null,
  selector: '.list-item-2',
};
var T3 = {
  animation: null,
  selector: '.list-item-3',
};
var T4 = {
  animation: null,
  selector: '.list-item-4',
};
var T5 = {
  animation: null,
  selector: '.list-item-5',
};

var intervalTimerAnchorRotate = undefined;
var clickedCounter = 0;
let menuVisible = 0;

function shakeAnimate(item, angle, xBase, yBase) {
  item.animation = TweenLite.to(`${item.selector}`, 0.15, {
    duration: 1,
    x: xBase + R(-1, 1),
    y: yBase + R(-1, 1),
    rotation: function () {
      return R(-0.8, 0.8) + angle;
    },
    ease: Sine.easeInOut,
    onComplete: function () {
      return shakeAnimate(item, angle, xBase, yBase);
    },
  });
}

var swing = () => {
  swinging.fromTo(
    '.falling-items',
    { y: '-20px', rotation: -65 },
    {
      y: '-20px',
      rotation: -35,
      repeat: -1,
      yoyo: true,
      ease: Power2.easeInOut,
    },
    { y: '-20px', rotation: -65 }
  );
};

var swinging = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

var fallingOver = new TimelineLite({ paused: true, onComplete: swing });
fallingOver.to('.falling-items', 1, { y: '-20px', rotation: -65 });

var fallingAway = new TimelineLite({ paused: true, duration: 0 });
fallingAway.to('.falling-items', 6, { y: '6000px' });

shakeAnimate(T1, 0, 0, 0);
shakeAnimate(T2, 0, 0, 0);
shakeAnimate(T3, 0, 0, 0);
shakeAnimate(T4, 0, 0, 0);
shakeAnimate(T5, 0, 0, 0);

let handleMenuToggle = () => {
  menuVisible = !menuVisible;
  if (menuVisible) {
    bone.style.transform = 'rotate(90deg)';
    document.documentElement.style.setProperty('--opacityFirstAnchor', 1);
    menuItems.forEach((i) => {
      i.addEventListener('click', handleClick);
    });
    menuItems.forEach((i) => {
      i.style.opacity = 1;
    });
  } else {
    bone.style.transform = 'rotate(0deg)';
    document.documentElement.style.setProperty('--opacityFirstAnchor', 0);

    menuItems.forEach((i) => {
      i.removeEventListener('click', handleClick);
    });
    menuItems.forEach((i) => {
      i.style.opacity = 0;
    });
  }
};

function handleClick() {
  if (clickedCounter == 0) {
    clickedCounter++;
    T3.animation.kill();
    T4.animation.kill();
    T5.animation.kill();
    fallingOver.play();
    intervalTimerAnchorRotate = setInterval(myTimer, 5);
    shakeAnimate(T3, -12, -5, -10);
    shakeAnimate(T4, -12, -33, -18);
    shakeAnimate(T5, -12, -67, -19);
  } else if (clickedCounter > 0) {
    swinging.kill();
    fallingOver.kill();
    fallingAway.play();
    T3.animation.kill();
    T4.animation.kill();
    menuTitle.removeEventListener('click', handleMenuToggle);
  }
}

let anchorAngle = 0;
function myTimer() {
  anchorAngle++;
  document.documentElement.style.setProperty('--rotation', anchorAngle + 'deg');
  if (anchorAngle >= 60) {
    clearInterval(intervalTimerAnchorRotate);
  }
}

function R(max, min) {
  return Math.random() * (max - min) + min;
}

menuTitle.addEventListener('click', handleMenuToggle);
