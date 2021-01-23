'use strict';
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');
const newLiRefs = ingredients.map(text => {
  const itemRef = document.createElement('li');
  itemRef.textContent = text;
  return itemRef;
});
ulRef.append(...newLiRefs);