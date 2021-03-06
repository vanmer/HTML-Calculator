document.addEventListener('DOMContentLoaded', () => {
  var oneBtn = document.getElementById('calc-one');
  var twoBtn = document.getElementById('calc-two');
  var threeBtn = document.getElementById('calc-three');
  var fourBtn = document.getElementById('calc-four');
  var fiveBtn = document.getElementById('calc-five');
  var sixBtn = document.getElementById('calc-six');
  var sevenBtn = document.getElementById('calc-seven');
  var eightBtn = document.getElementById('calc-eight');
  var nineBtn = document.getElementById('calc-nine');
  var zeroBtn = document.getElementById('calc-zero');

  var decimalBtn = document.getElementById('calc-decimal');
  var clearBtn = document.getElementById('calc-clear');
  var backspaceBtn = document.getElementById('calc-backspace');
  var displayValElement = document.getElementById('calc-display-val');

  var displayVal = '0'; // display value on the screen
  var pendingVal; // pending value (previous value)
  var evalStringArray = []; // holding operations that are pressed/passed

  var calcNumBtns = document.getElementsByClassName('calc-btn-num');
  var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

  // Display Value
  var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal === '0') {
      displayVal = '';
    }
    displayVal += btnText;
    displayValElement.innerText = displayVal;
  }

  // Arithmetic operation
  var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
      case '+':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('+');
        break;
      case '-':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;
      case 'x':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('*');
        break;
      case '÷':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;
      case '=':
        evalStringArray.push(displayVal);
        var evaluation = eval(evalStringArray.join(' '));
        displayValElement.innerText = evaluation;
        break;
      default:
        break;
    }
  }

  // Event Listeners for num and operator buttons
  for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
  }
  for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
  }

  // clear Button onclick
  clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
  }

  // backspace Button onclick
  backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    if (displayVal === '') {
      displayVal = '0';
    }
    displayValElement.innerText = displayVal;
  }

  // decimal Button onclick
  decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) {
      displayVal += '.';
    }
    displayValElement.innerText = displayVal;
  }



})
