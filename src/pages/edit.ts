import Layout, { data } from '../layout/index';

import Profile from '../components/profile';
import ProfileEdit, { data as profileEditData } from '../components/profileEdit';
import Avatar from '../components/avatar';
import Button from '../components/button';

import FormModule from '../modules/form';

import renderInDOM from '../utils/renderInDOM';

import '../css/index.css';

const formService = new FormModule();

const template = new Layout({
	type: data.profile.type,
	content: new Profile({
		href: 'index.html',
		profileMain: new ProfileEdit({
			avatar: new Avatar({
				imgSrc: '',
				class: 'avatar--big profile-block__avatar avatar--edit',
				editText: 'Поменять аватар',
			}),
			inputList: profileEditData.fullData,
			button: new Button({
				buttonText: 'Сохранить',
			}),
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
		}),
	}),
});

renderInDOM(document.querySelector('#app'), template.getContent());
