import App from './App.svelte';

class PrintPage extends HTMLElement {
	connectedCallback() {
		const dispatchEvent = this.dispatchEvent.bind(this);
		new App({
			target: this,
			props: {},
		});
	}
}

const css = Object.assign(document.createElement('link'), {
  href: 'https://sergkornienko.github.io/print-page-component/bundle.css',
  rel: 'stylesheet',
})
document.head.appendChild(css);

window.customElements.define('print-page', PrintPage);
