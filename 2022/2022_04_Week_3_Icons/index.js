gsap.registerPlugin(DrawSVGPlugin);

 
gsap.to("#path", { duration: 0, drawSVG: "0%" });

const paths = [];

const points = [
  [3, 110],
  [74, 110],
  [3, 41],
  [74, 41],
  [37, 13]
];

const drawOptions = [
  [0, 1, 3, 4, 2, 3, 0, 2, 1],
  [0, 1, 3, 4, 2, 0, 3, 2, 1],
  [0, 1, 3, 2, 4, 3, 0, 2, 1],
  [0, 1, 3, 2, 0, 3, 4, 2, 1],

  [0, 1, 2, 4, 3, 2, 0, 3, 1],
  [0, 1, 2, 3, 4, 2, 0, 3, 1],
  [0, 1, 2, 0, 3, 4, 2, 3, 1],
  [0, 1, 2, 0, 3, 2, 4, 3, 1],

  [0, 3, 4, 2, 3, 1, 2, 0, 1],
  [0, 3, 4, 2, 3, 1, 0, 2, 1],
  [0, 3, 2, 4, 3, 1, 0, 2, 1],
  [0, 3, 2, 1, 3, 4, 2, 0, 1],

  [0, 3, 2, 0, 1, 3, 4, 2, 1],
  [0, 3, 2, 4, 3, 1, 2, 0, 1],
  [0, 3, 1, 0, 2, 4, 3, 2, 1],
  [0, 3, 1, 0, 2, 3, 4, 2, 1],

  [0, 2, 4, 3, 2, 1, 0, 3, 1],
  [0, 2, 4, 3, 0, 1, 2, 3, 1],
  [0, 2, 3, 4, 2, 1, 3, 0, 1],
  [0, 2, 1, 3, 4, 2, 3, 0, 1],

  [0, 2, 1, 0, 3, 2, 4, 3, 1],
  [0, 2, 4, 3, 1, 0, 3, 2, 1],
  [0, 2, 3, 1, 2, 4, 3, 0, 1],
  [0, 2, 3, 0, 1, 3, 4, 2, 1]
];

const generatePaths = () => {
  drawOptions.map((option, index) => {
    let newPath = "";
    for (let i = 0; i < option.length; i++) {
      newPath = `${newPath} ${i === 0 ? "M" : "L"} ${points[option[i]][0]} ${
        points[option[i]][1]
      }`;
    }
    paths.push(newPath);
  });
};

generatePaths();



gsap.set("#path", { visibility: "visible" });

const icon = document.querySelector("svg");
const path = document.querySelector("#path");


icon.addEventListener("mouseenter", function animateIn() {
   gsap.killTweensOf(animateIn);
    
  const rndInt = Math.floor(Math.random() * paths.length);
  path.setAttribute("d", paths[rndInt]);
  gsap.to("#path", { duration: 1, drawSVG: "100%", ease: "power4.easeOut" });
});

icon.addEventListener("mouseleave", function animateOut () {
  gsap.killTweensOf(animateOut);
  gsap.to("#path", { duration: 0.5, drawSVG: "0%", ease: "power1.inOut" });
});
