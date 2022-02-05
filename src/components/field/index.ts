import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
	label: string;
	name: string;
	type: string;
	class?: string;
	value?: string;
}

export default class Field extends Block {
	constructor(props: Props) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}