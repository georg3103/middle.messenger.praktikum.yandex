import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  href: string;
  profileMain: Block;
}

export default class Profile extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}
