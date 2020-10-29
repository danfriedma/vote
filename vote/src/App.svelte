<svelte:options tag={"election-reminder"} />

<main>
	<div id="election-reminder" class="notify active" style="--background-color: {backgroundColor};--font-color: {fontColor};">
		<h2 class="message message__fullscreen">Last day to Vote is Tuesday, 11/3. <a class="election-reminder-link" href="https://vote.org" target="_blank">Find your polling place</a> and vote!</h2>
		<h2 class="message message__mobile">Last day to Vote is, 11/3. <a class="election-reminder-link" href="https://vote.org" target="_blank">VOTE</a>!</h2>
	</div>

	<div class="heading">
		<h1>Election Reminder Banner</h1><img src="/arrow.svg" style="width:30px;"/>
	</div>
	<div class="prompt">
		<h1>Customize and add to your website:</h1>
	</div>
	<div class="step">
		<h2>Background Color</h2>
		<input class="background-color" type="color" bind:value={backgroundColor} defaultValue="#ff824d">
	</div>

	<div class="step">
		<h2>Font Color</h2>
		<input class="font-color" type="color" bind:value={fontColor} defaultValue="#ffffff">
	</div>

	<div class="step step-seconds">
		<h2>Time before message dissappears</h2>
		<input class="seconds" type="range" min="3" max="9" step="1" bind:value={seconds}>
		<span>{seconds} seconds</span>
	</div>

	<div class="step copy">
		<h2>Copy and Paste HTML into your website.</h2>
		<div class="wrapper">
			{#if visible}
			<div class="success">
				<span>Copied to clipboard!</span>
			</div>
			{/if}

			<button on:click={copy} class="btn">Copy</button>
		</div>
		<textarea id="output" bind:value={electionReminder}></textarea>
		<span style="font-size: 0.5em; padding-top: 0.5em;">The banner will be hidden after the 9pm PST Nov. 3rd, 2020</span>
		<br/>

	</div>

	<div class="footer">
		<span><a href="https://danielfriedman.space" target="_blank">Created by Daniel Friedman</a><span>
		<br/>
		<span><a href="https://paypal.me/danfriedma" target="_blank">Tip me on PayPal</a><span>
		</div>
</main>

<style>
	.footer {
		padding: 1em;
	}
	.footer span {
		margin: 0 auto;
	}
	.heading {
		margin-top: 2em;
		color: white;
		background: #0071bc;
	}
	.prompt {
		background: #d0163e;
	}
	.heading h1 {
		line-height: 2.5em;
		display: inline;
	}
	main {
		background: #e5fdff;
		font: sans-serif;
		text-align: center;
		padding-top: 4em;
		margin: 0 auto;
	}
	h1 {
		margin: 0 auto;
		padding: 0.6em;
	}
	.heading h1 {
		color: white;
	}
	.step {
		margin: 0.3em auto;
		font-size: 3em;
		width: 100%;
		max-width: 800px;
		border: 3px solid white;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.5em;
	}
	.step h2 {
		font-size: 0.8em;
		color: #0071bc;
	}
	.copy {
    flex-direction: column;
	}
	h2 {
		color: black;
		font-size: 1em;
	}
	input {
		padding: 0.5em;
		width: 100px;
		height: 100px;
	}
	.seconds {
		height: auto;
	}
	* {
	  box-sizing: border-box;
	}

	body {
	  display: -webkit-box;
	  display: flex;
	  -webkit-box-pack: center;
	          justify-content: center;
	  -webkit-box-align: center;
	          align-items: center;
	  font-size: 14px;
	  font-family: ui-system, sans-serif;
	  color: #333;
		padding: 0;
	  min-height: 100vh;
	  background: rgba(243, 162, 185, 0.2);
	}
	textarea {
		width: 80%;
		height: 234px;
	}
	.wrapper {
		margin: 0 auto;
	  width: 350px;
	}
	.wrapper button,
	.wrapper textarea {
	  display: block;
	  width: 100%;
	  margin: 0 auto 10px;
	  -webkit-appearance: none;
	     -moz-appearance: none;
	          appearance: none;
	  border: none;
	  border-radius: 4px;
	  font: inherit;
	  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
	}
	.wrapper button:focus,
	.wrapper textarea:focus {
	  outline: none;
	}
	.wrapper textarea {
	  height: 200px;
	  padding: 10px 15px;
	  line-height: 1.5;
	  resize: none;
	}
	.wrapper button {
	  padding: 8px 0;
	  color: #fff;
	  text-transform: uppercase;
	  background: rgba(243, 162, 185, 0.85);
	  -webkit-transition: 0.25s;
	  transition: 0.25s;
	  cursor: pointer;
	}
	.wrapper button:hover {
	  background: #f3a2b9;
	}
	.success span {
		width: 250px;
		margin: auto;
    position: relative;
		top: -20px;
		padding: 12px;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
		background: #fff;
		border-radius: 4px;
		box-shadow: 0 2px 4px 0 rgba(51, 51, 51, 0.03);
	}
	.notify {
		position:fixed;
		top:0px;
		left:0px;
		width:100%;
		box-sizing:border-box;
		color:white;
		text-align:center;
		background: var(--background-color);
		overflow:hidden;
		box-sizing:border-box;
		height:0;
		transition:height 1.2s;
	}
	.message {
		color: var(--font-color);
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 1.2em;
		vertical-align:middle;
		margin-top:15px;
	}
	.message_fullscreen {
		display:table-cell;
	}
	.message__mobile {
		display:none;
	}
	.election-reminder-link {
		color: #0071bc;
	}
	.active {
		display:table;
		height:50px;
	}
	@media only screen and (max-width: 640px) {
		.message__mobile {
			display:table-cell;
		}
		.message__fullscreen {
			display:none;
		}
		.step-seconds {
			flex-direction: column;
		}
		.wrapper {
			width: 250px;
		}
		.step h2 {
			font-size: 0.5em;
		}
	}
	@-webkit-keyframes fadein {
	  from {
	    bottom: 0;
	    opacity: 0;
	  }
	  to {
	    bottom: 30px;
	    opacity: 1;
	  }
	}

	@keyframes fadein {
	  from {
	    bottom: 0;
	    opacity: 0;
	  }
	  to {
	    bottom: 30px;
	    opacity: 1;
	  }
	}
	@-webkit-keyframes fadeout {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	  }
	}
	@keyframes fadeout {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	  }
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
	import { onMount } from 'svelte';
	import iro from '@jaames/iro';
	export let backgroundColor = '#ff824d';
	export let fontColor = '#ffffff';
	export let seconds = 5;
	let visible = false;
	onMount(() => {
		console.log('the component has mounted');
	});

	const copy = () => {
		let fake = document.createElement("textarea");
		//fake.value = document.getElementById("output").value;
		fake.value = electionReminder;
		//fake.value = "1\n2\n3";
		document.body.appendChild(fake);
		fake.select();
		document.execCommand("copy");
		document.body.removeChild(fake);
		visible = true;
		setTimeout(() => {
			visible = false
		}, 3000);
	}

	$: electionReminder =
		`<style>
  .notify {
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    box-sizing:border-box;
    color:white;
    text-align:center;
    background: ${backgroundColor};
    overflow:hidden;
    box-sizing:border-box;
    height:0;
    transition:height 1.2s;
  }
  .message {
    color: ${fontColor};
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.2em;
    vertical-align:middle;
    margin-top:15px;
  }
  .message_fullscreen {
    display:table-cell;
  }
  .message__mobile {
    display:none;
  }
  .election-reminder-link {
    color:#0071bc;
  }
  .active {
    display:table;
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
</style>
<div id="election-reminder" class="notify">
  <h2 class="message message__fullscreen">Last day to Vote is Tuesday, 11/3.
		<a class="election-reminder-link" href="https://vote.org" target="_blank">Find your polling place</a> and vote!
	</h2>
  <h2 class="message message__mobile">Last day to Vote is 11/3.
		<a class="election-reminder-link" href="https://vote.org" target="_blank">VOTE</a>!
	</h2>
</div>
<script>
    // The banner will be hidden after the 9pm PST Nov. 3rd, 2020
    if(Date.now() <= 1604462400000) {
      document.getElementById("election-reminder").classList.add("active");
      setTimeout(function(){
        document.getElementById("election-reminder").classList.remove("active");
      }, ${seconds * 1000});
    };
<\/script>`

</script>
