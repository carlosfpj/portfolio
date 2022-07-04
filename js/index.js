var $menuButton = document.querySelector('.menuButton');
var $navbar = document.querySelector('.nav')
$menuButton.onpointerdown = downHandler;
let bloque;


function downHandler (event) {
  console.log("evento de click");
  $navbar.classList.toggle('inactive');
}


const h2 = document.querySelectorAll('.h2');

h2.forEach((cadah2, i) => {
  h2[i].addEventListener('click', ()=> {
    console.log('click');
    bloque = cadah2.parentElement;
    console.log(bloque);
    bloque.classList.toggle('activo');
  })
})
