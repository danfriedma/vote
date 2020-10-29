import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		backgroundColor: '#ff824d',
		fontColor: '#ffffff',
		seconds: 5
	}
});

export default app;
