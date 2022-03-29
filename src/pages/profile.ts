import Layout, { data } from '../layout/index';

import Profile from '../components/profile';
import ProfileInfo, { data as profileInfoData } from '../components/profileInfo';
import Avatar from '../components/avatar';
import Button from '../components/button';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';
import Link from '../components/link';

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

const template = new Layout({
  type: data.profile.type,
  content: new Profile({
    href: 'index.html',
    profileMain: new ProfileInfo({
      avatar: new Avatar({
        imgSrc: '',
        class: 'avatar--big profile-block__avatar avatar--edit',
        editText: 'Поменять аватар',
      }),
      name: 'Иван',
      inputList: profileInfoData,
      button: new Button({
        buttonText: 'Сохранить',
      }),
      links: links.map(item => new Link(item))
    }),
  }),
});

renderInDOM(document.querySelector('#app'), template.getContent());
