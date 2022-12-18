<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { randomAlphaString, generateChildren } from './util';

	let input = '';
	let optimal = 'methinks it is like a weasel';
	let mutationRate = 0.1;

	let closestIndividual = randomAlphaString(optimal.length);
	// $: children = generateChildren(closestIndividual, optimal, mutationRate);

	const assignOptimal = () => {
		optimal = input;
	};

	// onMount(() => {
	// 	const interval = setInterval(() => {}, 10 * 1000);

	// 	onDestroy(() => {
	// 		clearInterval(interval);
	// 	});
	// });
</script>

<main>
	<h2>{optimal}</h2>
	<h2>{closestIndividual}</h2>
	<input type="text" bind:value={input} on:submit={assignOptimal} />
</main>

<style>
	main {
		min-height: 100vh;
		background-color: whitesmoke;
	}
</style>
