import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  imgSrc?: string;
  time?: string;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class MessageItemImg extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}