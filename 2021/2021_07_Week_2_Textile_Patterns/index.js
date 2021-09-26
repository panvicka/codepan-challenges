var sizeSlider = document.getElementById('size');
var tempContainer = document.querySelector('.temp-1-container');
var fontSizeOutput = document.querySelector('.current-font-size');

fontSizeOutput.textContent = `${sizeSlider.value}px`;

sizeSlider.oninput = function () {
  tempContainer.style.fontSize = `${this.value}px`;
  fontSizeOutput.textContent = `${this.value}px`;
};
