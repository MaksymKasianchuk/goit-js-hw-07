'use strict';
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderBtnRef = document.querySelector('#controls button[data-action="render"]');
const destroyBtnRef = document.querySelector('#controls button[data-action="destroy"]');
const quantityBoxesRef = document.querySelector('[type="number"]');
const collectionRef = document.querySelector('#boxes');
let boxesArray = []; 
let sizeOfBox = 30;
let numberOfBox = 1;

renderBtnRef.addEventListener('click', () => createBoxes(quantityBoxesRef.value));
destroyBtnRef.addEventListener('click', destroyBoxes);

function randColor() {
    return `rgb( ${Math.random() * 256},  
    ${Math.random() * 256}, 
    ${Math.random() * 256})`;
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1){
        const divRef = document.createElement('div');
        divRef.textContent = numberOfBox;
        divRef.style.width = sizeOfBox + 'px';
        divRef.style.height = sizeOfBox + 'px';
        divRef.style.backgroundColor = randColor();
        boxesArray.push(divRef);
        sizeOfBox += 10;
        numberOfBox += 1;
    }
    collectionRef.append(...boxesArray);
    console.log(`Добавили к масиву ${amount} коробок, 
    настройки их параметров сохранены до нажатия кнопки "Очистить"!`);
}

function destroyBoxes() {
    collectionRef.innerHTML = '';
    quantityBoxesRef.value = '';
    boxesArray = [];
    sizeOfBox = 30;
    numberOfBox = 1;
    console.log("Очистили масив коробок и скинули настройки их параметров на изначальные!");
}