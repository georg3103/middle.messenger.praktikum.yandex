import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class Footer extends Block {
  constructor(props = {}) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}

