import ErrorPage from '../components/errorPage'
import Link from '../components/link';
import Layout, { data } from '../layout/index'

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const template = new Layout({
	type: data.error.type,
	content: new ErrorPage({
		code: '404',
		text: 'Не туда попал',
		link: new Link({
			href: '/index.html',
			class: 'link--blue chat-form__link',
			linkName: 'Назад к чатам',
		})
	})
});

renderInDOM(document.querySelector('#app'), template.getContent());
