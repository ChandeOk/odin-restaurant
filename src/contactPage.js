import { createHeader } from './mainPage';

const createContact = () => {
  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('contacts');
  const map = document.createElement('iframe');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364879.48898138694!2d57.12694570369194!3d81.60922531583942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453d01f3e9c7c023%3A0xf7857f36e4187984!2sOstrov%20Gogenloe!5e0!3m2!1sen!2sru!4v1657054759044!5m2!1sen!2sru';
  map.style.border = 0;
  map.setAttribute('allowfullscreen', '""');
  map.setAttribute('loading', 'lazy');
  map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

  const hours = document.createElement('div');
  hours.insertAdjacentHTML(
    'afterbegin',
    `<p>☎️+420420420420</p>
  <p>Mon: 00:00 - 00:04</p>
  <p>Tue: 00:00 - 00:02</p>
  <p>Wed: 00:00 - 00:00</p>
  <p>Thu: 00:00 - 00:04</p>
  <p>Fri: 00:00 - 00:02</p>
  <p>Sat: 00:00 - 00:00</p>
  <p>Sun: Nope</p>`
  );
  contactsContainer.appendChild(map);
  contactsContainer.appendChild(hours);

  return contactsContainer;
};

export default function createContactPage() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createContact());
}

/*
<div class="contacts">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364879.48898138694!2d57.12694570369194!3d81.60922531583942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453d01f3e9c7c023%3A0xf7857f36e4187984!2sOstrov%20Gogenloe!5e0!3m2!1sen!2sru!4v1657054759044!5m2!1sen!2sru"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <p>☎️+420420420420</p>
          <p>Mon: 00:00 - 00:04</p>
          <p>Tue: 00:00 - 00:02</p>
          <p>Wed: 00:00 - 00:00</p>
          <p>Thu: 00:00 - 00:04</p>
          <p>Fri: 00:00 - 00:02</p>
          <p>Sat: 00:00 - 00:00</p>
          <p>Sun: Nope</p>
        </div>
</div>
      */
