const fullData = [
  {
    label: 'Почта',
    type: 'email',
    disabled: true,
    value: 'pochta@yandex.ru',
    name: 'email',
  },
  {
    label: 'Логин',
    type: 'text',
    disabled: true,
    value: 'ivanivanov',
    name: 'login',
  },
  {
    label: 'Имя',
    type: 'text',
    disabled: true,
    value: 'Иван',
    name: 'first_name',
  },
  {
    label: 'Фамилия',
    type: 'text',
    disabled: true,
    value: 'Иванов',
    name: 'last_name',
  },
  {
    label: 'Имя в чате',
    type: 'text',
    disabled: true,
    value: 'Иван',
    name: 'nick_name',
  },
  {
    label: 'Телефон',
    type: 'tel',
    disabled: true,
    value: '+7 (909) 967 30 30',
    name: 'phone',
  },
];

const passwordData = [
  {
    label: 'Старый пароль',
    type: 'password',
    disabled: true,
    value: '123qweQWE',
    name: 'password',
  },
  {
    label: 'Новый пароль',
    type: 'password',
    disabled: true,
    value: '1234qweQWE',
    name: 'password',
  },
  {
    label: 'Повторите новый пароль',
    type: 'password',
    disabled: true,
    value: '1234qweQWE',
    name: 'password',
  },
];

export default {
  fullData,
  passwordData,
};
