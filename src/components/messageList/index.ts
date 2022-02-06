import Handlebars from 'handlebars';
import template from './template';
import data from './data';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  class?: string;
  content: Block[];
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class MessageList extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}

export {
  data
}