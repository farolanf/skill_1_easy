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

window.onload = function() {
  document.querySelector('#home-btn').addEventListener('click', onClickHome);
  document.querySelector('#services-btn').addEventListener('click', onClickServices);
  document.querySelector('#contact-btn').addEventListener('click', onClickContact);
}
