const globPos1 =
  'M0 169.5C47.5 125.667 134.918 63.2 129.709 254C129.709 297 104.168 326.5 110.178 378C116.187 429.5 165.767 410 173.279 403.5C180.792 397 183.273 382.462 182.795 358C182.08 321.452 168.533 311.172 167.771 242C167.096 180.797 164.933 227.833 167.771 176.5C177.678 128.647 235.968 38.329 310 152.5V0H0V170Z';

const globPos2 =
  'M0 169.5C47.5 114.112 143.708 84.5618 138.5 338C138.5 395.117 120.827 533.5 127.163 558.5C133.5 583.5 130.663 567 144.163 569.5C157.663 572 165.494 580.056 165.015 547.563C164.301 499.017 156.263 411.384 155.5 319.503C154.825 238.207 152.662 300.686 155.5 232.5C165.408 168.937 227.5 78 310 152.5V0H0V170Z';

const globPos3 =
  'M0 169.5C47.5 125.667 134.918 63.2 129.709 254C129.709 297 104.168 326.5 110.178 378C116.187 429.5 165.767 410 173.279 403.5C180.792 397 183.273 382.462 182.795 358C182.08 321.452 168.533 311.172 167.771 242C167.096 180.797 164.933 227.833 167.771 176.5C177.678 128.647 235.968 38.329 310 152.5V0H0V170Z';

var blueGlobAnime = anime({
  targets: '.blue-glob',
  d: [
    {
      value: globPos1,
      delay: 300,
      duration: 100,
    },
    {
      value: globPos2,
      duration: 100,
    },
    {
      value: globPos3,
      duration: 800,
    },
  ],
  easing: 'linear',
  duration: 1000,
  loop: true,
});

var blueDropAnime = anime({
  targets: '.blue-drop',
  translateY: 700,
  scale: 1,
  easing: 'linear',
  delay: 300,
  duration: 1000,
  loop: true,
});

var pinkGlobAnime = anime({
  targets: '.pink-glob',
  d: [
    {
      value: globPos1,
      delay: 500,
      duration: 100,
    },
    {
      value: globPos2,
      duration: 100,
    },
    {
      value: globPos3,
      duration: 800,
    },
  ],
  easing: 'linear',
  duration: 1000,
  loop: true,
});

var pinkDropAnime = anime({
  targets: '.pink-drop',
  translateY: 1500,
  scale: 1,
  easing: 'linear',
  delay: 500,
  duration: 1000,
  loop: true,
});

var yellowGlobAnime = anime({
    targets: '.yellow-glob',
    d: [
      {
        value: globPos1,
        delay: 1000,
        duration: 100,
      },
      {
        value: globPos2,
        duration: 100,
      },
      {
        value: globPos3,
        duration: 800,
      },
    ],
    easing: 'linear',
    duration: 1000,
    loop: true,
  });


var yellowDropAnime = anime({
    targets: '.yellow-drop',
    translateY: 1500,
    scale: 1,
    easing: 'linear',
    delay: 1000,
    duration: 1000,
    loop: true,
  });
