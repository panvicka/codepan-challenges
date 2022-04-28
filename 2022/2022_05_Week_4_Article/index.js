window.addEventListener("resize", () => {
  setPosition();
});

window.addEventListener("load", () => {
  document.getElementById("hideAll").style.display = "none";
  setPosition();
});

const content = document.querySelector(".content");
const sidePanel = document.querySelector(".side");
const image = document.querySelector("img");
const images = document.querySelectorAll("img");
const like = document.getElementById("like");
const bookmark = document.getElementById("bookmark");

const NUMBER_OF_IMAGES = 5;
let scrollHeight = 0;

like.addEventListener("click", () => {
  like.classList.toggle("like-active");
});

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark-active");
});

document.addEventListener("scroll", (e) => {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  const boundForScrolling = content.scrollHeight / NUMBER_OF_IMAGES + 1;
  const imageIndex = Math.floor(scrollTop / boundForScrolling) + 1;

  const imageToShow = document.getElementById(`img-${imageIndex}`);
  imageToShow.style.opacity = 1;

  for (let i = 1; i <= NUMBER_OF_IMAGES; i++) {
    if (i != imageIndex) {
      const imageToHide = document.getElementById(`img-${i}`);
      imageToHide.style.opacity = 0;
    }
  }
});

const setPosition = () => {
  const sidePanelBoundaries = sidePanel.getBoundingClientRect();
  content.style.marginLeft = `${sidePanelBoundaries.width}px +10em`;
  scrollHeight = content.scrollHeight;
  const imageBoundaries = image.getBoundingClientRect();
  sidePanel.style.width = imageBoundaries.width + "px";

  images.forEach((image) => {
    image.style.left = sidePanelBoundaries.x + "px";
    image.style.width = imageBoundaries.width + "px";
  });
};
