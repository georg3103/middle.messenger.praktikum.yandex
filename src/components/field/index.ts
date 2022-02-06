import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  label: string;
  name: string;
  type: string;
  class?: string;
  value?: string;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class Field extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}