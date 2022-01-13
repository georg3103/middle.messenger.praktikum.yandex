import layout from '../layout';
import form from '../components/form';
import field from '../components/field';
import button from '../components/button';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const content = form.data.login
  .map((item) => field.render(item))
  .join('');

const buttonContent = button.render({ buttonText: 'Авторизоваться' });

const layoutContent = form.render({
  title: 'Вход',
  class: 'chat-form--login',
  content,
  button: buttonContent,
  link: link.render({
    href: '/registration.html',
    class: 'link--blue chat-form__link',
    linkName: 'Нет аккаунта?',
  }),
});

const template = layout.render({
  ...layout.data.enter,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
