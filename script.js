const keys = [
    ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
    ['ctrl', 'win', 'alt', 'space', 'alt', 'win','ctrl'],
    ['⬅', '➡', '⬆', '⬇']
  ];
  

  const container = document.createElement('div');
  container.classList.add('virtual-keyboard');
  keys.forEach((row) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard-row');
    row.forEach((key) => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('keyboard-key');
      keyElement.innerText = key;
      keyElement.addEventListener('mousedown', () => pressKey(key));
      keyElement.addEventListener('mouseup', () => releaseKey(key));
      rowElement.appendChild(keyElement);
    });
    container.appendChild(rowElement);
  });
  

  function pressKey(key) {
    // Действия, выполняемые при нажатии клавиши
  }
  
  function releaseKey(key) {
    // Действия, выполняемые при отпускании клавиши
  }
  
  container.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard-key')) {
      pressKey(event.target.innerText);
    }
  });
  
  container.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('keyboard-key')) {
      releaseKey(event.target.innerText);
    }
  });
  
  document.getElementById('keyboard-container').appendChild(container);

  // CSS стили для виртуальной клавиатуры
  const css = `
  .virtual-keyboard {
    display: flex;
    flex-direction: column;
    border: 1px solid #777;
    background-color: #eee;
    border-radius: 8px;
    padding: 10px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    box-shadow: 2px 2px 5px #999;
  }
  
  .keyboard-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .keyboard-key {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 50px;
    height: 50px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid #999;
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #ccc;
    transition: background-color 0.2s ease;
  }
  
  .keyboard-key:hover {
    background-color: #ddd;
  }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);


/*keyElement.innerText = key === '⬅' ? '←' : key === '➡' ? '→' : key === '⬆' ? '↑' : key === '⬇' ? '↓' : key;*/