import layout from '../layout';
import profile from '../components/profile';
import profileInfo from '../components/profileInfo';
import avatar from '../components/avatar';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const links = [
  {
    href: '/edit.html',
    class: 'link--blue chat-form__link',
    linkName: 'Изменить данные',
  },
  {
    href: '/password.html',
    class: 'link--blue chat-form__link',
    linkName: 'Изменить пароль',
  },
  {
    href: '/login.html',
    class: 'link--red chat-form__link',
    linkName: 'Выйти',
  },
];

const layoutContent = [
  profile.render({
    href: 'index.html',
    profileMain: profileInfo.render({
      avatar: avatar.render({
        imgSrc: '',
        class: 'avatar--big profile-block__avatar avatar--edit',
        editText: 'Поменять аватар',
      }),
      name: 'Иван',
      inputList: profileInfo.data,
      links: links.map((item) => ({
        link: link.render(item),
      })),
    }),
  }),
].join('');

const template = layout.render({
  ...layout.data.profile,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
