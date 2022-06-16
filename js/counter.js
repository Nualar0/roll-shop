//СЧЕТЧИК КОЛ-ВА ТОВАРА
//Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    //Чтобы переменная была доступна для всех блоков, иначе ошибка
    let counter;
    //Проверка, действительно ли мы кликнули по счетчику, чтобы не было ошибки в консоли
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //Переменная ищет общего родителя элемента для последующей работы со счетчиком
    countWrap = event.target.closest('.counter-wrapper');
    //Ищем элемент самого счетчика в общем родителе, определнном ранее, для работы с ним
    counter = countWrap.querySelector('[data-counter');
    }   

    //Проверка элемента по клику, является ли +
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    //Проверка элемента по клику, является ли - и уменьшение
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 0) { counter.innerText = --counter.innerText };
        //Удаление из самой корзины
        //Проверка что в корзине
        if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 0) {
            //удаляем
            event.target.closest('.cart-item').remove();
            
            //Корзина пустая
            cartStatus();
            //
            calcPrice();
        }
    }

    //Проверяем на клик в корзине и обновляется общая сумма
    //event.target - элемент по которому кликнули
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcPrice();
    }
    

});




