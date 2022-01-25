import Handlebars from 'handlebars';
import data from './data';
import template from './template';

import './styles.css';

const render = Handlebars.compile(template, { noEscape: true });

export default {
  data,
  render,
};
