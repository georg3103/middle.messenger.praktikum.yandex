import Handlebars from 'handlebars';
import data from './data';
import template from './template';
import Block from '../modules/Block';

import './styles.css';

interface Props {
  type: string;
  content: string | Block | Block[]; // TODO:
}

export default class Layout extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}

export {
  data
};
