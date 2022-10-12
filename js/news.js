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

// Articles
const boxes = document.querySelectorAll('.box');

function formatArticleOne() {
  const newText = 'On a historic evening at the US Open, Carlos Alcaraz overcame Casper Ruud 6-4, 2-6, 7-6(1), 6-3 to clinch his first Grand Slam trophy and secure the No. 1 Pepperstone ATP Ranking. With the world watching in a winner-takes-all final, the Spaniard hit with explosive power and demonstrated impressive touch around the net, winning 34/45 (76 per cent) of net points to outlast the Norwegian on Arthur Ashe Stadium. The 19-year-old opened his shoulders, played aggressively and handled the pressure in the fourth set to earn his 51st tour-level win of the season after three hours and 20 minutes.An emotional Alcaraz dropped to the floor following his historic victory as he received roars of support from the New York crowd. He then climbed up to his player box to embrace his team, including coach Juan Carlos Ferrero.“It is something I have dreamt of since I was a kid. To be No. 1 in the world, to be champion of a Grand Slam, is something I have worked really, really hard [for],” Alcaraz said during the trophy ceremony. “It is tough to talk right now, I have lots of emotions. This is something I have tried to achieve. All the hard work I have done with my team and my family. I am just 19 years old, all the tough decisions have been with my parents and my team as well. It is something that is really special for me." Alcaraz won three consecutive five-set matches to reach his first Grand Slam final, spending 20 hours and 19 minutes on court across six matches en route to the final. However, he showed little sign of tiredness to defeat Ruud. “There is no time to be tired in the final rounds of a Grand Slam...You have to be ready and give everything you have inside. It is something I work really hard for," Alcaraz said.  The 19-year-old has become the youngest Grand Slam champion since countryman Rafael Nadal, 19, lifted the trophy at Roland Garros in 2005, while he is the youngest US Open titlist since Pete Sampras, 19, in 1990.';

   const articleOne = document.querySelector('.article-1');    // 287 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 287);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article1.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   
   boxes[0].classList.add('atp');
   if(boxes[0].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[0].classList.contains('wta')){
    link.style.color = '#55bada';
   }

   if(width <= 912 && width > 540){
    boxes[0].classList.remove('atp');
    link.style.color = '#55bada';
   }

   articleOne.appendChild(document.createTextNode(concatedTxt));
   articleOne.appendChild(link)
}

formatArticleOne();

function formatArticleTwo() {
  const newText = 'The top seed captured her first US Open singles title, second Grand Slam title of 2022, and third major overall, on Saturday in Arthur Ashe Stadium with a 6-2, 7-6(5) win over No. 5 seed Ons Jabeur. Having also won Roland Garros this spring, the 21-year-old Pole is the first woman to win two Grand Slam singles titles in the same season since Angelique Kerber triumphed at the Australian Open and US Open in 2016. "It\'s hard to describe it in one sentence. But I\'m just super proud of myself because it wasn\'t easy match, even though at the beginning I was dominating, I knew it\'s going to be tight and I knew that Ons is going to use any mistake that I\'m going to make. I didn\'t want to back out," Swiatek said in victory."In the second set, it got really physical action and I\'m happy  that I got my level of energy up little bit more so I could finish and be really precise in those moments where I needed that. We played on a really good level today." Swiatek dropped just four games to Jabeur when they met for the title in Rome in May—their last meeting before Saturday’s final—and her similarly-dominant start in Ashe seemed it would set the tone for things to come: Swiatek won 12 of the first 14 points for a 3-0 lead. A sizzling spurt for Jabeur in the next two games—she hit five clean winners in 12 points—proved just a blip on Swiatek’s radar. Landing a staggering 90% of her first serves in the set, the top seed also broke serve twice more to wrap up the opener in exactly half an hour. The ninth game—the first of the second set—was the first of the match to go to deuce. But back-to-back winners—two of Swiatek’s 18 for the match—got her past the threat. For a while, the second set looked like a carbon-copy of the first: Swiatek opened up a 3-0 lead, and even had three break points for 4-0, before Jabeur held serve and broke to get back to 3-2.'

   const articleTwo = document.querySelector('.article-2');    // 311 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 311);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article2.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   link.style.color = '#55bada';

   if(width <= 912 && width > 540){
    boxes[1].classList.add('wta');
   }

   articleTwo.appendChild(document.createTextNode(concatedTxt));
   articleTwo.appendChild(link);

}

formatArticleTwo();

function formatArticleThree() {
  const newText = 'Alcaraz defeated Casper Ruud 6-4, 2-6, 7-6(1), 6-3 in the US Open final on Sunday, due in large part to him hitting a slew of run-around forehands standing in the Ad court to counter the Norwegian’s full-court press towards his backhand. Ruud played a tactically savvy final by flattening out his high, heavy groundstrokes and ripping them repeatedly at Alcaraz’s backhand wing. It almost worked. Ruud won a higher percentage of baseline points: 45 per cent (64/141) to Alcaraz’s 43 per cent (59/136). Alcaraz’s tenacity to upgrade to forehands standing in the Ad court saw him turn 97 groundstrokes from backhands into forehands. In a match decided by only five points (127-122), this specific battle was as important as any other to Alcaraz in capturing his first Grand Slam title. On the surface, Alcaraz hit many more forehands than backhands. But once you examine where Alcaraz was standing when he hit them, you get a better idea of a hidden layer of his successful match strategy. Ruud made Alcaraz hit 125 backhands, and if Ruud had his way, the 97 run-around forehands would also have been Alcaraz backhands. If that were the case, Ruud would surely have secured both hands on the silver trophy. Ruud basically threw the kitchen sink at Alcaraz’s backhand through the Ad court.'

   const articleThree = document.querySelector('.article-3');    // 288 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 288);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article3.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   
   boxes[2].classList.add('atp');
   if(boxes[2].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[2].classList.contains('wta')){
    link.style.color = '#55bada';
   }

   articleThree.appendChild(document.createTextNode(concatedTxt));
   articleThree.appendChild(link)
}

formatArticleThree();

function formatArticleFour() {
  const newText = 'Everything about Alcaraz just looks destined for greatness. He’s a phenomenal athlete, an aggressive all-courter armed with astounding variety, more physically and mentally fit than his 19 years. And now he competes to become the first man to rise to No. 1 after the US Open since his coach Juan Carlos Ferrero in 2003. The only question was whether the teenager was ready to translate all that potential onto the Grand Slam stage; after disappointing exits from Roland Garros and Wimbledon, the Spaniard has proven that hard courts may indeed be his best surface, rewarding his pace and athleticism through six matches. A technical descendent of the Big 3, Alcaraz has proven equally durable over the last two weeks, playing three late-night five-setters in a row to knock out Marin Cilic, Jannik Sinner—avenging his Wimbledon defeat—and Frances Tiafoe to at last reach his first major final.'

 // 239 char
 const articleFour = document.querySelector('.article-4');    // 239 char
  
 const splitedTxt = newText.split('');
 const slicedTxt = splitedTxt.slice(0, 239);
 const joinedTxt = slicedTxt.join('')
 const concatedTxt = joinedTxt.concat(' ...');

 const link = document.createElement('a');
 link.setAttribute('href','article4.html');
 link.appendChild(document.createTextNode('Read More'));
 link.style.paddingLeft = '0.7rem';
 link.style.color = '#55bada';

 articleFour.appendChild(document.createTextNode(concatedTxt));
 articleFour.appendChild(link)
}

formatArticleFour();

function formatArticleFive() {
  const newText = 'The 17-year-old athlete, who had previously won two junior doubles Grand Slam titles, was the No. 10 seed going into the tournament, which was held Sept. 4–10 at the USTA Billie Jean King National Tennis Center. The Rafa Nadal Academy scholar swept all her matches in the tournament before defeating Czech No. 2 seed Lucie Havlickova 6-2, 6-4, in the final match on Saturday.Before reaching the final, Eala defeated Canadian Annabelle Xu 6-3, 6-0 in the first round; Slovakian Nina Vargova 6-2, 6-3 in the second round; and Australian No. 8 seed Taylah Preston 6-2, 7-6(1) in the third round.Her momentum continued in her succeeding matches, defeating Russian No. 14 seed Mirra Andreeva 6-4, 6-0 in the quarterfinals and Canadian No. 9 seed Victoria Mboko 6-1, 7-6(5) in the semifinals.After her match with Havlickova, Eala ran to the stands to celebrate with coach Adrien Vaseux of the Rafa Nadal Academy, her parents Michael and Rizza Eala and her brother Miko, who also plays on the International Tennis Federation (ITF) Tour and for Penn State in the United States NCAA Division 1.“I wholeheartedly fought for this not only for myself but also to help with the future of Philippine tennis. So, this is not just my victory, but the victory of all of us,” Eala said in Filipino during the awarding of her US Open girls’ singles championship trophy.'

const articleFive = document.querySelector('.article-5');    // 242 char
  
 const splitedTxt = newText.split('');
 const slicedTxt = splitedTxt.slice(0, 242);
 const joinedTxt = slicedTxt.join('')
 const concatedTxt = joinedTxt.concat(' ...');

 const link = document.createElement('a');
 link.setAttribute('href','article5.html');
 link.appendChild(document.createTextNode('Read More'));
 link.style.paddingLeft = '0.7rem';
 
 boxes[4].classList.add('wta');
   if(boxes[4].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[4].classList.contains('wta')){
    link.style.color = '#55bada';
   }

  if(width <= 912 && width > 540){
    boxes[4].classList.remove('wta');
  }

 articleFive.appendChild(document.createTextNode(concatedTxt));
 articleFive.appendChild(link)
}

formatArticleFive();

function formatArticleSix() {
  const newText = 'This weekend the us Open tennis tournament reaches its climax, with the women’s and men’s finals. Yet for many fans, this year’s highlight has already come and gone. That was Serena Williams’s last match at Flushing Meadows, and possibly the last of her career: a valiant third-round defeat to Ajla Tomljanovic on September 2nd. It drew a peak of almost 7m viewers on espn, a record for tennis on the American sports network. Ms Williams has not yet confirmed that she is hanging up her racket, but said in August that she would be “evolving” away from the sport. During the us Open, fellow players and the press have gushed their tributes—understandably, given her achievements. For every tennis player, winning even one grand-slam event is a dream. When Ms Williams first started playing, it was hers too. She just wanted to claim the us Open. She achieved that at only 17 years of age, in 1999, and went on to win it five more times. Add a further 17 grand-slam titles, at the Australian Open, the French Open and Wimbledon, and her tally of 23 is more than anyone else’s—man or woman—since tennis admitted professionals to its top tournaments in 1968.'

  // 239 char
 const articleSix = document.querySelector('.article-6');    // 239 char
  
 const splitedTxt = newText.split('');
 const slicedTxt = splitedTxt.slice(0, 239);
 const joinedTxt = slicedTxt.join('')
 const concatedTxt = joinedTxt.concat(' ...');

 const link = document.createElement('a');
 link.setAttribute('href','article4.html');
 link.appendChild(document.createTextNode('Read More'));
 link.style.paddingLeft = '0.7rem';
 link.style.color = '#55bada';

 if(width <= 912 && width > 540){
  boxes[5].classList.add('wta');
 }

 articleSix.appendChild(document.createTextNode(concatedTxt));
 articleSix.appendChild(link)
}

formatArticleSix();

function formatArticleSeven() {
  const newText = 'The top 8 ranked players in this calendar year will play in the WTA finals in Texas. The event is moving away from Mexico and will be played in the US with several American making big steps towards securing an appearance there. Coco Gauff is among them as she moved up two spots to number 4 overall which is pretty important if she wants to be there.Another one is Jessica Pegula who moved up one spot to number 3 as she continues to secure her place at the event. On top, it\'s still Iga Swiatek and Ons Jabeur and both of them are pretty much confirmed for this event at this point.Aryna Sabalenka has also made a pretty big step moving into number 6 currently. The big names missing from the top 8 are Maria Sakkari who is 9th, Paula Badosa who is 11th and Garbine Muguruza who won the event last year. She is currently 52nd in the race.'

  const articleSeven = document.querySelector('.article-7');    // 287 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 287);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article7.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   
   boxes[6].classList.add('wta');
   if(boxes[6].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[6].classList.contains('wta')){
    link.style.color = '#55bada';
   }

   articleSeven.appendChild(document.createTextNode(concatedTxt));
   articleSeven.appendChild(link)
}

formatArticleSeven();

function formatArticleEight() {
  const newText = 'Nick Kyrgios has come under fire for his actions in the trophy ceremony at Wimbledon on Sunday after a final act of defiance against officials.Djokovic defied an early barrage and 30 aces from Kyrgios to clinch a seventh Wimbledon crown and 21st grand slam title with a 4-6 6-3 6-4 7-6 (7-3) victory.However it were the actions of Kyrgios that stole the limelight after the final, most notably his decision to wear a red cap during the trophy presentation.Kyrgios had rowed with a reporter earlier in the tournament after wearing the hat following his third-round victory over Brandon Nakashima.The red cap is a clear breach of Wimbledon\'s all-white dress code, but the Aussie clearly didn\'t care about breaking the rules after Sunday\'s final.'

  const articleEight = document.querySelector('.article-8');    // 311 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 300);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article8.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   link.style.color = '#55bada';

   articleEight.appendChild(document.createTextNode(concatedTxt));
   articleEight.appendChild(link)
}

formatArticleEight();

function formatArticleNine() {
  const newText = 'Maria Sharapova was always a fierce competitor on the court and she\'s not one to shy away from speaking her mind off the court either.A polarizing player that captured the world\'s attention early in her career, Sharapova enjoyed a pretty successful one. Not a legendary one like many have thought but the Russian thinks it\'s not only her fault. The Russian played in a fairly competitive era with many great players and she confirmed that stance once more while being a guest at the US Open.“No disrespect to this generation but when I played, the competition was harder. A 40 years old Serena Williams beating the current world #2 is a great testament to this fact.”'

   const articleNine = document.querySelector('.article-9');    // 288 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 288);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article9.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   
   boxes[8].classList.add('wta');
   if(boxes[8].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[8].classList.contains('wta')){
    link.style.color = '#55bada';
   }

   if(width <= 912 && width > 540){
    boxes[8].classList.remove('wta');
   }

   articleNine.appendChild(document.createTextNode(concatedTxt));
   articleNine.appendChild(link);
}

formatArticleNine();

function formatArticleTen() {
  const newText = 'Matteo Berrettini returned to Italy after the defeat to Casper Ruud in the quarter-finals of the US Open. In mind, the Davis Cup. "To redeem me. The team is ready," he explained. In the mind the Davis Cup, in the heart the elimination at the hands of Casper Ruud from the quarter-finals of the US Open.A 2022 not easy for Berrettini, who went through the successes on the grass in Stuttgart and the Queen\'s, but also for great bitterness, such as the forfeit required at Wimbledon. Back in Italy, Berrettini witnessed Italy\'s victory over Great Britain at Eurobasket 2022 on Thursday evening, in a Forum in Assago which dedicated a standing ovation full of affection to him The goals, however, are always a stimulus, as the player confirms: "It was a complicated year, with difficult moments. Now I want to use Davis to redeem myself, the team is ready, and Jannik played a great match with Alcaraz at New York.';

  const articleTen = document.querySelector('.article-10');    // 239 char
  
 const splitedTxt = newText.split('');
 const slicedTxt = splitedTxt.slice(0, 239);
 const joinedTxt = slicedTxt.join('')
 const concatedTxt = joinedTxt.concat(' ...');

 const link = document.createElement('a');
 link.setAttribute('href','article10.html');
 link.appendChild(document.createTextNode('Read More'));
 link.style.paddingLeft = '0.7rem';
 link.style.color = '#55bada';

 if(width <= 912 && width > 540){
  boxes[9].classList.add('atp');
 }

 if(boxes[9].classList.contains('atp')){
  link.style.color = '#333';
 }

 articleTen.appendChild(document.createTextNode(concatedTxt));
 articleTen.appendChild(link)
}

formatArticleTen();

function formatArticleEleven() {
  const newText = 'Stefanos Tsitsipas has withdrawn from the NOVENTI OPEN in Halle due to personal reasons. The Greek had been scheduled to play singles and doubles alongside his younger brother, Petros Tsitsipas.Tsitsipas is replaced in the singles draw by German Yannick Hanfmann, and Hanfmann and Dominik Koepfer will take the Tsitsipas brothers’ places in the doubles field.The 22-year-old star reached his first Grand Slam final at Roland Garros. Tsitsipas took a two-set lead against World No. 1 Novak Djokovic on Sunday to move to the brink of lifting the Coupe des Mousquetaires, but he fell in five sets.The top seed in Halle is World No. 2 Daniil Medvedev, who will begin his tournament on Tuesday against Jan-Lennard Struff.';
  
 const articleEleven = document.querySelector('.article-11');    // 242 char
  
 const splitedTxt = newText.split('');
 const slicedTxt = splitedTxt.slice(0, 242);
 const joinedTxt = slicedTxt.join('')
 const concatedTxt = joinedTxt.concat(' ...');

 const link = document.createElement('a');
 link.setAttribute('href','article11.html');
 link.appendChild(document.createTextNode('Read More'));
 link.style.paddingLeft = '0.7rem';
 
 boxes[10].classList.add('atp');
   if(boxes[10].classList.contains('atp')){
    link.style.color = '#333';
   }
   if(boxes[10].classList.contains('wta')){
    link.style.color = '#55bada';
   }

 articleEleven.appendChild(document.createTextNode(concatedTxt));
 articleEleven.appendChild(link)
}

formatArticleEleven();

function formatArticleTwelve() {
   const newText = 'Anett Kontaveit is playing some of her best tennis — and some of the best tennis on the circuit — right now.The 26-year-old Estonian superstar has risen to world No. 2 in to the WTA singles rankings, thanks to incredible form, a new coach, and a series of victories that brought her to the championship match of last year\'s WTA Finals.Now, Kontaveit is preparing to play the most closely watched match of her career: a second-round US Open meeting against none other than Serena Williams. Wednesday night\'s battle at Arthur Ashe Stadium could very well be the final singles match of 23-time Grand Slam champion\'s illustrious tennis career — a reality that makes Kontaveit believe she is "absolutely" the underdog, despite 400 players separating her from Williams in the rankings.';

   const articleTwelve = document.querySelector('.article-12');    // 287 char
  
   const splitedTxt = newText.split('');
   const slicedTxt = splitedTxt.slice(0, 287);
   const joinedTxt = slicedTxt.join('')
   const concatedTxt = joinedTxt.concat(' ...');

   const link = document.createElement('a');
   link.setAttribute('href','article12.html');
   link.appendChild(document.createTextNode('Read More'));
   link.style.paddingLeft = '0.7rem';
   link.style.color = '#55bada';

   articleTwelve.appendChild(document.createTextNode(concatedTxt));
   articleTwelve.appendChild(link)
}

formatArticleTwelve();


