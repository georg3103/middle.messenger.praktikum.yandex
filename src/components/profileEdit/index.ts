import Handlebars from 'handlebars';
import template from './template';
import data from './data';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

type Input = {
  label: string;
  type: string;
  disabled: boolean;
  value: string;
};

interface Props {
  class?: string;
  name?: string;
  avatar: Block;
  inputList: Input[];
  button: Block;
  events?: Record<string, (e: Event) => void>;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class ProfileEdit extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}

export {
  data
}