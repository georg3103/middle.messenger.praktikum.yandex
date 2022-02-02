const fullData = [
  {
    label: 'Почта',
    type: 'email',
    disabled: true,
    value: 'pochta@yandex.ru',
  },
  {
    label: 'Логин',
    type: 'text',
    disabled: true,
    value: 'ivanivanov',
  },
  {
    label: 'Имя',
    type: 'text',
    disabled: true,
    value: 'Иван',
  },
  {
    label: 'Фамилия',
    type: 'text',
    disabled: true,
    value: 'Иванов',
  },
  {
    label: 'Имя в чате',
    type: 'text',
    disabled: true,
    value: 'Иван',
  },
  {
    label: 'Телефон',
    type: 'tel',
    disabled: true,
    value: '+7 (909) 967 30 30',
  },
];

const passwordData = [
  {
    label: 'Старый пароль',
    type: 'password',
    disabled: true,
    value: '•••••••••',
  },
  {
    label: 'Новый пароль',
    type: 'password',
    disabled: true,
    value: '•••••••••••',
  },
  {
    label: 'Повторите новый пароль',
    type: 'password',
    disabled: true,
    value: '•••••••••••',
  },
];

export default {
  fullData,
  passwordData,
};