import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  type?: string;
  isDataTime?: boolean;
  time?: string;
  message?: string;
  seen?: boolean;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class MessageItemText extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}
