function scrollToElement(selector) {
  var el = document.querySelector(selector);
  el.scrollIntoView({ behavior: 'smooth' });
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

window.onload = function() {
  var homeBtn = document.querySelector('#home-btn');
  homeBtn && homeBtn.addEventListener('click', onClickHome);
  
  var servicesBtn = document.querySelector('#services-btn');
  servicesBtn && servicesBtn.addEventListener('click', onClickServices);

  var contactBtn = document.querySelector('#contact-btn');
  contactBtn && contactBtn.addEventListener('click', onClickContact);

  var contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', onSubmitContact);
}
