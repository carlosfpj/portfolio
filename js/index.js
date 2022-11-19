var $menuButton = document.querySelector('.menuButton');
var $navbar = document.querySelector('.nav')
$menuButton.onpointerdown = downHandler;


function downHandler (event) {
  console.log("evento de click");
  $navbar.classList.toggle('inactive');
}


const chevron = document.querySelectorAll('.icon-chevron-down');

chevron.forEach((cadaChevron, i) => {
  cadaChevron.addEventListener('click' , ()=> {
    const parent = cadaChevron.parentElement;
    const collapsible = parent.nextElementSibling;
    expandContent(collapsible, 'collapsed')
  })
})

function expandContent (elem, collapseClass) {
  elem.style.height = '';
  elem.style.transition = 'none';

  const startHeight = window.getComputedStyle(elem).height;
  console.log('startHeight is' + startHeight);

  elem.classList.toggle(collapseClass);
  const height = window.getComputedStyle(elem).height;
  console.log('height is' + height);

  elem.style.height = startHeight;

  requestAnimationFrame( ()=> {
    elem.style.transition = '';

    requestAnimationFrame( () => {
      elem.style.height = height;
    })
  })

  elem.addEventListener('transitioned' , () => {
    elem.style.height = '';
    elem.removeEventListener('transitioned' , arguments.callee)
  });
}
