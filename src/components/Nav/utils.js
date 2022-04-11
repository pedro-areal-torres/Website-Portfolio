// Change active menu select on nav bar on user scroll
export const scrollActive = () => {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll('section[id]');
  const windowLocation = window.location.href;

  sections.forEach((current) => {
    let paddingPxl = 96;
    let sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop,
      sectionId = current.getAttribute('id');

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight + paddingPxl
    ) {
      document.getElementById('nav__' + sectionId).classList.add('active');
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document.getElementById('nav__' + sectionId).classList.remove('active');
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
};

export const showHideNav = () => {
  const navMenu = document.getElementById('nav-menu'),
  navToogle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
  
  //Show Menu
  if (navToogle) {
    console.log("TOOG")
    navToogle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }
  
  //Hide Menu
  if (navClose) {
    console.log("CLOSE")
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
};
