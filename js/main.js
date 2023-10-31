const cartbutton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
cartbutton.addEventListener('click', function (event){
    modal.classList.add('active');
});

close.addEventListener('click', function (event){
    modal.classList.remove('active');
});