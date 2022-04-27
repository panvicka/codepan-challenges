window.addEventListener("resize", () => {
  setPosition();
});

window.addEventListener("load", () => {
  setPosition();
});

const content = document.querySelector(".content");
const sidePanel = document.querySelector(".side");
const image = document.querySelector("img");
const images = document.querySelectorAll("img");


const NUMBER_OF_IMAGES = 5;

document.addEventListener("scroll", (e) => {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  console.log(scrollTop, image.clientHeight);

  const boundForScrolling = content.scrollHeight / NUMBER_OF_IMAGES+1;
  const imageIndex = Math.floor(scrollTop / boundForScrolling) + 1;

  const imageToShow = document.getElementById(`img-${imageIndex}`);
  console.log(`image to show with index ${imageIndex}`);
  console.log(imageToShow);
  imageToShow.style.opacity = 1;

  for (let i = 1; i <= NUMBER_OF_IMAGES; i++) {
    if (i != imageIndex) {
      const imageToHide = document.getElementById(`img-${i}`);
      imageToHide.style.opacity = 0;
    }
  }
});

let scrollHeight = 0;

const setPosition = () => {
  const sidePanelBoundaries = sidePanel.getBoundingClientRect();

  content.style.marginLeft = `${sidePanelBoundaries.width}px +10em`;
  scrollHeight = content.scrollHeight;
  console.log(scrollHeight);

  const imageBoundaries = image.getBoundingClientRect();

  sidePanel.style.width = imageBoundaries.width + "px";
  // sidePanel.style.marginLeft = imageBoundaries.x + 'px';
//   image.style.left = sidePanelBoundaries.x + "px";

  images.forEach(image => {
      image.style.left = sidePanelBoundaries.x + "px";
  })

  console.log(imageBoundaries);
};
