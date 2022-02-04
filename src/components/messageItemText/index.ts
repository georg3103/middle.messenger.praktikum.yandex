import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  type?: string;
  isDataTime?: boolean;
  time?: string;
  message?: string;
  seen?: boolean;
}

export default class MessageItemText extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}
