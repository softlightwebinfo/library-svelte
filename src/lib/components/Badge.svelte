<script lang="ts">
	import type { TType } from '$lib/interfaces/TTypes';
	import { createEventDispatcher } from 'svelte';
	import Closeable from './Closeable.svelte';
	export let secondary = false;
	export let round = false;
	export let closeable = false;
	export let bg: TType = null;
	const dispatch = createEventDispatcher();
	const onCloseable = () => dispatch('close');
</script>

<span
	class:round
	class:secondary
	class="Badge {$$props.class ?? ''} {bg ? `bg-${bg}` : ''}"
	class:closeable
>
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
	.bg-primary {
		background-color: var(--bs-primary);
		color: var(--bs-white);
	}
	.bg-secondary {
		background-color: var(--bs-secondary);
		color: var(--bs-white);
	}
	.bg-success {
		background-color: var(--bs-success);
		color: var(--bs-white);
	}
	.bg-info {
		background-color: var(--bs-info);
		color: var(--bs-white);
	}
	.bg-danger {
		background-color: var(--bs-danger);
		color: var(--bs-white);
	}
	.bg-warning {
		background-color: var(--bs-warning);
		color: var(--bs-white);
	}
	.bg-light {
		background-color: var(--bs-light);
		color: var(--bs-black);
	}
	.bg-dark {
		background-color: var(--bs-dark);
		color: var(--bs-white);
	}
	.bg-alert {
		background-color: var(--bs-alert);
		color: var(--bs-white);
	}
</style>
