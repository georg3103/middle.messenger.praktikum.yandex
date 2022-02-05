import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

export default class Footer extends Block {
  constructor(props = {}) {
    super('div', props);
  }

  render(): Function {
    return Handlebars.compile(template, { noEscape: true });
  }
}

