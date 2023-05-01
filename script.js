
const bodyKey = document.querySelector('body');
let keyBoardEl;
let firstLen;
let isCtrlPressed = false;

//add letters

const arr = [
  {
    code: 'Backquote',
    keyEN: '`',
    keyRU: 'ё',
    keyCode: 192,
  },
  { code: 'Digit1', keyEN: '1', keyCode: 49 },
  { code: 'Digit2', keyEN: '2', keyCode: 50 },
  { code: 'Digit3', keyEN: '3', keyCode: 51 },
  { code: 'Digit4', keyEN: '4', keyCode: 52 },
  { code: 'Digit5', keyEN: '5', keyCode: 53 },
  { code: 'Digit6', keyEN: '6', keyCode: 54 },
  { code: 'Digit7', keyEN: '7', keyCode: 55 },
  { code: 'Digit8', keyEN: '8', keyCode: 56 },
  { code: 'Digit9', keyEN: '9', keyCode: 57 },
  { code: 'Digit0', keyEN: '0', keyCode: 48 },
  { code: 'Minus', keyEN: '-', keyCode: 189 },
  { code: 'Equal', keyEN: '=', keyCode: 187 },
  { code: 'Backspace', keyEN: 'Backspace', keyCode: 8 },
  { code: 'Tab', keyEN: 'Tab', keyCode: 9 },
  {
    code: 'KeyQ', keyEN: 'q', keyRU: 'й', keyCode: 81,
  },
  {
    code: 'KeyW', keyEN: 'w', keyRU: 'ц', keyCode: 87,
  },
  {
    code: 'KeyE', keyEN: 'e', keyRU: 'у', keyCode: 69,
  },
  {
    code: 'KeyR', keyEN: 'r', keyRU: 'к', keyCode: 82,
  },
  {
    code: 'KeyT', keyEN: 't', keyRU: 'е', keyCode: 84,
  },
  {
    code: 'KeyY', keyEN: 'y', keyRU: 'н', keyCode: 89,
  },
  {
    code: 'KeyU', keyEN: 'u', keyRU: 'г', keyCode: 85,
  },
  {
    code: 'KeyI', keyEN: 'i', keyRU: 'ш', keyCode: 73,
  },
  {
    code: 'KeyO', keyEN: 'o', keyRU: 'щ', keyCode: 79,
  },
  {
    code: 'KeyP', keyEN: 'p', keyRU: 'з', keyCode: 80,
  },
  {
    code: 'BracketLeft', keyEN: '[', keyRU: 'х', keyCode: 219,
  },
  {
    code: 'BracketRight', keyEN: ']', keyRU: 'ъ', keyCode: 221,
  },
  { code: 'Backslash', keyEN: '\\', keyCode: 220 },
  { code: 'CapsLock', keyEN: 'CapsLock', keyCode: 20 },
  {
    code: 'KeyA', keyEN: 'a', keyRU: 'ф', keyCode: 65,
  },
  {
    code: 'KeyS', keyEN: 's', keyRU: 'ы', keyCode: 83,
  },
  {
    code: 'KeyD', keyEN: 'd', keyRU: 'в', keyCode: 68,
  },
  {
    code: 'KeyF', keyEN: 'f', keyRU: 'а', keyCode: 70,
  },
  {
    code: 'KeyG', keyEN: 'g', keyRU: 'п', keyCode: 71,
  },
  {
    code: 'KeyH', keyEN: 'h', keyRU: 'р', keyCode: 72,
  },
  {
    code: 'KeyJ', keyEN: 'j', keyRU: 'о', keyCode: 74,
  },
  {
    code: 'KeyK', keyEN: 'k', keyRU: 'л', keyCode: 75,
  },
  {
    code: 'KeyL', keyEN: 'l', keyRU: 'д', keyCode: 76,
  },
  {
    code: 'Semicolon', keyEN: ';', keyRU: 'ж', keyCode: 186,
  },
  {
    code: 'Quote', keyEN: "'", keyRU: 'э', keyCode: 222,
  },
  { code: 'Enter', keyEN: 'Enter', keyCode: 13 },
  { code: 'ShiftLeft', keyEN: 'Shift', keyCode: 16 },
  {
    code: 'KeyZ', keyEN: 'z', keyRU: 'я', keyCode: 90,
  },
  {
    code: 'KeyX', keyEN: 'x', keyRU: 'ч', keyCode: 88,
  },
  {
    code: 'KeyC', keyEN: 'c', keyRU: 'с', keyCode: 67,
  },
  {
    code: 'KeyV', keyEN: 'v', keyRU: 'м', keyCode: 86,
  },
  {
    code: 'KeyB', keyEN: 'b', keyRU: 'и', keyCode: 66,
  },
  {
    code: 'KeyN', keyEN: 'n', keyRU: 'т', keyCode: 78,
  },
  {
    code: 'KeyM', keyEN: 'm', keyRU: 'ь', keyCode: 77,
  },
  {
    code: 'Comma', keyEN: ',', keyRU: 'б', keyCode: 188,
  },
  {
    code: 'Period', keyEN: '.', keyRU: 'ю', keyCode: 190,
  },
  {
    code: 'Slash', keyEN: '/', keyRU: '.', keyCode: 191,
  },
  { code: 'ArrowUp', keyEN: '▲', keyCode: 38 },
  { code: 'ShiftRight', keyEN: 'Shift', keyCode: 16 },
  { code: 'ControlLeft', keyEN: 'Ctrl', keyCode: 17 },
  { code: 'MetaLeft', keyEN: 'Win', keyCode: 91 },
  { code: 'AltLeft', keyEN: 'Alt', keyCode: 18 },
  { code: 'Space', keyEN: ' ', keyCode: 32 },
  { code: 'AltRight', keyEN: 'Alt', keyCode: 18 },
  { code: 'ArrowLeft', keyEN: '◀', keyCode: 37 },
  { code: 'ArrowDown', keyEN: '▼', keyCode: 40 },
  { code: 'ArrowRight', keyEN: '▶', keyCode: 39 },
  { code: 'ControlRight', keyEN: 'Ctrl', keyCode: 17 },
];
const indexesOfDynamicKey = [
  0, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 29,
  30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 42, 43, 44, 45,
  46, 48, 48, 49, 50, 51,
];

function setLocalStorage() {
  localStorage.setItem('eng', firstLen);
}
function getLocalStorage() {
  if (localStorage.getItem('eng')) {
    firstLen = localStorage.getItem('eng');
  } else {
    firstLen = true;
  }
}
getLocalStorage();

function renderKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  arr.forEach((e) => {
    const button = document.createElement('button');
    button.classList.add('keyboard__button');
    const is2fr = e.keyCode === 8
      || e.keyCode === 9
      || e.keyCode === 13
      || e.keyCode === 16
      || e.keyCode === 20;

    if (is2fr) {
      button.style.width = '70px';
      button.style.gridColumn = 'span 3';
    }
    if (e.code === 'Space') {
      button.style.flexGrow = 1;
    }

    if (firstLen === 'true') {
      button.innerHTML = e.keyEN;
    } else {
      button.innerHTML = e.keyRU ? e.keyRU : e.keyEN;
    }

    button.setAttribute('code', e.code);
    keyboard.appendChild(button);
  });

  bodyKey.appendChild(keyboard);
  keyBoardEl = keyboard;
}
renderKeyboard();
function returnPressedElement(event) {
  const buttons = document.querySelectorAll('.keyboard__button');
  let pressedKey;
  const eventCode = event.code ? event.code : event.target.getAttribute('code');

  arr.forEach((e) => {
    if (e.code === eventCode) {
      const indexPressedBtn = arr.indexOf(e);
      pressedKey = buttons[indexPressedBtn];
    }
  });

  return pressedKey;
}

function handler(e) {
  const isClick = e.type === 'mousedown' || e.type === 'mouseup';
  const isKey = e.srcElement.className.includes('keyboard__button');
  if (isClick && !isKey) return;

  e.preventDefault();

  if (e.type === 'keydown' || e.type === 'mousedown') {
    if (e.code === 'ControlLeft' && !isCtrlPressed) {
      isCtrlPressed = true;
    }
    if (isCtrlPressed && e.code === 'ShiftLeft') {
      const buttons = document.querySelectorAll('.keyboard__button');

      if (firstLen === 'true') {
        indexesOfDynamicKey.forEach((i) => {
          buttons[i].innerHTML = arr[i].keyRU;
        });
        firstLen = 'false';
        setLocalStorage();
      } else {
        indexesOfDynamicKey.forEach((i) => {
          buttons[i].innerHTML = arr[i].keyEN;
        });
        firstLen = 'true';
        setLocalStorage();
      }
    }

    const keyPressed = returnPressedElement(e);
    keyPressed.classList.add('keyboard__button_active');
  }
  if (e.type === 'keyup' || e.type === 'mouseup') {
    if (e.code === 'ControlLeft') {
      isCtrlPressed = false;
    }
    const keyPressed = returnPressedElement(e);
    keyPressed.classList.remove('keyboard__button_active');
  }
}
//add a text input field
const textInput = document.createElement('input');
textInput.setAttribute('type', 'text');
textInput.classList.add('my-input-style');
document.body.appendChild(textInput);

// add text
const inputEl = document.querySelector('input');

document.addEventListener('keydown', (event) => {
  const key = arr.find(item => item.code === event.code);
  if (key) {
    event.preventDefault();
    const char = isCtrlPressed ? key.keyRU : key.keyEN;
    inputEl.value += char;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ControlLeft') {
    isCtrlPressed = false;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft') {
    isCtrlPressed = true;
  }
});

document.addEventListener('keydown', function (event) {
  // Если нажата клавиша CTRL, установить флаг isCtrlPressed в true
  if (event.key === 'Control') {
    isCtrlPressed = true;
  }

  // Найти элемент клавиши на основе кода клавиши
  const keyEl = document.querySelector(`div[data-code="${event.code}"]`);

  // Добавить класс "active" к элементу клавиши, чтобы показать, что клавиша нажата
  if (keyEl) {
    keyEl.classList.add('active');
  }
});
// add control
document.addEventListener('keyup', function (event) {
  if (event.key === 'Control') {
    isCtrlPressed = false;
  }

  const keyEl = document.querySelector(`div[data-code="${event.code}"]`);


  if (keyEl) {
    keyEl.classList.remove('active');
  }
});

document.addEventListener('click', function (event) {
 
  const keyEl = event.target.closest('[data-code]');

  if (keyEl) {
   
    const code = keyEl.getAttribute('data-code');

    
    if (document.activeElement.tagName.toLowerCase() !== 'input' &&
        document.activeElement.tagName.toLowerCase() !== 'textarea') {
      const event = new KeyboardEvent('keydown', { code });
      document.dispatchEvent(event);
    }

    
    if (isCtrlPressed && ['KeyC', 'KeyX', 'KeyV'].includes(code)) {
      document.execCommand(code.slice(3).toLowerCase());
    }
  }
});

document.addEventListener('keydown', handler);

document.addEventListener('keyup', handler);

keyBoardEl.addEventListener('mousedown', handler);

keyBoardEl.addEventListener('mouseup', handler);