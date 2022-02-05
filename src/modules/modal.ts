import Modal, { data } from '../components/modal';
import ModalContainer from '../components/modalContainer';
import Field from '../components/field';
import Link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

const template = new Modal({
	contentList: [
		new ModalContainer({
			id: data.addUser.id,
			...data.addUser,
			contentMain: new Field({
				label: 'Логин',
				name: 'login',
				type: 'text',
			}),
		}),
		new ModalContainer({
			id: data.removeUser.id,
			...data.removeUser,
			contentMain: new Field({
				label: 'Логин',
				name: 'login',
				type: 'text',
			}),
		}),
		new ModalContainer({
			id: data.uploadFile.id,
			...data.uploadFile,
			contentMain: new Link({
				linkName: 'Выбрать файл на компьютере',
				class: 'link--blue chat-form__link link--modal',
			}),
		}),
	]
});

const renderModal = (): void => {
	renderInDOM(document.querySelector('#modal'), template.getContent());
};

const openModal = (id: string): void => {
	const $modal: HTMLElement = document.querySelector('.modal');
	const $modalContent: HTMLElement = document.querySelector(`.modal__content[data-id='${id}']`);

	if (!$modal && !$modalContent) return;

	$modal.hidden = false;
	$modalContent.hidden = false;
};

const closeModal = (id: string): void => {
	const $modal: HTMLElement = document.querySelector('.modal');
	const $modalContent: HTMLElement = document.querySelector(`.modal__content[data-id='${id}']`);

	if (!$modal && !$modalContent) return;

	$modal.hidden = true;
	$modalContent.hidden = true;
};

const handleCloseModal = ($modalInner: HTMLElement, $modalContent: NodeListOf<HTMLElement>, e) => {
	if (e.target === $modalInner) {
		$modalContent.forEach((el) => {
			el.hidden = true;
		});

		$modalInner.parentElement.hidden = true;
	}
};

const initEvents = () => {
	const $modalInner: HTMLElement = document.querySelector('.modal__inner');
	const $modalContent: NodeListOf<HTMLElement> = document.querySelectorAll('.modal__content');

	if (!$modalInner || !$modalContent) {
		return;
	}

	$modalInner.addEventListener('click', (e) => handleCloseModal($modalInner, $modalContent, e));
};

const init = () => {
	renderModal();
	initEvents();
	window.modal = {
		openModal,
		closeModal,
		handleCloseModal,
	};
};

export default {
	init,
};
