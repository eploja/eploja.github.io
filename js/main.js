// Variables

let nav = document.querySelector('.navbar');
let menu = document.querySelector('.enlaces');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    
    if(Desplazamiento_Actual <= 50){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
       }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}


window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});


