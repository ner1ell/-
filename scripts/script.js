/*скрол от кнопки Посмотреть автомобили к разделу Наш автопарк*/
document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

/*скрол от кнопки Забронировать к разделу Узнать цену и забронировать*/
var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

/*сделаем все поля обязательными к заполнению, чтоб форма выдавала сообщение */
document.getElementById("price-action").onclick = function () {
    if(document.getElementById("name").value === "") {
        alert("Заполните поле имя");
    }   else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон");
    }   else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль");
    }   else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время");
    }
}


/*добавим анимацию к картинке автомобиля в секции Узнать цену и забронировать*/
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.7) / 10) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

/*добавим скрол к картинке автомобиля в первой секции*/
    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.9 * window.pageYOffset) + 'px';
})
});
