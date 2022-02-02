import Layout, { data } from '../layout/index';

import Form, { data as formData } from '../components/form';
import Field from '../components/field';
import Button from '../components/button';
import Link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const template = new Layout({
  ...data.enter,
  content: new Form({
    title: 'Вход',
    class: 'chat-form--login',
    content: formData.login.map((item) => new Field(item)),
    button: new Button({ buttonText: 'Авторизоваться' }),
    link: new Link({
      href: '/registration.html',
      class: 'link--blue chat-form__link',
      linkName: 'Нет аккаунта?',
    }),
  }),
});

renderInDOM(document.querySelector('#app'), template.getContent());
