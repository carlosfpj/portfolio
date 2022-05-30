
var $menuButton = document.querySelector('.menuButton');
var $navbar = document.querySelector('.nav')
console.log($menuButton);
console.log($navbar);
$menuButton.onpointerdown = downHandler;




function downHandler (event) {
  console.log("evento de click");
  $navbar.classList.toggle('active');
}

// $menuButton.addEventListener('Pointer' , downHandler)
