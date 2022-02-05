import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';

import './styles.module.css';

interface Props {
	class?: string;
	isEmpty: boolean;
	contentHeader?: Block | Block[];
	contentMain?: Block | Block[];
	contentFooter?: Block | Block[];
}

export default class ChatContainer extends Block {
	constructor(props: Props) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(template, { noEscape: true });
	}
}

