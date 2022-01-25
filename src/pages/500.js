import errorPage from '../components/errorPage';
import layout from '../layout';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const layoutContent = [
  errorPage.render({
    code: '500',
    text: 'Мы уже фиксим',
    link: link.render({
      href: '/index.html',
      class: 'link--blue chat-form__link',
      linkName: 'Назад к чатам',
    }),
  }),
].join('');

const template = layout.render({
  ...layout.data.error,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
