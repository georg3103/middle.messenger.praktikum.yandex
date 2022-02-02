import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  class?: string;
  title?: string;
  errorTitle?: string;
  contentMain: Block;
  btnText?: string;
}

export default class ModalContainer extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}
