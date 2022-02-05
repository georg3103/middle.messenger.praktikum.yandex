import Handlebars from 'handlebars';
import template from './template';
import data from './data';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
  class?: string;
  title: string;
  content: Block[];
  button: Block;
  link: Block;
  events?: Record<string, (e: Event) => void>;
}

export default class Form extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): Function {
    return Handlebars.compile(template, { noEscape: true });
  }
}

export {
  data
}