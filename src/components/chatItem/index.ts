import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  class?: string;
  title?: boolean;
  content?: Block | Block[];
  button?: Block;
  link?: Block;
  avatar?: Block;
  hasCount?: boolean;
  href?: string;
}

export default class ChatItem extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
    return Handlebars.compile(template, { noEscape: true });
  }
}
