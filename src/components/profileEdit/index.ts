import Handlebars from 'handlebars';
import template from './template';
import data from './data';
import Block from '../../modules/Block';

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

export default class ProfileEdit extends Block {
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