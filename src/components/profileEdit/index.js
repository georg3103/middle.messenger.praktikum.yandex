import Handlebars from 'handlebars';
import template from './template';
import data from './data';

import './styles.module.css';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  render,
  data,
};
