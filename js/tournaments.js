// ///////Navigation////////
const lis = document.querySelectorAll('li');
const navbar = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
const menuTab = document.querySelector('.menu-tab');

const width = document.body.clientWidth;

if(width < 1900){
  lis.forEach((li) => {
    if(!li.classList.contains('current')){
      li.style.paddingTop = '25px'
    } else {
     li.style.paddingTop = '25px'
    }
  })
} 

if(width >= 1900){
  lis.forEach((li) => {
    if(!li.classList.contains('current')){
      li.style.paddingTop = '40px'
    } else {
     li.style.paddingTop = '40px'
    }
  })

  const postsContent = document.querySelector('.posts-content');
  postsContent.style.width = '570px';
}

if(width > 2500){
  const postsContent = document.querySelector('.posts-content');
  postsContent.style.width = '750px';
}

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    navbar.classList.add('active-nav');
  }

  if(window.scrollY < 1) {
    navbar.classList.remove('active-nav');
  }
})

function showMenu() {
  const width = document.body.clientWidth;
  if(width <= 820){
    navUl.style.display = 'none';
  }
}

showMenu();

function hideMenu() {
  const width = document.body.clientWidth;
  if(width > 820){
    menuTab.style.display = 'none';
  }
}

hideMenu();

menuTab.addEventListener('click', showForMobile);

function showForMobile() {
  const thirdLine = document.querySelector('.third-line');
  const secondLine = document.querySelector('.second-line');
  const firstLine = document.querySelector('.first-line');

  const mobileNav = document.querySelector('.mobile-nav');
  const navLink = document.querySelectorAll('.nav-link a');

  thirdLine.classList.toggle('active');
  secondLine.classList.toggle('active');
  firstLine.classList.toggle('active');
  menuTab.classList.toggle('active');

  mobileNav.classList.toggle('active');
  navLink.forEach((link) => {
    link.classList.toggle('active');
  })
}


// Indoor class
const hard = document.querySelectorAll('.hard');

 hard.forEach((item) => {
   if(item.parentElement.classList.contains('indoor')){
    item.style.marginLeft = '0.2rem';
   }
 })

 const headingFirst = document.querySelector('.first-tour-text h3');
 const headingSecond = document.querySelector('.second-tour-text h3');
 const headingThird = document.querySelector('.third-tour-text h3');
 const headingFourth = document.querySelector('.fourth-tour-text h3');
 const headingFifth = document.querySelector('.fifth-tour-text h3');

if(width <= 912 && width > 821){

  headingThird.innerHTML = `Moselle Open 250 <span class="atp">ATP</span><span class="hard ">Hard</span>`

  headingFifth.innerHTML = `Tokyo Open 500<span class="wta">WTA</span><span class="hard">Hard</span>`
}

if(width <= 414){

  headingThird.innerHTML = `Moselle Open 250 <span class="atp">ATP</span><span class="hard ">Hard</span>`

  headingFifth.innerHTML = `Tokyo Open 500<span class="wta">WTA</span><span class="hard">Hard</span>`
}

if(width <= 393){
  headingSecond.innerHTML = `Budapest 125<span class="wta">WTA</span><span class="clay">Clay</span>`

  headingThird.innerHTML = `Metz 250 <span class="atp">ATP</span><span class="hard ">Hard</span>`

  headingFourth.innerHTML = `Seoul 250<span class="wta">WTA</span><span class="hard">Hard</span>`

  headingFifth.innerHTML = `Tokyo 500<span class="wta">WTA</span><span class="hard">Hard</span>`
}