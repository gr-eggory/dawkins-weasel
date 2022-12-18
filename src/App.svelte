<script lang="ts">
	import { randomAlphaString } from './util';

	let input = '';
	let optimal = 'methinks it is like a weasel';
	let mutationRate = 0.1;

	let closestIndividual = randomAlphaString(optimal.length);
	// $: children = generateChildren(closestIndividual, optimal, mutationRate);

	const assignOptimal = () => {
		optimal = input;
	};
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
