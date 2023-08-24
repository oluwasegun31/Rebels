// toggle navbar
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.arrow-icon');
const navItem = document.querySelector('.nav-items')

menuBtn.addEventListener('click', ()=> {
    navItem.style.left = 0;
    // gsap animation to do the animation for mobile view
    gsap.from('.nav-items p, .nav-items button', {x: 550, duration: 0.5, ease: 'power3.out', delay: 0.4, stagger: 0.1})
})
closeBtn.addEventListener('click', ()=> {
    navItem.style.left = '-300%';
})

//GSAP

// loader timeline
const loaderTimeline = gsap.timeline();
loaderTimeline
  .to('.page-Loader > img', { scale: 0.5, duration: 0.4, ease: 'power3.out', delay: 0.5 })
  .to('.page-Loader > img', { scale: 1, duration: 0.4, ease: 'power3.out' })
  .to('.page-Loader > img', { scale: 0, duration: 0.4, ease: 'power3.out' })
  .to('.page-Loader, .page-LoaderConatiner2',{width: 0, duration: 1, ease: 'power3.out', stagger: 0.1} )

// navbar transitions
gsap.from('.logo > img, .logo > p', {y: 50, duration: 0.5, ease: 'power3.out', delay: 2.7, stagger: 0.1})
gsap.from('.nav-items p', {y: 50, duration: 0.5, ease: 'power3.out', delay: 2, stagger: 0.1})

//header transitions
const headerTxt = new SplitType('header h1', { types: 'words' });
gsap.from(headerTxt.words, {scale: 0, duration: 0.4, ease: 'power3.out', delay: 2.5, stagger: 0.1,});
gsap.to('header > img', {
  width: 10,
  ease: 'power3.out',
  scrollTrigger:{
    trigger: 'header > img',
    start: '100px 0%',
    end: 'bottom 10%%',
    scrub: 2
  }
})

//values transition
gsap.from('.vision > h1', {
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out',
  scrollTrigger:{
    trigger: '.vision > h1',
    start: 'top 70%',
    end: 'bottom 70%',
  }
})
gsap.from('.writeup > .item h4, .writeup > .item p', {
  x: 500,
  duration: 0.5,
  ease: 'power3.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.writeup > .item',
    start: 'top 70%',
    end: 'bottom 70%',
    scrub: 3,
  }
})

// Team Tranistion
gsap.from('.team-writeup > p', {
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.team-writeup > p',
    start: 'top 80%',
    end: 'bottom 70%'
  }
})
gsap.from('.img-detail > img', {
  width: 0,
  duration: 0.5,
  ease: 'power3.out',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.img-detail',
    start: 'top 80%',
    end: 'bottom 70%',
    scrub: 3
  }
})

//Footer Transitions
gsap.from('.foot-logo > img', {
  opacity: 0,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.foot-logo',
    start: 'top 80%',
    end: 'bottom 70%',
    scrub: 3,
  }
})
gsap.from('.foot-logo > p',{
  y: 200,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.foot-logo',
    start: 'top 80%',
    end: 'bottom 70%',
    scrub: 3,
  }
})
gsap.from('.foot-input > p, .foot-input > input, .foot-input > img', {
  x: -300,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.foot-input',
    start: 'top 80%',
    end: 'bottom 85%',
    scrub: 3
  }
})

gsap.from('.pages > h5, .pages > p, .socials > h5, .socials > p', {
  x: -300,
  ease: 'power3.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.socials',
    start: 'top 80%',
    end: 'bottom 90%',
    scrub: 3,
  }
})