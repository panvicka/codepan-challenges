var containerDiv = document.querySelector('.container');
window.addEventListener('load', function () {
  return generateDivs(containerDiv);
});

var ROWS = 3;
var TILES_IN_ROWS = 2;

let numClicks = 0;
function handleSingleClick(e) {
  var clickedRow = e.target.dataset.row;
  console.log(e.target);
  var clickedCol = e.target.dataset.column;
  var allRowsDivs = document.querySelectorAll(
    '[data-row="' + clickedRow + '"]'
  );
  var allColsDivs = document.querySelectorAll(
    '[data-column="' + clickedCol + '"]'
  );

  allRowsDivs.forEach(function (div, i) {
    if (div != e.target) {
      if (!div.classList.contains('broken')) {
        div.classList.toggle('light-on');
      }
    }
  });
  allColsDivs.forEach(function (div, i) {
    if (div != e.target) {
      if (!div.classList.contains('broken')) {
        div.classList.toggle('light-on');
      }
    }
  });

  if (!e.target.classList.contains('broken')) {
    e.target.classList.toggle('light-on');
  }
}

function handleDoubleClick(e) {
  if (
    !e.target.classList.contains('light-on') &&
    !e.target.classList.contains('broken')
  ) {
    e.target.classList.add('broken');
    console.log('doubleclick');
    var temp = document.getElementsByTagName('template')[0];
    var clon = temp.content.cloneNode(true);
    e.target.appendChild(clon);
    const rndInt = Math.floor(Math.random() * 360) + 1;

    e.target.style.cssText += `transform: rotate(${rndInt}deg)`;
  }
}

function checkForWin() {
  var winWithoutCheating = 1;
  var winWithCheacting = 1;
  const allLights = document.querySelectorAll('.light');
  allLights.forEach((item) => {
    if (item.classList.contains('light-on')) {
      winWithoutCheating = 0;
      winWithCheacting = 0;
    }

    if (!item.classList.contains('light-on')) {
      if (item.classList.contains('broken')) {
        winWithoutCheating = 0;
      }
    }
  });

  const endGame = document.querySelector('.end-game');

  if (winWithCheacting == 0 && winWithoutCheating == 0) {
    endGame.classList.add('hidden');
  }

  if (winWithCheacting == 1) {
    endGame.textContent = 'Turns out you can!';
    endGame.classList.remove('hidden');
  }

  if (winWithoutCheating == 1) {
    endGame.textContent = 'Probably not, but still good!';
    endGame.classList.remove('hidden');
  }
}

function handleClick(e) {
  numClicks++;
  if (numClicks === 1) {
    singleClickTimer = setTimeout(() => {
      numClicks = 0;
      handleSingleClick(e);
    }, 400);
  } else if (numClicks === 2) {
    clearTimeout(singleClickTimer);
    numClicks = 0;
    handleDoubleClick(e);
  }
}

function generateDivs(div) {
  for (var i = 0; i <= ROWS; i++) {
    var newColDiv = document.createElement('div');
    newColDiv.classList.add('column');
    for (var j = 0; j <= TILES_IN_ROWS; j++) {
      var newRowDiv = document.createElement('div');
      newRowDiv.classList.add('light');
      newRowDiv.setAttribute('data-column', '' + i);
      newRowDiv.setAttribute('data-row', '' + j);
      newRowDiv.addEventListener('click', handleClick);
       var randomBoolean = Math.random() <= 0.5;
      var randomBoolean = Math.random() <= 0.5;
      randomBoolean
        ? newRowDiv.classList.add('light-off')
        : newRowDiv.classList.add('light-on');
      newColDiv.appendChild(newRowDiv);
    }
    div.appendChild(newColDiv);
  }

  var intervalId = window.setInterval(function () {
    checkForWin();
  }, 100);
}
