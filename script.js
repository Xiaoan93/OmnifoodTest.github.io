const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
})

// smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');
    // console.log(href);

    if(href === "#"){
      window.scrollTo({
        top:0,
        behavior:"smooth",
      });
    }

    //scroll to other links
    if(href!== "#" && href.startsWith('#')){
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    //Close mobile nav
    if(link.classList.contains('main-nav-link')){
      headerEl.classList.toggle('nav-open');
    }
  });
});

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
  function(entries){
  const ent = entries[0];
  console.log(ent);
  if(!ent.isIntersecting===true){
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting){
    document.body.classList.remove('sticky');
  }

  
}, {
  //In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px',
})
obs.observe(sectionHeroEl);

