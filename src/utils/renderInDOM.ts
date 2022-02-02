const renderInDOM = (element: HTMLElement | null, innerHTML: any): void => {
	if (element) {
		console.log('innerHTML', innerHTML);
		element.appendChild(innerHTML);
	}
};

export default renderInDOM;