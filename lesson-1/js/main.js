const products = [
    {id: 1, title: 'Notebook', img: 'laptope_014.png', price: 2000},
    {id: 2, title: 'Mouse',img: 'mouse_.png', price: 20},
    {id: 3, title: 'Keyboard',img: 'keyboard.png', price: 200},
    {id: 4, title: 'Gamepad',img: 'handhelds.png', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, img, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="img/${img}" alt="">
                <p>Цена $${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.img,item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);