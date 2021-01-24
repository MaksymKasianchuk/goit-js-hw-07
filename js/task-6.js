'use strict';
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута 
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    event.target.value.length >= event.target.dataset.length ?
        event.target.classList.add('valid') :
        event.target.classList.add('invalid');
});
inputRef.addEventListener('focus', event => {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
});