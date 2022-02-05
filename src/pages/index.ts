import Layout, { data } from '../layout';

import Aside from '../components/aside';
import ChatContainer from '../components/chatContainer';
import ChatList, { data as chatListData } from '../components/chatList';
import ChatItem from '../components/chatItem';
import Avatar from '../components/avatar';
import Search from '../components/search';
import Link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const layoutContent = [
	new Aside({
		class: 'layout__aside',
		content: chatListData.map((item) => {
			const hasCount = item.countNewMessage > 0;
			return new ChatItem({
				...item,
				avatar: new Avatar({
					class: 'chat-item__avatar',
					imgSrc: item.imgSrc,
				}),
				hasCount,
				href: `${item.href}?id=${item.id}`,
			});
		}),
		contentTop: [
			new Link({
				href: '/profile.html',
				class: 'link--gray aside__link',
				linkName: 'Профиль',
			}),
			new Search({ text: 'Поиск' }),
		],
	}),
	new ChatContainer({
		class: 'layout__main',
		isEmpty: true,
	}),
];

const template = new Layout({
	...data.chat,
	content: layoutContent
});

renderInDOM(document.querySelector('#app'), template.getContent());
