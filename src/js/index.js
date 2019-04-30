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