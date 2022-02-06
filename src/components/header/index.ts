import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  name: string;
  imgSrc?: string;
  avatar: Block;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class Header extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}