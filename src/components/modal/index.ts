import Handlebars from 'handlebars';
import template from './template';
import data from './data';
import Block from '../../modules/Block';

import './styles.module.css';

type ModalItem = {
  id: string;
  content: Block;
}

interface Props {
  contentList: ModalItem[];
}

export default class Modal extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}

export {
  data
}