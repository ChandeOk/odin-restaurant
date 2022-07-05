// import initPage from './mainPage';
import createContactPage from './contactPage';
import { createNav, initPage } from './mainPage';
import createMenuPage from './menuPage';
createNav();
initPage();

const content = document.querySelector('#content');
const menuPageBtn = document.querySelector('.menu-page');
const mainPageBtn = document.querySelector('.main-page');
const contactPageBtn = document.querySelector('.contact-page');

const clearPage = () => {
  const allElementsArray = Array.from(content.querySelectorAll('*'));
  const mortalElements = allElementsArray.filter(
    (element) => element.dataset.id !== 'immortal'
  );
  mortalElements.forEach((element) => element.remove());
};

menuPageBtn.addEventListener('click', () => {
  clearPage();
  createMenuPage();
});

mainPageBtn.addEventListener('click', () => {
  clearPage();
  initPage();
});

contactPageBtn.addEventListener('click', () => {
  clearPage();
  createContactPage();
});
// createMenuPage();
console.log('WORKING');
