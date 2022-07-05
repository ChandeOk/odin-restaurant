import { createNav } from './mainPage';

const createDescription = () => {
  const descriptionContainer = document.createElement('div');
  const description = document.createElement('p');
  description.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit...';
  descriptionContainer.appendChild(description);
  return descriptionContainer;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  for (let i = 0; i < 6; i++) {
    overlay.appendChild(createDescription());
  }
  return overlay;
};

const createMenu = () => {
  const menu = document.createElement('main');
  menu.appendChild(createOverlay());
  menu.classList.add('menu');
  let imgNum = 1;

  for (let i = 0; i < 6; i++) {
    if (imgNum > 3) imgNum = 1;
    const product = document.createElement('figure');
    const image = document.createElement('img');
    image.src = `./imgs/${imgNum}.jpg`;
    imgNum++;

    product.appendChild(image);
    menu.appendChild(product);
  }
  return menu;
};

export default function createMenuPage() {
  const content = document.querySelector('#content');
  // content.appendChild(createNav());
  content.appendChild(createMenu());
}
/*<main class="menu">
        <div class="overlay">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              consectetur adipisicing elit...
            </p>
          </div>
        </div>
        <figure>
          <img src="../src/1.jpg" alt="pasta" />
        </figure>
        <figure>
          <img src="../src/2.jpg" alt="pasta" />
        </figure>
        <figure>
          <img src="../src/3.jpg" alt="pasta" />
        </figure>
        <figure>
          <img src="../src/3.jpg" alt="pasta" />
        </figure>
        <figure>
          <img src="../src/1.jpg" alt="pasta" />
        </figure>
        <figure>
          <img src="../src/2.jpg" alt="pasta" />
        </figure>
      </main>
*/
