import Handlebars from 'handlebars';
import data from './data';
import template from './template';
import Block from '../modules/BaseBlock';

import './styles.css';

interface Props {
  type: string;
  content: string | Block | Block[]; // TODO:
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class Layout extends Block {
  constructor(props: Props) {
    super('div', props);
  }
  
  render(): string {
    return this.compile(compileFn, this.props);
  }
}

export {
  data
};
