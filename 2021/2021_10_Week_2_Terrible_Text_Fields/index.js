const namePrefixes = [
  'Malevolent',
  'Mad',
  'Sort Of Frightening',
  'Ghastly',
  'Deadly',
  'Bloodcurdling',
  'Mr. Spooky',
  'Rotting',
];

const nameSuffix = [
  ' - king of the hell',
  ' - not death yet',
  ' - dangerous though cuddly',
  ' - of the death',
  ' - Mc. Spooky',
];

let numberOfClicks = 0;
const textField = document.querySelector('input');

textField.addEventListener('input', resizeInput);
resizeInput.call(textField);

function resizeInput() {
  if (this.value) {
    this.style.width = this.value.length + 'ch';
  } else {
    this.style.width = '300px';
  }
}

const prefix = document.querySelector('.prefix');
const suffix = document.querySelector('.suffix');

const handleTextFieldKeyUp = (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    if (numberOfClicks % 2) {
      console.log('going to right');

      textIndex = Math.floor(Math.random() * namePrefixes.length);
      prefix.textContent = namePrefixes[textIndex];

      prefix.classList.add('move-center');
      prefix.classList.remove('move-up');

      suffix.classList.remove('move-center');
      suffix.classList.add('move-down');
    } else {
      console.log('going to left');

      prefix.classList.remove('move-center');
      prefix.classList.add('move-up');

      textIndex = Math.floor(Math.random() * nameSuffix.length);
      suffix.textContent = nameSuffix[textIndex];

      suffix.classList.add('move-center');
      suffix.classList.remove('move-down');
    }
    numberOfClicks++;
  } else {
    console.log('empty string');
  }
};

const handleTextFieldFocus = (e) => {
  console.log('on focus');
  textField.classList.remove('move-left');
  textField.classList.remove('move-right');

  prefix.classList.add('move-up');
  prefix.classList.remove('move-center');

  suffix.classList.add('move-down');
  suffix.classList.remove('move-center');
};

textField.addEventListener('blur', handleTextFieldKeyUp);
textField.addEventListener('focus', handleTextFieldFocus);
