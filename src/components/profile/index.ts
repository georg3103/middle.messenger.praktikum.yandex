import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/BaseBlock';

import './styles.module.css';

interface Props {
  href: string;
  profileMain: Block;
}

const compileFn = Handlebars.compile(template, { noEscape: true });

export default class Profile extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render(): string {
    return this.compile(compileFn, this.props);
  }
}
