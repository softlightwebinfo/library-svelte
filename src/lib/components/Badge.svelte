<script>
	import { createEventDispatcher } from 'svelte';
	import Closeable from './Closeable.svelte';
	export let secondary = false;
	export let round = false;
	export let closeable = false;
	const dispatch = createEventDispatcher();
	const onCloseable = () => dispatch('close');
</script>

<span class:round class:secondary class="Badge {$$props.class ?? ''}" class:closeable>
	<slot />
	{#if closeable}
		<Closeable class="ml-1" on:click={onCloseable} />
	{/if}
</span>

<style lang="scss">
	.Badge {
		display: inline-flex;
		align-items: center;
		padding: 4px 7px;
		font-size: 73%;
		font-weight: 500;
		line-height: 1;
		text-align: center;
		white-space: nowrap;
		vertical-align: baseline;
		border-radius: 2px;
		color: black;
	}

	.round {
		border-radius: 40px;
	}

	.secondary {
		background-color: var(--color-secondary);
		color: #fff;
	}
</style>
