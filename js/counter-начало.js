//по дата атрибуту через []
//находит самый первый элемент по дата атрибуту
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//Отслеживание кликов. Обработчик событий.
btnMinus.addEventListener('click', function(){
    console.log('Minuuuuus');
    //Innertext отвечает за текст внутри DIV
    //parsInt целое число из строки
    //Условие чтобы не уходило в минус
if (parseInt(counter.innerText) > 0){
    counter.innerText = --counter.innerText;
}
});

btnPlus.addEventListener('click', function(){
    console.log('Pluuuuus');
    //Innertext отвечает за текст внутри DIV
    counter.innerText = ++counter.innerText;
});

//Изменение счетчика после кликов
