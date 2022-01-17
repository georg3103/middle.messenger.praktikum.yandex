import layout from '../layout';

import aside from '../components/aside';
import chatContainer from '../components/chatContainer';
import chatList from '../components/chatList';
import chatItem from '../components/chatItem';
import avatar from '../components/avatar';
import search from '../components/search';
import link from '../components/link';
import header from '../components/header';
import footer from '../components/footer';
import messageList from '../components/messageList';
import messageItemText from '../components/messageItemText';
import messageItemImg from '../components/messageItemImg';

import modal from '../modules/modal';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const asideContentMain = () => chatList.render({
  contentList: chatList.data.map((item) => {
    const hasCount = item.countNewMessage > 0;
    const avatarContent = avatar.render({
      class: 'chat-item__avatar',
      imgSrc: item.imgSrc,
    });
    return chatItem.render({
      avatar: avatarContent,
      ...item,
      hasCount,
      href: `${item.href}?id=${item.id}`,
    });
  }),
});

const asideContentTop = () => [
  link.render({
    href: 'profile.html',
    class: 'link--gray aside__link',
    linkName: 'Профиль',
  }),
  search.render({ text: 'Поиск' }),
].join('');

const mainContentHeader = () => header.render({
  avatar: avatar.render({
    class: 'header__avatar',
    imgSrc: '',
  }),
  name: 'Вадим',
});

const mainContentFooter = () => footer.render({});

const messagesContent = () => {
  const compiledDateTime = messageItemText.render({
    isDataTime: true,
    time: messageList.data[0].date,
    type: 'date-time',
  });

  const compiledMessage = messageList.data[0].messages.map(({
    type, text, time, imgSrc, seen,
  }) => {
    const hasImage = !!imgSrc;

    const imageProps = {
      imgSrc,
      time,
    };

    const props = {
      message: text,
      time,
      type,
      seen,
    };

    const ctx = hasImage ? imageProps : props;
    return messageItemImg.render(ctx);
  }).join('');

  return messageList.render({ content: [compiledDateTime, compiledMessage].join('') });
};

const mainContent = () => ({
  class: 'layout__main',
  isEmpty: false,
  contentHeader: mainContentHeader(),
  contentMain: messagesContent(),
  contentFooter: mainContentFooter(),
});

const layoutContent = [
  aside.render({
    class: 'layout__aside',
    content: asideContentMain(),
    contentTop: asideContentTop(),
  }),
  chatContainer.render(mainContent()),
].join('');

const template = layout.render({
  ...layout.data.chat,
  content: layoutContent,
});

modal.init();

renderInDOM(document.querySelector('#app'), template);
