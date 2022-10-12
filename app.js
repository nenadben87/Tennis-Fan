// ///////Navigation////////
const lis = document.querySelectorAll('li');
const navbar = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
const menuTab = document.querySelector('.menu-tab');

 lis.forEach((li) => {
   if(!li.classList.contains('current')){
     li.style.paddingTop = '25px'
   } 
 })

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
  if(width <= 768){
    navUl.style.display = 'none';
  }
}

showMenu();

function hideMenu() {
  const width = document.body.clientWidth;
  if(width > 768){
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

  const width = document.body.clientWidth;
  const height = window.innerHeight;
  if(width <= 540 && mobileNav.classList.contains('active')){
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }

  if(height <= 540 && mobileNav.classList.contains('active')){
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  }
}

// ///////////////Showcase//////////////
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

const showcaseText = document.querySelector('.showcase-text');

const circleOne = document.querySelector('.circle-1');
const circleTwo = document.querySelector('.circle-2');
const circleThree = document.querySelector('.circle-3');
const circleFour = document.querySelector('.circle-4');

const newsImage = document.querySelector('.news-image');
const postImage = document.querySelector('.post-image');
const analyseImage = document.querySelector('.analyse-image');
const tournamentImage = document.querySelector('.tournament-image');

// Event Listeners for Showcase Image slider
rightArrow.addEventListener('click', nextImage);
leftArrow.addEventListener('click', previousImage);

circleOne.addEventListener('click', showNews);
circleTwo.addEventListener('click', showPost);
circleThree.addEventListener('click', showAnalyse);
circleFour.addEventListener('click', showTournament);

let i = 0;

if(i === 0){
  showcaseText.style.marginTop = '18rem';

  showcaseText.innerHTML = `
  <h3>Nadal makes it clear why he lost to Tiafoe at US Open</h3>
  <a href="news.html">Read More</a>
  `;
  
  newsImage.classList.remove('active');
  postImage.classList.add('inactive');
  analyseImage.classList.add('inactive');
  tournamentImage.classList.add('inactive');
  circleOne.classList.add('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.remove('active-circle');
  circleFour.classList.remove('active-circle');
  
  const width = document.body.clientWidth;
  const height = window.innerHeight;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  const link = document.querySelector('.showcase-text a');
  // Responsive
  if(width <= 1920){
     heading.style.fontSize = '3rem';
     heading.style.marginTop = '7rem';
     circles.style.marginTop = '7rem';
  }

  if(width <= 1600){
     heading.style.marginTop = '7.5rem';
     circles.style.marginTop = '4rem';
  }

  if(width <= 1440){
    heading.style.marginTop = '8rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '3rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '21rem';
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 768){
    showcaseText.style.marginTop = '18rem';
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
  }

  if(width <= 414){
    showcaseText.innerHTML = `
  <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
  <a href="news.html">Read More</a>
  `;
   showcaseText.style.marginTop = '14rem';
  }

  if(width <= 375){
    showcaseText.style.marginTop = '8rem';
  }

  if(width <= 360){
    showcaseText.style.marginTop = '12rem';
  }

  if(height <= 912){
    showcaseText.style.marginTop = '15rem'
  }

  if(height <= 540){
    showcaseText.innerHTML = `
  <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
  <a href="news.html">Read More</a>
  `;
    showcaseText.style.marginTop = '10rem';
  }
}

if(i === 3){
  showcaseText.style.marginTop = '18rem'

  showcaseText.innerHTML = `
  <h3>US Open 2022</h3>
  <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
 `;
  
  newsImage.classList.add('inactive');  
  postImage.classList.add('inactive');
  analyseImage.classList.add('inactive');
  tournamentImage.classList.remove('inactive')
  circleOne.classList.remove('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.remove('active-circle');
  circleFour.classList.add('active-circle');

  const width = document.body.clientWidth;
  const height = window.innerHeight;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '3rem';
  }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '20rem';
  }

  if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
  }

  if(width <= 414){
    showcaseText.style.marginTop = '14rem';
  }

  if(width <= 360){
    showcaseText.style.marginTop = '12rem';
  }

  if(height <= 540){
    showcaseText.style.marginTop = '10rem';
  }
}

 function nextImage() {
   i++;

   if(i === 1){
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Tiafoe has posted on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
  
    newsImage.classList.add('inactive');
    postImage.classList.remove('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.add('inactive');
    circleOne.classList.remove('active-circle');
    circleTwo.classList.add('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.remove('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles')
    // Responsive
    if(width <= 1920){
      heading.style.fontSize = '3rem';
      heading.style.marginTop = '7rem';
      circles.style.marginTop = '7rem';
   }

    if(width <= 1600){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
   }

    if(width <= 1440){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
    }

    if(width <= 1366){
      heading.style.fontSize = '2rem';
      heading.style.marginTop = '0.1rem';
    }

    if(width <= 912 && width > 768){
      showcaseText.style.marginTop = '20rem';
      }

    if(width <= 768){
      heading.style.fontSize = '1.5rem';
    } 
    
    if(width <= 540){
      showcaseText.style.marginTop = '12rem';
      heading.style.fontSize = '1rem';
    }

    if(width <= 414){
      showcaseText.style.marginTop = '14rem';
    }

    if(width <= 375){
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
     showcaseText.style.marginTop = '11rem';
    }

    if(width <= 360){
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
     showcaseText.style.marginTop = '12rem';
    }

    if(height <= 540){
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
      showcaseText.style.marginTop = '10rem';
    }
  }

  if(i === 2){
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Berrettini versus Ruud match preview and detailed analyse</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
   
    newsImage.classList.add('inactive'); 
    postImage.classList.add('inactive');
    analyseImage.classList.remove('inactive');
    tournamentImage.classList.add('inactive');
    circleOne.classList.remove('active-circle');
    circleTwo.classList.remove('active-circle');
    circleThree.classList.add('active-circle');
    circleFour.classList.remove('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
    // Responsive
    if(width <= 1920){
      heading.style.fontSize = '3rem';
      heading.style.marginTop = '7rem';
      circles.style.marginTop = '7rem';
   }

    if(width <= 1600){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
   }

    if(width <= 1440){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
    }

    if(width <= 1366){
      heading.style.fontSize = '2rem';
      heading.style.marginTop = '0.1rem';
    }

    if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '20rem';
    showcaseText.innerHTML = `
    <h3>Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }

    if(width <= 768){
      showcaseText.innerHTML = `
    <h3 style="font-size:1.5rem;">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }

    if(width <= 540){
      showcaseText.style.marginTop = '12rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }

    if(width <= 414){
      showcaseText.style.marginTop = '14rem'
    }

    if(width <= 375){
      showcaseText.style.marginTop = '11rem';
    }

    if(width <= 360){
      showcaseText.style.marginTop = '12rem';
    }

    if(height <= 540){
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
      showcaseText.style.marginTop = '10rem';
    }
  }
  
  if(i === 3){
    showcaseText.style.marginTop = '18rem'

    showcaseText.innerHTML = `
    <h3>US Open 2022</h3>
    <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
    `;
    
    newsImage.classList.add('inactive');  
    postImage.classList.add('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.remove('inactive')
    circleOne.classList.remove('active-circle');
    circleTwo.classList.remove('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.add('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '20rem';
   }

   if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
   }

   if(width <= 414){
    showcaseText.style.marginTop = '14rem';
   }

   if(width <= 375){
    showcaseText.style.marginTop = '11rem';
   }

   if(width <= 360){
    showcaseText.style.marginTop = '12rem';
   }

   if(height <= 540){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">US Open 2022</h3>
    <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
    `;
    showcaseText.style.marginTop = '10rem';
   }
  }

  if(i > 3){
    i = 0;
  }

  if(i === 0) {
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Nadal makes it clear why he lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
  
  newsImage.classList.remove('inactive');
  postImage.classList.add('inactive');
  analyseImage.classList.add('inactive');
  tournamentImage.classList.add('inactive');
  circleOne.classList.add('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.remove('active-circle');
  circleFour.classList.remove('active-circle');

  const width = document.body.clientWidth;
  const height = window.innerHeight;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '21rem';
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 768){
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
  }

  if(width <= 414){
    showcaseText.innerHTML = `
  <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
  <a href="news.html">Read More</a>
  `;
    showcaseText.style.marginTop = '14rem';
   }

   if(width <= 375){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '11rem'
  }

  if(width <= 360){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '12rem'
  }

  if(height <= 540){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '10rem'
  }
 }

}

function previousImage() {
  i--;
 
   if(i === 1){
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Tiafoe has posted on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
  
    newsImage.classList.add('inactive');
    postImage.classList.remove('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.add('inactive');
    circleOne.classList.remove('active-circle');
    circleTwo.classList.add('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.remove('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
    // Responsive
    if(width <= 1920){
      heading.style.fontSize = '3rem';
      heading.style.marginTop = '7rem';
      circles.style.marginTop = '7rem';
   }

    if(width <= 1600){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
   }

    if(width <= 1440){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
    }

    if(width <= 1366){
      heading.style.fontSize = '2rem';
      heading.style.marginTop = '0.1rem';
    }

    if(width <= 912 && width > 768){
      showcaseText.style.marginTop = '20rem';
    }

    if(width <= 768){
      heading.style.fontSize = '1.5rem'
    }

    if(width <= 540){
      showcaseText.style.marginTop = '12rem';
      heading.style.fontSize = '1rem';
    }

    if(width <= 414){
      showcaseText.style.marginTop = '14rem';
    }

    if(width <= 375){
      showcaseText.style.marginTop = '11rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
    }

    if(width <= 360){
      showcaseText.style.marginTop = '12rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
    }

    if(height <= 540){
      showcaseText.style.marginTop = '10rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Tiafoe on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
    }
  }

  if(i === 2){
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Berrettini versus Ruud match preview and detailed analyse</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
   
    newsImage.classList.add('inactive'); 
    postImage.classList.add('inactive');
    analyseImage.classList.remove('inactive');
    tournamentImage.classList.add('inactive');
    circleOne.classList.remove('active-circle');
    circleTwo.classList.remove('active-circle');
    circleThree.classList.add('active-circle');
    circleFour.classList.remove('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
    // Responsive
    if(width <= 1920){
      heading.style.fontSize = '3rem';
      heading.style.marginTop = '7rem';
      circles.style.marginTop = '7rem';
   }

    if(width <= 1600){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
   }

    if(width <= 1440){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
    }

    if(width <= 1366){
      heading.style.fontSize = '2rem';
      heading.style.marginTop = '0.1rem';
    }

    if(width <= 912 && width > 768){
      showcaseText.style.marginTop = '20rem';
      showcaseText.innerHTML = `
      <h3>Berrettini versus Ruud match preview</h3>
      <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
      `;
    }

    if(width <= 768){
      showcaseText.innerHTML = `
    <h3 style="font-size:1.5rem">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }

    if(width <= 540){
      showcaseText.style.marginTop = '12rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }

    if(width <= 414){
      showcaseText.style.marginTop = '14rem';
    }

    if(width <= 375){
      showcaseText.style.marginTop = '11rem';
    }

    if(width <= 360){
      showcaseText.style.marginTop = '12rem';
    }

    if(height <= 540){
      showcaseText.style.marginTop = '10rem';
      showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Berrettini versus Ruud match preview</h3>
    <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
    `;
    }
  }
  
  if(i === 0) {
    showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Nadal makes it clear why he lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
  
  newsImage.classList.remove('inactive');
  postImage.classList.add('inactive');
  analyseImage.classList.add('inactive');
  tournamentImage.classList.add('inactive');
  circleOne.classList.add('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.remove('active-circle');
  circleFour.classList.remove('active-circle');

  const width = document.body.clientWidth;
  const height = window.innerHeight;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '21rem';
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 768){
    heading.style.fontSize = '1.5rem';
  }

  if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
  }

  if(width <= 414){
    showcaseText.innerHTML = `
  <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
  <a href="news.html">Read More</a>
  `;
    showcaseText.style.marginTop = '14rem';
   }

   if(width <= 375){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '11rem'
  }

  if(width <= 360){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '12rem';
  }

  if(height <= 540){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">Nadal lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
    showcaseText.style.marginTop = '10rem';
  }
 }

  if(i < 0){
    i = 3;
  }

  if(i === 3){
    showcaseText.style.marginTop = '18rem'

    showcaseText.innerHTML = `
    <h3>US Open 2022</h3>
    <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
    `;
    
    newsImage.classList.add('inactive');  
    postImage.classList.add('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.remove('inactive')
    circleOne.classList.remove('active-circle');
    circleTwo.classList.remove('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.add('active-circle');

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

   if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '20rem';
   }

   if(width <= 540){
    showcaseText.style.marginTop = '12rem';
    heading.style.fontSize = '1rem';
  }

  if(width <= 414){
    showcaseText.style.marginTop = '14rem';
  }

  if(width <= 375){
    showcaseText.style.marginTop = '11rem';
  }

  if(width <= 360){
    showcaseText.style.marginTop = '12rem';
  }

  if(height <= 540){
    showcaseText.innerHTML = `
    <h3 style="font-size:1rem;">US Open 2022</h3>
    <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
    `;
    showcaseText.style.marginTop = '10rem';
  }
 }
}

function showNews() {
  i = 0;

  showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Nadal makes it clear why he lost to Tiafoe at US Open</h3>
    <a href="news.html">Read More</a>
    `;
  
  newsImage.classList.remove('inactive');
  postImage.classList.add('inactive');
  analyseImage.classList.add('inactive');
  tournamentImage.classList.add('inactive');
  circleOne.classList.add('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.remove('active-circle');
  circleFour.classList.remove('active-circle');

  const width = document.body.clientWidth;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '21rem';
    heading.style.fontSize = '1.5rem';
  }
}

function showPost() {
   i = 1

   showcaseText.style.marginTop = '18rem';

    showcaseText.innerHTML = `
    <h3>Tiafoe has posted on Twitter about last match</h3>
    <a href="news.html" style="background-color: #78da55" onmouseover="this.style.backgroundColor='#6cc44c'" onmouseout="this.style.backgroundColor='#78da55'">Check Out</a>
    `;
  
    newsImage.classList.add('inactive');
    postImage.classList.remove('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.add('inactive');
    circleOne.classList.remove('active-circle');
    circleTwo.classList.add('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.remove('active-circle');

    const width = document.body.clientWidth;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
    // Responsive
    if(width <= 1920){
      heading.style.fontSize = '3rem';
      heading.style.marginTop = '7rem';
      circles.style.marginTop = '7rem';
   }

    if(width <= 1600){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
   }

    if(width <= 1440){
      heading.style.marginTop = '5rem';
      circles.style.marginTop = '4rem';
    }

    if(width <= 1366){
      heading.style.fontSize = '2rem';
      heading.style.marginTop = '0.1rem';
    }

    if(width <= 912 && width > 768){
      showcaseText.style.marginTop = '20rem';
    }
}

function showAnalyse() {
  i = 2

  showcaseText.style.marginTop = '18rem';

  showcaseText.innerHTML = `
  <h3>Berrettini versus Ruud match preview and detailed analyse</h3>
  <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
  `;
 
  newsImage.classList.add('inactive'); 
  postImage.classList.add('inactive');
  analyseImage.classList.remove('inactive');
  tournamentImage.classList.add('inactive');
  circleOne.classList.remove('active-circle');
  circleTwo.classList.remove('active-circle');
  circleThree.classList.add('active-circle');
  circleFour.classList.remove('active-circle');

  const width = document.body.clientWidth;
  const heading = document.querySelector('.showcase-text h3');
  const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

    if(width <= 912 && width > 768){
      showcaseText.style.marginTop = '20rem';
      showcaseText.innerHTML = `
      <h3>Berrettini versus Ruud match preview</h3>
      <a href="analyse.html" style="background-color: #BADA55" onmouseover="this.style.backgroundColor='#a7c44c'" onmouseout="this.style.backgroundColor='#BADA55'">Match Analyse</a>
      `;
    }
}

function showTournament() {
  i = 3

  showcaseText.style.marginTop = '18rem'

    showcaseText.innerHTML = `
    <h3>US Open 2022</h3>
    <a href="analyse.html" style="background-color: #7555da" onmouseover="this.style.backgroundColor='#694cc4'" onmouseout="this.style.backgroundColor='#7555da'">Read More</a>
    `;
    
    newsImage.classList.add('inactive');  
    postImage.classList.add('inactive');
    analyseImage.classList.add('inactive');
    tournamentImage.classList.remove('inactive')
    circleOne.classList.remove('active-circle');
    circleTwo.classList.remove('active-circle');
    circleThree.classList.remove('active-circle');
    circleFour.classList.add('active-circle');

    const width = document.body.clientWidth;
    const heading = document.querySelector('.showcase-text h3');
    const circles = document.getElementById('circles');
  // Responsive
  if(width <= 1920){
    heading.style.fontSize = '3rem';
    heading.style.marginTop = '7rem';
    circles.style.marginTop = '7rem';
 }

  if(width <= 1600){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
 }

  if(width <= 1440){
    heading.style.marginTop = '5rem';
    circles.style.marginTop = '4rem';
  }

  if(width <= 1366){
    heading.style.fontSize = '2rem';
    heading.style.marginTop = '0.1rem';
  }

  if(width <= 912 && width > 768){
    showcaseText.style.marginTop = '20rem';
  }
}

//////// News Article Right Side ///////////////
function formatText() {
  const newText = 'Iga Swiatek dropped four points in a row in her US Open quarterfinal against Jessica Pegula by missing shots, some wildly. So with Pegula up by a break at 3-2. Swiatek walked over to sideline in the middle of a game to swap out her white racket for another one. The Arthur Ashe Stadium roof was open, the 70-degree air was as cool and dry as it has been during a hot, humid tournament, and Swiatek figured maybe she should try a tighter string tension to see whether that would help control the ball a little more. Whether that actually did the trick, or simply put Swiateks mind at ease, the move certainly swung the direction of the match. The No. 1-ranked Swiatek grabbed 14 of the next 15 points and, while closing things out was not easy, she reached her first semifinal at Flushing Meadows by pulling out a 6-3, 7-6 (4) victory over Pegula on Wednesday night "I don\'t know if it actually was the key or something," Swiatek said after a match filled with a combined 13 breaks of serve, 10 in the second set alone. "For sure, I wasn\'t thinking about the strings [anymore], and I just focused on the right stuff after the change." "I started missing everything for literally the rest of the set," Pegula said between sips from a can of Heineken. "It was definitely a huge momentum change. I think it helped her a lot. So it was a good move by her. ... I was just going for too much. The games kind of flew by." ';

const textLead = document.querySelector('.text-lead-2'); //text 182 + 177 char.

const arrText = newText.split('');

const width = document.body.clientWidth;
const leadText = arrText.slice(0,(width <= 912 && width > 820) ? 536 : (width <= 820) ? 400 : 800);
const leadJoined = leadText.join('');

const concated = leadJoined.concat(' ...');

const link = document.createElement('a')
link.setAttribute('href','article1.html')
link.appendChild(document.createTextNode('Read More'))
link.style.paddingLeft = '0.7rem';
link.style.color = '#55bada'

textLead.appendChild(document.createTextNode(concated));
textLead.appendChild(link)
}

 formatText();

////// News Article Left Side ////////////////
function formatTxt() {
  const newTxt = 'Spanish teenager Carlos Alcaraz reached his first major semi-final after beating Italy\'s Jannik Sinner in a US Open thriller which ended at a record latest time of 2.50am in New York. Alcaraz, 19, saved a match point before clinching an epic 6-3 6-7 (7-9) 6-7 (0-7) 7-5 6-3 win over 11th seed Sinner. The third seed will face Frances Tiafoe on Friday for a spot in Sunday\'s final. The American, 24, also plays in a first major semi-final after his 7-6 (7-3) 7-6 (7-0) 6-4 win over Andrey Rublev. "I still don\'t know how I did it. The level I played of high quality tennis. It\'s unbelievable," said Alcaraz, who is the youngest man to reach a Grand Slam semi-final since Rafael Nadal at the 2005 French Open. "I always say you have to believe in yourself all the time. Hope is the last thing you use. I believed in myself, my game." A first-time Grand Slam champion is already guaranteed in the men\'s singles at Flushing Meadows, with Norway\'s Casper Ruud and Russia\'s Karen Khachanov contesting the other semi-final. Alcaraz and 23-year-old Ruud also have a shot of becoming the new world number one as an intriguing tournament nears a conclusion';

const textLead = document.querySelector('.text-lead') // text lead 605 char.

const textArr = newTxt.split('')

const height = window.innerHeight;
const width = document.body.clientWidth;
const slicedTxt = textArr.slice(0,(width <= 912 && width > 820) ? 536 : (width <= 820) ? 400 : 800);
const joinedTxt = slicedTxt.join('');
const concatTxt = joinedTxt.concat(' ...');

const linked = document.createElement('a');
linked.setAttribute('href','article2.html');
linked.appendChild(document.createTextNode('Read More'));
linked.style.paddingLeft = '0.7rem';
linked.style.color = '#55bada'

textLead.appendChild(document.createTextNode(concatTxt));
textLead.appendChild(linked);

}

formatTxt();

// /// Match Preview ///////////
function formatPrevText() {
  const newPrevText = 'Berrettini with 196cm height and great serve, on the other hand we have Casper who has better form. Berrettini has more experiance on hard 126/62 comparing to Ruud who has 71/45. However Casper played more matches this season with better score on all surfaces and on hard court.On higher level Tournaments Ruud is also better. Mateo has lost in 1st round in Montreal and in Cincinnati. Berrettini past over the whole season on clay. Mateo\'s style of playing is good for fast surfaces and he won Queens on the grass.But this surface at US Open is more slower than it was in a past years and apart from that he won Queens he is not so constant like Casper is. Mateo reached QF in 2021,so till now he has defended all atp points from last year. Although Ruud had a tough match with Paul Tommy he has recoverd fast and beated Moutet without big problems. Summary Ruud is our favorite for this match.'
   
  const prevText = document.querySelector('.preview-text'); 
   // 383 char
   const splitedTxt = newPrevText.split('');
   const slicedTxt = splitedTxt.slice(0, 383);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','preview.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   link.style.color = '#55bada';

   prevText.appendChild(document.createTextNode(concatedTxt));
   prevText.appendChild(link)
}

formatPrevText();

function formatTourText() {
  const newTourText = 'The 2022 US Open was the 142nd edition of tennis\' US Open and the fourth and final tennis major (Grand Slam event) of the year. It was held on outdoor hard courts at the USTA Billie Jean King National Tennis Center in New York City. Daniil Medvedev and Emma Raducanu were the men\'s and women\'s singles defending champions. Raducanu lost to Alizé Cornet in the first round, while Medvedev lost to Nick Kyrgios in the fourth round.Carlos Alcaraz and Iga Świątek won the men\'s and women\'s singles titles, respectively. They became the first players, both born in the 2000s, to win the tournament\'s singles titles. The 2022 US Open was the 142nd consecutive edition of the tournament and took place at the USTA Billie Jean King National Tennis Center in Flushing Meadows–Corona Park of Queens in New York City, New York, United States. The tournament was played on hard courts and took place over a series of 15 courts with Laykold surface, including the three existing main showcourts – Arthur Ashe Stadium, Louis Armstrong Stadium and Grandstand. The tournament was run by the United States Tennis Association (USTA), supervised by the International Tennis Federation (ITF), and part of the 2022 ATP Tour (male tennis professionals) and the 2022 WTA Tour (female professional players) calendars under the Grand Slam category. The tournament consisted of both men\'s and women\'s singles and doubles draws, as singles draws remained in standard 128 person format in each category, as both doubles draws returned to standard 64 players. There were also singles and doubles events for both boys and girls (players under 18), which were part of the Grade A category of tournaments.'

  const tournamentText = document.querySelector('.tournament-text');  // 847 char
  const width = document.body.clientWidth;

  const splitedTxt = newTourText.split('');
  const slicedTxt = splitedTxt.slice(0, (width <= 414) ? 380 : 847);

  const joinedTxt = slicedTxt.join('');
  const concatTxt = joinedTxt.concat(' ...');

  const link = document.createElement('a');
  link.setAttribute('href','tournaments.html');
  link.appendChild(document.createTextNode('Read More'));
  link.style.paddingLeft = '0.7rem';
  link.style.color = '#55bada';

  tournamentText.appendChild(document.createTextNode(concatTxt));
  tournamentText.appendChild(link);
}

formatTourText();

console.log(window.innerWidth);
