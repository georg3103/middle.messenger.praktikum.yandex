import layout from '../layout';
import profile from '../components/profile';
import profileEdit from '../components/profileEdit';
import avatar from '../components/avatar';
import button from '../components/button';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const layoutContent = [
  profile.render({
    href: 'index.html',
    profileMain: profileEdit.render({
      avatar: avatar.render({
        imgSrc: '',
        class: 'avatar--big profile-block__avatar avatar--edit',
        editText: 'Поменять аватар',
      }),
      inputList: profileEdit.data.fullData,
      button: button.render({ buttonText: 'Сохранить' }),
    }),
  }),
].join('');

const template = layout.render({
  ...layout.data.profile,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
