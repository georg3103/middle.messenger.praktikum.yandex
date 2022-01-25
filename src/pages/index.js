import layout from '../layout';
import aside from '../components/aside';
import chatContainer from '../components/chatContainer';
import chatList from '../components/chatList';
import chatItem from '../components/chatItem';
import avatar from '../components/avatar';
import search from '../components/search';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const asideContentMain = () => chatList.render({
  contentList: chatList.data.map((item) => {
    const hasCount = item.countNewMessage > 0;
    return chatItem.render({
      ...item,
      avatar: avatar.render({
        class: 'chat-item__avatar',
        imgSrc: item.imgSrc,
      }),
      hasCount,
      href: `${item.href}?id=${item.id}`,
    });
  }),
});

const asideContentTop = () => [
  link.render({
    href: '/profile.html',
    class: 'link--gray aside__link',
    linkName: 'Профиль',
  }),
  search.render({ text: 'Поиск' }),
].join('');

const layoutContent = [
  aside.render({
    class: 'layout__aside',
    content: asideContentMain(),
    contentTop: asideContentTop(),
  }),
  chatContainer.render({
    class: 'layout__main',
    isEmpty: true,
  }),
].join('');

const template = layout.render({
  ...layout.data.chat,
  content: layoutContent,
});

renderInDOM(document.querySelector('#app'), template);
