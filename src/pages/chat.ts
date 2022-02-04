import Layout, { data } from '../layout';

import Aside from '../components/aside';
import ChatContainer from '../components/chatContainer';
import ChatList, { data as chatListData } from '../components/chatList';
import ChatItem from '../components/chatItem';
import Avatar from '../components/avatar';
import Search from '../components/search';
import Link from '../components/link';
import Header from '../components/header';
import Footer from '../components/footer';
import MessageList, { data as messageListData } from '../components/messageList';
import MessageItemText from '../components/messageItemText';
import MessageItemImg from '../components/messageItemImg';

import Modal from '../modules/modal';
import FormModule from '../modules/form';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const formService = new FormModule();

const asideContentMain = () => 
  chatListData.map((item) => {
    const hasCount = item.countNewMessage > 0;
    const avatarContent = new Avatar({
      class: 'chat-item__avatar',
      imgSrc: item.imgSrc,
    });
    return new ChatItem({
      avatar: avatarContent,
      ...item,
      hasCount,
      href: `${item.href}?id=${item.id}`,
    });
  });

const asideContentTop = () => [
  new Link({
    href: 'profile.html',
    class: 'link--gray aside__link',
    linkName: 'Профиль',
  }),
  new Search({ text: 'Поиск' }),
];

const mainContentHeader = () => new Header({
  avatar: new Avatar({
    class: 'header__avatar',
    imgSrc: '',
  }),
  name: 'Вадим',
});

const mainContentFooter = () => new Footer({
  events: {
    focusout: (event:Event) => {
      formService.inputEventHandler(event);
    },
    focusin: (event:Event) => {
      formService.inputEventHandler(event);
    },
    submit: (event:Event) => {
      formService.submit(event);
    },
  },
});

const messagesContent = () => {
  const compiledDateTime = new MessageItemText({
    isDataTime: true,
    time: messageListData[0].date,
    type: 'date-time',
  });

  const compiledMessage = messageListData[0].messages.map(({
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

    return hasImage ? new MessageItemImg(imageProps) : new MessageItemText(props);
  });

  return new MessageList({
    content: [
      compiledDateTime,
      ...compiledMessage,
    ]
  });
};

const mainContent = () => ({
  class: 'layout__main',
  isEmpty: false,
  contentHeader: mainContentHeader(),
  contentMain: messagesContent(),
  contentFooter: mainContentFooter(),
});

const layoutContent = [
  new Aside({
    class: 'layout__aside',
    content: asideContentMain(),
    contentTop: asideContentTop(),
  }),
  new ChatContainer(mainContent()),
];

const template = new Layout({
  ...data.chat,
  content: layoutContent,
});

Modal.init();

renderInDOM(document.querySelector('#app'), template.getContent());
