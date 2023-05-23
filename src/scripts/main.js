document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.header__container__menu_mobile button');
    const menuHeader = document.querySelectorAll('.header__links');
console.log(menuHeader)
    button.addEventListener('click', function () {
        
        for(i=0;i<menuHeader.length;i++){
            menuHeader[i].classList.toggle('header--visible');
        }
    })




    //Header: ser visível somente quando saímos do Hero
    const navbar = document.querySelector('.header');
    const alturaHero = document.querySelector('.hero').clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero - 100) {
            navbar.classList.remove('header--visible')
        } else {
            navbar.classList.add('header--visible')
        }
    })

})