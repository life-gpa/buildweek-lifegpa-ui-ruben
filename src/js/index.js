class Navigation {
  constructor(element) {
    this.element = element;
    
    this.navControl = document.querySelector('#hamburger');

    this.navControl.addEventListener('click', _ => this.showNav());
  }

  showNav() {
    this.element.classList.toggle('hidden'); 
  }
}

const nav = document.querySelectorAll('.navigation')
                    .forEach(nav => new Navigation(nav));

const goto = (target, location) => {
  target.preventDefault();
  target.stopPropagation();

  window.location.href = location;
};

const reg = document.querySelector('#register'),
      log = document.querySelector('#login');

reg.addEventListener('click', e => goto(e, 'https://nifty-snyder-6380f8.netlify.com/SignUp'));
log.addEventListener('click', e => goto(e, 'https://nifty-snyder-6380f8.netlify.com/Login'));