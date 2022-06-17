const cartWrapper = document.querySelector('.cart-wrapper')

//Отслеживание клика на страницу
window.addEventListener('click', function (event) {
    //проверяем, что клик был по кнопке "Корзина". [] - не нужны, так как работает с методом hasAttribute - подразумевает работу с атрибутами и нужно только его имя
    if (event.target.hasAttribute('data-cart')) {
        //Находим карточку с товаром по которой был клик
        const card = event.target.closest('.card');

        //Собираем данные с карточки
        //Создаем объект
        const prodInfo = {
            //id элемента
            id: card.dataset.id,
            //Картинка элемента
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            //Название элемента(ролов)
            title: card.querySelector('.item-title').innerText,
            //Кол-во в упаковке
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            //Вес ролов
            wheight: card.querySelector('.price__weight').innerText,
            //Цена
            price: card.querySelector('.price__currency').innerText,
            //Счетчик
            counter: card.querySelector('[data-counter]').innerText,
        };

        //Собранные данные подставим в шаблон
        const cartItemHTML = `<div class="cart-item" data-id=${prodInfo.id}>
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src=${prodInfo.imgSrc} alt="${prodInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${prodInfo.title}</div>
                <div class="cart-item__weight">${prodInfo.itemsInBox} / ${prodInfo.wheight}div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${prodInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${prodInfo.price} ₽</div>
                    </div>

                </div>`;

        //Отобразим товар в корзине
        //Позволяет вставлять кусок HTML документа внутрь элемента
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

    };
});