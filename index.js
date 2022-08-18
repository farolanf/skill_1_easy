function scrollToElement(selector) {
  var el = document.querySelector(selector);
  el.scrollIntoView({ behavior: 'smooth' });
}

function onClickMenu(e) {
  var el = document.querySelector('#sidebar');
  el.classList.toggle('sidebar-open');
}

function onClickHome(e) {
  e.preventDefault();
  scrollToElement('header');
}

function onClickServices(e) {
  e.preventDefault();
  scrollToElement('#services');
}

function onClickContact(e) {
  e.preventDefault();
  scrollToElement('#contact');
}

function onSubmitContact(e) {
  console.log('submit')
  e.preventDefault();
  alert('Your form has been sent!');
  window.location = '/';
}

function onClickOutsideCapture(e) {
  var sidebar = document.querySelector('#sidebar');
  if (sidebar) {
    if (!sidebar.contains(e.target) && !e.target.classList.contains('menu-btn')) {
      sidebar.classList.remove('sidebar-open');
    }
  }
}

window.onload = function() {
  window.addEventListener('click', onClickOutsideCapture, true);

  var menuBtn = document.querySelector('.menu-btn');
  menuBtn && menuBtn.addEventListener('click', onClickMenu);

  var homeBtn = document.querySelector('#home-btn');
  homeBtn && homeBtn.addEventListener('click', onClickHome);
  
  var servicesBtn = document.querySelector('#services-btn');
  servicesBtn && servicesBtn.addEventListener('click', onClickServices);

  var contactBtn = document.querySelector('#contact-btn');
  contactBtn && contactBtn.addEventListener('click', onClickContact);

  var contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', onSubmitContact);
}
