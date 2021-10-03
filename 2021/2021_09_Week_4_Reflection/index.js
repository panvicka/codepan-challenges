var COLUMNS = 3;
var ROWS = 3;

let positionLeft = 0;
let placedElement = 0;

function generateElementWithLetter(letter, container) {
  var newDiv = document.createElement('div');
  newDiv.classList.add(`${letter}`);
  container.appendChild(newDiv);

  newDiv.style.left = `${placedElement*170}px`;
  placedElement++;
  generateElement(newDiv, letter);
}

window.addEventListener('load', function () {
  var container = document.querySelector('.container');

  generateElementWithLetter('R', container);
  generateElementWithLetter('E', container);
  generateElementWithLetter('F', container);
  generateElementWithLetter('L', container);
  generateElementWithLetter('E', container);
  generateElementWithLetter('C', container);
  generateElementWithLetter('T', container);

});

function howManyProcent(value, maximum) {
  return (value * 100) / maximum;
}

function scaleValue(value, minValue, maxValue, minResult, maxResult) {
  return (
    (maxResult - minResult) * ((value - minValue) / (maxValue - minValue)) +
    minResult
  );
}

function mouseLeave(e) {
  let element = e.target.dataset.placedElement;
  const allConnectedTiles = document.querySelectorAll(`[data-placed-element='${element}']`);
  allConnectedTiles.forEach((tile) => {
    if (
      tile.classList.contains('v-middle') &&
      tile.classList.contains('h-middle')
    ) {
      tile.style.opacity = 1;
    } else {
      tile.style.opacity = 0;
    }
  });
}

function mouseOver(e) {
  var x = e.clientX;
  var y = e.clientY;
  var rect = e.target.getBoundingClientRect();

  const elementWidth = rect.right - rect.left;
  const elementHeight = rect.bottom - rect.top;
  // how far am i from the left side
  let pxFromLeft = x - rect.left;
  // procent of left
  let procentageOfLeft = 100 - howManyProcent(pxFromLeft, elementWidth);
  let procentageOfRight = 100 - procentageOfLeft;

  // how far am i from the top
  let pxFromTop = elementHeight - (rect.bottom - y);
  // procent of left
  let procentageOfTop = 100 - howManyProcent(pxFromTop, elementHeight);
  let procentageOfBottom = 100 - procentageOfTop;

  const opacityLeft = retOpacity(procentageOfLeft);
  const opacityRight = retOpacity(procentageOfRight);
  const opacityTop = retOpacity(procentageOfTop);
  const opacityBottom = retOpacity(procentageOfBottom);

let element = e.target.dataset.placedElement;
    console.log(element);
  const allConnectedTiles = document.querySelectorAll(`[data-placed-element='${element}']`);

  allConnectedTiles.forEach((tile) => {
    let elementOpacity = 0;
    if (tile.classList.contains('v-left')) {
      elementOpacity += opacityLeft;
    }
    if (tile.classList.contains('h-top')) {
      elementOpacity += opacityTop;
    }
    if (tile.classList.contains('h-bottom')) {
      elementOpacity += opacityBottom;
    }
    if (tile.classList.contains('v-right')) {
      elementOpacity += opacityRight;
    }

    addOpacityIfNotCenterElement(tile, elementOpacity / 100);
  });
}

function addOpacityIfNotCenterElement(e, opacity) {
  if (e.classList.contains('v-middle') && e.classList.contains('h-middle')) {
    e.style.opacity = 1;
  } else {
    e.style.opacity = opacity;
  }
}

function retOpacity(value) {
  let opa = 0;
  if (value > 50) {
    opa = scaleValue(value, 50, 100, 1, 100);
  } else {
    opa = 0;
  }

  return opa;
}

const ELEMENT_SPACING = 50;
const BASE_SPACING = 600;
let leftPosition = 0;

function generateElement(div, text) {
  div.classList.add('letter');

  for (var i = 0; i <= COLUMNS - 1; i++) {
    var newColDiv = document.createElement('div');
    newColDiv.classList.add('column');
    for (var j = 0; j <= ROWS - 1; j++) {
      var newRowDiv = document.createElement('div');
      if (i == 0) {
        newRowDiv.classList.add('v-left');
        if (j == 1) {
          newRowDiv.style.transform += 'scaleX(-1)';
        }
      } else if (i == 1) {
        newRowDiv.classList.add('v-middle');
      } else if (i == 2) {
        newRowDiv.classList.add('v-right');
        if (j == 1) {
          newRowDiv.style.transform += 'scaleX(-1)';
        }
      }

      if (j == 0) {
        newRowDiv.classList.add('h-top');
        newRowDiv.style.transform += 'scaleY(-1)';
      } else if (j == 1) {
        newRowDiv.classList.add('h-middle');
      } else if (j == 2) {
        newRowDiv.classList.add('h-bottom');
        newRowDiv.style.transform += 'scaleY(-1)';
      }
      newRowDiv.textContent = `${text}`;
      newRowDiv.dataset.placedElement = placedElement;
      newRowDiv.classList.add(`text-${placedElement}`);
      newRowDiv.classList.add('square');
      addOpacityIfNotCenterElement(newRowDiv, 0);

      if (
        newRowDiv.classList.contains('v-middle') &&
        newRowDiv.classList.contains('h-middle')
      ) {
       
        newRowDiv.style.zIndex = 20;
      } else {
        newRowDiv.classList.add('reflection');
      }

 
      newColDiv.appendChild(newRowDiv);
    }

    div.appendChild(newColDiv);
  }

  var middleTile = div.querySelector('.h-middle.v-middle');
  middleTile.addEventListener('mousemove', mouseOver);
  middleTile.addEventListener('mouseleave', mouseLeave);

  var rect = middleTile.getBoundingClientRect();
  console.log(
    `top ${rect.top}, right ${rect.right}, bottom ${rect.bottom}, left ${rect.left}`
  );
  console.log(middleTile);
}

