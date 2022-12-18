<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { randomAlphaString, generateChildren, findBestChild } from './util';

	let input = '';
	let optimal = 'methinks it is like a weasel';
	let mutationRate = 0.01;
	let generation = 0;

	let closestIndividual = randomAlphaString(optimal.length);
	let children = generateChildren(closestIndividual, mutationRate);

	const assignOptimal = () => {
		optimal = input;
	};

	onMount(() => {
		const interval = setInterval(() => {
			closestIndividual = findBestChild(children, optimal);
			children = generateChildren(closestIndividual, mutationRate);
			if (closestIndividual === optimal) {
				clearInterval(interval);
			}
			generation++;
		}, 10);

		onDestroy(() => {
			clearInterval(interval);
		});
	});
</script>

<main>
	<h2>{optimal}</h2>
	<h2>{closestIndividual}</h2>
	<h3>Generation: {generation}</h3>
	<input type="text" bind:value={input} on:submit={assignOptimal} />
</main>

<style>
	main {
		min-height: 100vh;
		background-color: whitesmoke;
	}
</style>
