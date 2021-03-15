// Animacion de Menu en pantallas chicas
let boton = document.getElementById("menu-icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces animacion__menu2');
        contador = 1;
    }else{
        enlaces.classList.remove('animacion_menu2');
        enlaces.className = ('enlaces animacion__menu1');
        contador = 0;
    }
})

window.addEventListener('resize',function(){
    if(screen.width > 992){
        enlaces.classList.remove('animacion_menu2');
        enlaces.className = ('enlaces animacion__menu1');
        contador = 0;
    }
})


// When the user scrolls down 150px from the top of the document, animation over items
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    aboutUs.className = ('aboutUs animate__animated animate__fadeInUpBig');
    document.getElementById("aboutUs").style.opacity = "1";
    
  } else {
    aboutUs.className = ('aboutUs');
    document.getElementById("aboutUs").style.opacity = "0";
    
  }

  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    ventajas.className = ('ventajas animate__animated animate__slideInRight')
    document.getElementById("ventajas").style.opacity = "1";
    
  } else {
    ventajas.className = ('ventajas');
    document.getElementById("ventajas").style.opacity = "0";
    
  }

  if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
    catPop.className = ('catPop animate__animated animate__fadeInBottomLeft');
    document.getElementById("catPop").style.opacity = "1";
    
  } else {
    catPop.className = ('catPop');
    document.getElementById("catPop").style.opacity = "0";
    
  }
}