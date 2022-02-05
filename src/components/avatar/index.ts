import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
	imgSrc?: string;
	class?: string;
	editText?: string;
}

export default class Avatar extends Block {
	constructor(props: Props) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}

