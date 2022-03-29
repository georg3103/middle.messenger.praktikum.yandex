import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

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

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class ChatItem extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}
