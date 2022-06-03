var $menuButton = document.querySelector('.menuButton');
var $navbar = document.querySelector('.nav')
$menuButton.onpointerdown = downHandler;

function downHandler (event) {
  console.log("evento de click");
  $navbar.classList.toggle('inactive');
}
