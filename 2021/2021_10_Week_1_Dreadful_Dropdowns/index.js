console.log('hello');
// gsap.from('.list-item-1', { duration: 1, y: '-100%', ease: 'bounce' });

// falling-items

// var T5;
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

function shakeAnimate(item, angle) {
  item.animation = TweenLite.to(`${item.selector}`, 0.15, {
    duration: 1,
    x: R(-1, 1),
    y: R(-1, 1),
    rotation: function () {
       return R(-0.8,0.8)+angle;
    },
    ease: Sine.easeInOut,
    onComplete: function () {
      return shakeAnimate(item, angle);
    },
  });
}

var tl = new TimelineLite({ paused: true });
tl.to('.falling-items', 1, { y: '-20px', rotation: -50 });

shakeAnimate(T1, 0);
shakeAnimate(T2, 0);
shakeAnimate(T3, 0);
shakeAnimate(T4, 0);
shakeAnimate(T5, 0);

var myVar = undefined;

document.addEventListener('click', (event) => {
  //   T1.animation.kill();
  //   T2.animation.kill();
  T3.animation.kill();
  //   T4.animation.kill();
  //   T5.animation.kill();
  tl.play();
  myVar = setInterval(myTimer, 10);
  shakeAnimate(T3, -12);
  shakeAnimate(T4, -11);
  shakeAnimate(T5, -10);
});

let i = 0;
function myTimer() {
  i++;
  document.documentElement.style.setProperty('--rotation', i + 'deg');
  if (i >= 50) {
    clearInterval(myVar);
  }
}

function R(max, min) {
  return Math.random() * (max - min) + min;
}
