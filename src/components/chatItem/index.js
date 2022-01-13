import Handlebars from 'handlebars';
import template from './template';

import './styles.module.css';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
};
