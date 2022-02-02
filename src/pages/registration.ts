import Layout, { data } from '../layout/index';

import Form, { data as formData } from '../components/form';
import Field from '../components/field';
import Button from '../components/button';
import Link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const template = new Layout({
  ...data.profile,
  content: new Form({
    title: 'Регистрация',
    class: 'chat-form--registration',
    content: formData.registration.map((item) => new Field(item)),
    button: new Button({ buttonText: 'Зарегистрироваться' }),
    link: new Link({
      href: '/login.html',
      class: 'link--blue chat-form__link',
      linkName: 'Войти',
    }),
  })
});

renderInDOM(document.querySelector('#app'), template.getContent());
