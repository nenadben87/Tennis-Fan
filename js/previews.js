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

// Match One
const newTextOne = 'Berrettini with 196cm height and great serve, on the other hand we have Casper who has better form. Berrettini has more experiance on hard 126/62 comparing to Ruud who has 71/45. However Casper played more matches this season with better score on all surfaces and on hard court.On higher level Tournaments Ruud is also better. Mateo has lost in 1st round in Montreal and in Cincinnati. Berrettini past over the whole season on clay. Mateo\'s style of playing is good for fast surfaces and he won Queens on the grass.But this surface at US Open is more slower than it was in a past years and apart from that he won Queens he is not so constant like Casper is. Mateo reached QF in 2021,so till now he has defended all atp points from last year. Although Ruud had a tough match with Paul Tommy he has recoverd fast and beated Moutet without big problems. Summary Ruud is our favorite for this match.'

const matchOneTxt = document.querySelector('.match-1-txt');

 matchOneTxt.appendChild(document.createTextNode(newTextOne))


// Match Two
const newTextTwo = 'Moutet koji vise voli sljaku nego beton sa jedne strane,Wawrinka koji igra solidno na svim podlogama sa druge strane. Moutet ostvaruje rezultate samo na celindzerima, a Wawrinka je u losoj formi i od pocetka godine odigrao je samo 13 meceva u kojima je samo 3 dobio. Sto se tice tvrde podloge Moutet ima bolji skor zahvaljuci Adelaide-u gde je dosao do polufinala koji je doduse bio jos u januaru,pa zatim dosao do druge runde Australian Open-a. Stan je izgubio u prvoj rundi i Montreal -a i Cinncatti-a, dok je Corentin igrao kvalifikacije za US Open. Corentin je ispao iz prvih 100 u februaru mesecu kada je bila sezona u dvorani. Gledajuci H2H, skor je u korist Moutet-a. Izabracemo Moutet-a kao pobednika ovog meca jer Stan u izrazito losoj formi jos od 2020. U 2021 je odigrao samo 6 meceva. Dakle Moutet pobednik.';

const matchTwoTxt = document.querySelector('.match-2-txt');

matchTwoTxt.appendChild(document.createTextNode(newTextTwo));

// Match Three
const newTextThree = 'Van de Zandschulp,omiljena podloga sljaka, sa jedne strane. Cressy sa visinom od 201cm, dobrim servisom,voli brze podloge sa druge strane.Nisu se susretali u karijeri.Na tvrdoj podlozi imaju slican skor. Cressy je osvojio Eastbourne i Newport a takodje smo videli da i Botic se dobro snalazi na brzim podlogama, dosao je do R16 na Wimledon-u. Obojica su u dobroj formi i uzlaznoj putanji imajuci u vidu da nisu bili u prvih 100, Cressy pocetkom godine a Botic pre godinu dana. Prednost dajemo Botic-u zbog malog boljeg performansa ove godine kao i na jacim turnirima.';

const matchThreeTxt = document.querySelector('.match-3-txt');

matchThreeTxt.appendChild(document.createTextNode(newTextThree));