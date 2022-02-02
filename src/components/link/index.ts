import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  href: string;
  class?: string;
  linkName: string;
}

export default class Link extends Block {
  constructor(props: Props) {
    // console.log('props', props);
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}