import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  code: string;
  text: string;
  link: Block;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class ErrorPage extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}