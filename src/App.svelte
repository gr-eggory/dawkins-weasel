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
	<div class="output-grid">
		<h3>Optimal:</h3>
		<h2>{optimal}</h2>
		<h3>Most successful child:</h3>
		<h2>{closestIndividual}</h2>
		<h3 class="generation">Generation: {generation}</h3>
	</div>
	<input type="text" bind:value={input} on:submit={assignOptimal} />
	<button>Begin Simulation</button>
</main>

<style>
	main {
		min-height: 100vh;
		background-color: whitesmoke;
		padding-top: 5rem;
	}

	.output-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 70%;
		margin: 0 auto;
		gap: 1rem;
	}

	.generation {
		grid-column: 2;
	}
</style>
