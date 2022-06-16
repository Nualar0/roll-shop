function calcPrice() {
    //Находим все элементы корзины
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const delivCost = document.querySelector('.delivery-cost'); 
    const cartDeliv = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const curPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        //Текущее значение плюс еще
        totalPrice += curPrice;
        
    });
    totalPriceEl.innerText = totalPrice;
    
    //Скрываем-показыввем блок стоимости доставки
    if (totalPrice >0) {
        cartDeliv.classList.remove('none');
     
    } else {
        cartDeliv.classList.add('none');
    }

    //Показывать стоимость доставки
    if (totalPrice >= 600) {
        delivCost.classList.add('free');
        delivCost.innerText = 'Бесплатно';
    } else {
        delivCost.classList.remove('free');
        delivCost.innerText = '250 ₽';
    }

}