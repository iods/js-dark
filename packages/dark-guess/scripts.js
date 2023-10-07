'use strict';
/**
 * @fileoverview Scripts for
 * Only the darkest stars burn the brightest
 * @package
 */

let totalSquares = 6;
let colors = generateRandom(totalSquares);
let selectedColor = random();

const colorMatch = document.querySelector('#color-match');
const message = document.querySelector('#message');
const title = document.querySelector('h1');
const squares = document.querySelector('.square');
const btnReset = document.querySelector('#color-reset');
const btnEasy = document.querySelector('#btn-easy');
const btnHard = document.querySelector('#btn-hard');




btnEasy.addEventListener('click', function() {
  btnHard.classList.remove('selected');
  btnEasy.classList.add('selected');

  let totalSquares = 3;

  colors = generateRandom(totalSquares);

  selectedColor = random();
  colorMatch.textContent = selectedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

btnHard.addEventListener('click', function() {
  btnEasy.classList.remove('selected');
  btnHard.classList.add('selected');

  let totalSquares = 6;

  colors = generateRandom(totalSquares);

  selectedColor = random();
  colorMatch.textContent = selectedColor;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

btnReset.addEventListener('click', function() {
  colors = generateRandom(totalSquares);

  selectedColor = random();

  colorMatch.textContent = selectedColor;
  btnReset.textContent = 'New Colors';

  message.textContent = '';

  for (let i = 0; i < totalSquares; i++) {
    totalSquares[i].style.backgroundColor = colors[i];
  }

  title.style.backgroundColor = '#256EFF';
});

colorMatch.textContent = selectedColor;


function colorsChange(color) {
  for (let i = 0; i < totalSquares; i++) {
    totalSquares[i].style.backgroundColor = color;
  }
}


function generateRandom(color) {
  let arr = [];

  for (let i = 0; i < color; i++) {
    arr.push(colorRandom());
  }

  return arr;
}


function random() {
  let r = Math.floor(Math.random() * colors.length)
  return colors[r];
}


function colorRandom() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
