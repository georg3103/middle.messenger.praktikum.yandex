import layout from '../layout';
import form from '../components/form';
import field from '../components/field';
import button from '../components/button';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const content = form.data.registration
  .map((item) => field.render(item))
  .join('');

const buttonContent = button.render({ buttonText: 'Зарегистрироваться' });

const layoutContent = form.render({
  title: 'Регистрация',
  class: 'chat-form--registration',
  content,
  button: buttonContent,
  link: link.render({
    href: '/login.html',
    class: 'link--blue chat-form__link',
    linkName: 'Войти',
  }),
});

const template = layout.render({
  ...layout.data.enter,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
