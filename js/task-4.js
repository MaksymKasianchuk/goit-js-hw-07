'use strict';
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const spanRef = document.querySelector('#value')
let counterValue = Number(spanRef.textContent);
const decrement = () => {counterValue -= 1;  spanRef.textContent = counterValue;}
const increment = () => {counterValue += 1;  spanRef.textContent = counterValue;}
const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);