import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		backgroundColor: 'rgb(24, 199, 199)',
		fontColor: 'ff88eo',
		seconds: '5'
	}
});

export default app;
