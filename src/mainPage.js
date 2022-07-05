const createNav = () => {
  const nav = document.createElement('nav');
  const mainBtn = document.createElement('div');
  mainBtn.classList.add('main-page');
  mainBtn.textContent = 'Main';
  mainBtn.setAttribute('data-id', 'immortal');
  const menuBtn = document.createElement('div');
  menuBtn.classList.add('menu-page');
  menuBtn.textContent = 'Menu';
  menuBtn.setAttribute('data-id', 'immortal');
  const contactBtn = document.createElement('div');
  contactBtn.classList.add('contact-page');
  contactBtn.textContent = 'Contact';
  contactBtn.setAttribute('data-id', 'immortal');
  const btns = [mainBtn, menuBtn, contactBtn];
  btns.forEach((btn) => nav.appendChild(btn));
  nav.setAttribute('data-id', 'immortal');

  document.querySelector('#content').appendChild(nav);
  return nav;
};

const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('left-side');
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'Bolognese';
  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent =
    'Best Pasta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium obcaecati nulla praesentium soluta dignissimos beatae suscipit aliquam modi, sapiente optio tenetur odit nobis ratione dicta!';

  header.appendChild(title);
  header.appendChild(description);
  return header;
};

const initPage = () => {
  const content = document.querySelector('#content');
  // content.appendChild(createNav());
  content.appendChild(createHeader());
  console.log('wtf');
};

export { createNav, initPage, createHeader };
/* 
      <nav>
        <div class="main-page">Main</div>
        <div class="menu-page">Menu</div>
        <div class="contact-page">Contact</div>
      </nav>
      <header class="left-side">
        <div class="title">Bolognese</div>
        <div class="description">
          Best Pasta! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Laudantium obcaecati nulla praesentium soluta dignissimos beatae
          suscipit aliquam modi, sapiente optio tenetur odit nobis ratione
          dicta!
        </div>
      </header>
*/
