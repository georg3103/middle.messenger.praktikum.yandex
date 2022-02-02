import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';
import Avatar from '../avatar';

import './styles.module.css';

interface Props {
  name: string;
  imgSrc?: string;
  avatar: Block;
}

export default class Header extends Block {
	constructor(props: Props) {
    super('div', props);
	}

	render() {
		return Handlebars.compile(template, { noEscape: true });
	}
}