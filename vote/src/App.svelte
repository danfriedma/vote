<script>
	import { onMount } from 'svelte';
	export let backgroundColor;
	export let fontColor;
	export let seconds;
	export let html_snippet;
	onMount(() => {
		console.log('the component has mounted');
		document.querySelector(".btn").addEventListener("click", copy);
		if(Date.now() <= 1604462400000) {
			document.getElementById("election-reminder").classList.add("active");
			setTimeout(function(){
				document.getElementById("election-reminder").classList.remove("active");
			},4500);
		};
	});

	const copy = () => {
		let fake = document.createElement("textarea");
		fake.value = document.querySelector("#original").value;
		//fake.value = "1\n2\n3";
		document.body.appendChild(fake);
		fake.select();
		document.execCommand("copy");
		document.body.removeChild(fake);
		let notice = document.createElement("span");
		notice.className = "notice visible";
		notice.innerHTML = "Text copied to the clipboard!";
		document.body.appendChild(notice);
		setTimeout(() => {
			document.body.removeChild(notice);
		}, 3000);
	}


</script>

<main>
	<div id="election-reminder" class="notify" style="--background-color: {backgroundColor};--font-color: {fontColor};">
		<h2 class="message message__fullscreen">Election Day is Tuesday, 11/3. <a class="election-reminder-link" href="https://vote.org" target="_blank">Find your polling place</a> and vote!</h2>
		<h2 class="message message__mobile">Election Day is 11/3. <a class="election-reminder-link" href="https://vote.org" target="_blank">VOTE</a>!</h2>
	</div>
	<h1>Election Reminder</h1>
	<h1>Add a custom banner to your website</h1>
	<h1 class="step">1</h1>
	<h2>Background Color</h2>
	<input class="background-color" type="color" bind:value={backgroundColor} style="height: 50px;">

	<h1 class="step">2</h1>
	<h2>Font Color</h2>
	<input class="font-color" type="color" bind:value={fontColor} style="height: 50px;">

	<h1 class="step">3</h1>
	<h2>Time before message dissapears</h2>
	<input class="seconds" type="range" min="3" max="10" step="1" bind:value={seconds} style="height: 50px;">


	<h1 class="step">4</h1>
	<h2>Copy and Paste HTML into your website.</h2>
	<textarea id="original">{html_snippet}</textarea>
	<br/>
	<button class="btn">Copy</button>

	<br/>
	<span><a href="github">Github</a><span><a href="patreon">Patreon</a><span>
</main>

<style>
	.step {
		margin: 0 auto;
		font-size: 4em;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h2 {
		color: var(--font-color);
		//text-transform: uppercase;
		font-size: 1em;
	}
	.notify {
	  position:fixed;
	  display: table;
	  top:0px;
	  left: 0px;
	  width:100%;
	  box-sizing:border-box;
	  color:white;
	  text-align:center;
	  background:var(--background-color);
	  overflow:hidden;
	  box-sizing:border-box;

	  height:0;
	  transition:height 1.2s;
	}
	.message {
	  vertical-align:middle;
	  margin-top:15px;
	}
	.message_fullscreen {
	  display:table-cell;
	}
	.message__mobile {
	  display:none;
	}
	.link {
	  color: black;
	}
	.active {
	  height:50px;
	}
	@media only screen and (max-width: 640px) {
	  .message__mobile {
	    display:table-cell;
	  }
	  .message__fullscreen {
	    display:none;
	  }
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
