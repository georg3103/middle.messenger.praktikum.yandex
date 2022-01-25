/* eslint-disable no-param-reassign */
import modal from '../components/modal';
import modalContainer from '../components/modalContainer';
import field from '../components/field';
import link from '../components/link';

import renderInDOM from '../utils/renderInDOM';

const template = modal.render({
  contentList: [
    {
      id: modal.data.addUser.id,
      content: modalContainer.render({
        ...modal.data.addUser,
        contentMain: field.render({
          label: 'Логин',
          name: 'login',
          type: 'text',
        }),
        btnTxt: modal.data.addUser.btnText,
      }),
    },
    {
      id: modal.data.removeUser.id,
      content: modalContainer.render({
        ...modal.data.removeUser,
        contentMain: field.render({
          label: 'Логин',
          name: 'login',
          type: 'text',
        }),
        btnTxt: modal.data.removeUser.btnText,
      }),
    },
    {
      id: modal.data.uploadFile.id,
      content: modalContainer.render({
        ...modal.data.uploadFile,
        contentMain: link.render({
          linkName: 'Выбрать файл на компьютере',
          class: 'link--blue chat-form__link link--modal',
        }),
        btnTxt: modal.data.uploadFile.btnText,
      }),
    },
  ],
});

const renderModal = () => {
  renderInDOM(document.querySelector('#modal'), template);
};

const openModal = (id) => {
  const $modal = document.querySelector('.modal');
  const $modalContent = document.querySelector(`.modal__content[data-id='${id}']`);

  if (!$modal && !$modalContent) return;

  $modal.hidden = false;
  $modalContent.hidden = false;
};

const closeModal = (id) => {
  const $modal = document.querySelector('.modal');
  const $modalContent = document.querySelector(`.modal__content[data-id='${id}']`);

  if (!$modal && !$modalContent) return;

  $modal.hidden = true;
  $modalContent.hidden = true;
};

const handleCloseModal = ($modalInner, $modalContent, e) => {
  if (e.target === $modalInner) {
    $modalContent.forEach((el) => {
      el.hidden = true;
    });

    $modalInner.parentNode.hidden = true;
  }
};

const initEvents = () => {
  const $modalInner = document.querySelector('.modal__inner');
  const $modalContent = document.querySelectorAll('.modal__content');

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
