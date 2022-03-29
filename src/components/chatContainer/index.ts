import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  class?: string;
  isEmpty: boolean;
  contentHeader?: Block | Block[];
  contentMain?: Block | Block[];
  contentFooter?: Block | Block[];
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class ChatContainer extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}

