import Handlebars from 'handlebars';
import template from './template';
import Block from '../../modules/Block';
import Avatar from '../avatar';

import './styles.module.css';

interface Props {
  name: string;
  imgSrc: string;
}

export default class Header extends Block {
	constructor(props: Props) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
			}),
		};
		super('div', {...props, components});
	}

	render() {
		return Handlebars.compile(template, { noEscape: true });
	}
}