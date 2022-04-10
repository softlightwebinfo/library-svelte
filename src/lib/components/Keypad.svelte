<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = (num) => () => (value += num);
	const clear = () => (value = '');
	const submit = () => dispatch('submit');
</script>

<div class="keypad">
	{#each { length: 9 } as item, index}
		<button on:click={select(index + 1)}>{index + 1}</button>
	{/each}

	<button disabled={!value} on:click={clear}>clear</button>
	<button on:click={select(0)}>0</button>
	<button disabled={!value} on:click={submit}>submit</button>
</div>

<style lang="scss">
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 5em);
		grid-template-rows: repeat(4, 3em);
		grid-gap: 0.5em;
	}

	button {
		margin: 0;
		cursor: pointer;
		&:hover {
			background-color: var(--bs-secondary);
			color: var(--bs-light);
		}
	}
</style>
