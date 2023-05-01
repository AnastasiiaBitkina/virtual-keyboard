
// объявляем переменные

const bodyTag = document.querySelector('body');
let field;

let eng;
let rus;

let isCtrlActive = false;
let isCapsActive = false;
let isShiftActive = false;

// создаем массив с буквами клавиатуры
const arr = [
  {
    code: 'Backquote',
    keyEN: '`',
    keyRU: 'ё',
    shiftEN: '~',
    shiftRU: 'Ё',
    keyCode: 192,
  },
  {
    code: 'Digit1', keyEN: '1', shiftEN: '!', shiftRU: '!', keyCode: 49,
  },
  {
    code: 'Digit2', keyEN: '2', shiftEN: '@', shiftRU: '"', keyCode: 50,
  },
  {
    code: 'Digit3', keyEN: '3', shiftEN: '#', shiftRU: '№', keyCode: 51,
  },
  {
    code: 'Digit4', keyEN: '4', shiftEN: '$', shiftRU: ';', keyCode: 52,
  },
  {
    code: 'Digit5', keyEN: '5', shiftEN: '%', shiftRU: '%', keyCode: 53,
  },
  {
    code: 'Digit6', keyEN: '6', shiftEN: '^', shiftRU: ':', keyCode: 54,
  },
  {
    code: 'Digit7', keyEN: '7', shiftEN: '&', shiftRU: '?', keyCode: 55,
  },
  {
    code: 'Digit8', keyEN: '8', shiftEN: '*', shiftRU: '*', keyCode: 56,
  },
  {
    code: 'Digit9', keyEN: '9', shiftEN: '(', shiftRU: '(', keyCode: 57,
  },
  {
    code: 'Digit0', keyEN: '0', shiftEN: ')', shiftRU: ')', keyCode: 48,
  },
  {
    code: 'Minus', keyEN: '-', shiftEN: '_', shiftRU: '_', keyCode: 189,
  },
  {
    code: 'Equal', keyEN: '=', shiftEN: '+', shiftRU: '+', keyCode: 187,
  },
  { code: 'Backspace', keyEN: 'Backspace', keyCode: 8 },
  { code: 'Tab', keyEN: 'Tab', keyCode: 9 },
  {
    code: 'KeyQ', keyEN: 'q', keyRU: 'й', shiftEN: 'Q', shiftRU: 'Й', keyCode: 81,
  },
  {
    code: 'KeyW', keyEN: 'w', keyRU: 'ц', shiftEN: 'W', shiftRU: 'Ц', keyCode: 87,
  },
  {
    code: 'KeyE', keyEN: 'e', keyRU: 'у', shiftEN: 'E', shiftRU: 'У', keyCode: 69,
  },
  {
    code: 'KeyR', keyEN: 'r', keyRU: 'к', shiftEN: 'R', shiftRU: 'К', keyCode: 82,
  },
  {
    code: 'KeyT', keyEN: 't', keyRU: 'е', shiftEN: 'T', shiftRU: 'Е', keyCode: 84,
  },
  {
    code: 'KeyY', keyEN: 'y', keyRU: 'н', shiftEN: 'Y', shiftRU: 'Н', keyCode: 89,
  },
  {
    code: 'KeyU', keyEN: 'u', keyRU: 'г', shiftEN: 'U', shiftRU: 'Г', keyCode: 85,
  },
  {
    code: 'KeyI', keyEN: 'i', keyRU: 'ш', shiftEN: 'I', shiftRU: 'Ш', keyCode: 73,
  },
  {
    code: 'KeyO', keyEN: 'o', keyRU: 'щ', shiftEN: 'O', shiftRU: 'Щ', keyCode: 79,
  },
  {
    code: 'KeyP', keyEN: 'p', keyRU: 'з', shiftEN: 'P', shiftRU: 'З', keyCode: 80,
  },
  {
    code: 'BracketLeft', keyEN: '[', keyRU: 'х', shiftEN: '{', shiftRU: 'Х', keyCode: 219,
  },
  {
    code: 'BracketRight', keyEN: ']', keyRU: 'ъ', shiftEN: '}', shiftRU: 'Ъ', keyCode: 221,
  },
  {
    code: 'Backslash', keyEN: '\\', shiftEN: '|', shiftRU: '/', keyCode: 220,
  },
  { code: 'CapsLock', keyEN: 'CapsLock', keyCode: 20 },
  {
    code: 'KeyA', keyEN: 'a', keyRU: 'ф', shiftEN: 'A', shiftRU: 'Ф', keyCode: 65,
  },
  {
    code: 'KeyS', keyEN: 's', keyRU: 'ы', shiftEN: 'S', shiftRU: 'Ы', keyCode: 83,
  },
  {
    code: 'KeyD', keyEN: 'd', keyRU: 'в', shiftEN: 'D', shiftRU: 'В', keyCode: 68,
  },
  {
    code: 'KeyF', keyEN: 'f', keyRU: 'а', shiftEN: 'F', shiftRU: 'А', keyCode: 70,
  },
  {
    code: 'KeyG', keyEN: 'g', keyRU: 'п', shiftEN: 'G', shiftRU: 'П', keyCode: 71,
  },
  {
    code: 'KeyH', keyEN: 'h', keyRU: 'р', shiftEN: 'H', shiftRU: 'Р', keyCode: 72,
  },
  {
    code: 'KeyJ', keyEN: 'j', keyRU: 'о', shiftEN: 'J', shiftRU: 'О', keyCode: 74,
  },
  {
    code: 'KeyK', keyEN: 'k', keyRU: 'л', shiftEN: 'K', shiftRU: 'Л', keyCode: 75,
  },
  {
    code: 'KeyL', keyEN: 'l', keyRU: 'д', shiftEN: 'L', shiftRU: 'Д', keyCode: 76,
  },
  {
    code: 'Semicolon', keyEN: ';', keyRU: 'ж', shiftEN: ':', shiftRU: 'Ж', keyCode: 186,
  },
  {
    code: 'Quote', keyEN: "'", keyRU: 'э', shiftEN: '"', shiftRU: 'Э', keyCode: 222,
  },
  { code: 'Enter', keyEN: 'Enter', keyCode: 13 },
  { code: 'ShiftLeft', keyEN: 'Shift', keyCode: 16 },
  {
    code: 'KeyZ', keyEN: 'z', keyRU: 'я', shiftEN: 'Z', shiftRU: 'Я', keyCode: 90,
  },
  {
    code: 'KeyX', keyEN: 'x', keyRU: 'ч', shiftEN: 'X', shiftRU: 'Ч', keyCode: 88,
  },
  {
    code: 'KeyC', keyEN: 'c', keyRU: 'с', shiftEN: 'C', shiftRU: 'С', keyCode: 67,
  },
  {
    code: 'KeyV', keyEN: 'v', keyRU: 'м', shiftEN: 'V', shiftRU: 'М', keyCode: 86,
  },
  {
    code: 'KeyB', keyEN: 'b', keyRU: 'и', shiftEN: 'B', shiftRU: 'И', keyCode: 66,
  },
  {
    code: 'KeyN', keyEN: 'n', keyRU: 'т', shiftEN: 'N', shiftRU: 'Т', keyCode: 78,
  },
  {
    code: 'KeyM', keyEN: 'm', keyRU: 'ь', shiftEN: 'M', shiftRU: 'Ь', keyCode: 77,
  },
  {
    code: 'Comma', keyEN: ',', keyRU: 'б', shiftEN: '<', shiftRU: 'Б', keyCode: 188,
  },
  {
    code: 'Period', keyEN: '.', keyRU: 'ю', shiftEN: '>', shiftRU: 'Ю', keyCode: 190,
  },
  {
    code: 'Slash', keyEN: '/', keyRU: '.', shiftEN: '?', shiftRU: ',', keyCode: 191,
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
  46, 47, 48, 49, 50, 51,
];
const notPrintableKeys = [
  13, 14, 28, 40, 41, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62,
];
// создаем поле для текста

function fieldInput() {
  const area = document.createElement('textarea');
  area.classList.add('area');
  bodyTag.prepend(area);
  field = area;
}
fieldInput();


