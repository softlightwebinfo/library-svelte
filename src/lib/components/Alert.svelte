<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { fade } from 'svelte/transition';
	export let heading: boolean = false;
	export let link: boolean = false;
	export let primary: boolean = false;
	export let secondary: boolean = false;
	export let success: boolean = false;
	export let info: boolean = false;
	export let warning: boolean = false;
	export let danger: boolean = false;
	export let light: boolean = false;
	export let dark: boolean = false;
	export let closeable = false;
	export let icon = null;

	let close = false;
	const dispatch = createEventDispatcher();
	$: onCloseable = () => {
		close = true;
		dispatch('close', close);
	};
</script>

{#if !close}
	<div
		transition:fade
		class="Alert {$$props.class ?? ''}"
		class:heading
		class:link
		class:primary
		class:secondary
		class:success
		class:info
		class:warning
		class:danger
		class:light
		class:dark
		class:closeable
	>
		{#if icon}
			<i class={icon} />{/if}
		<slot />
		{#if closeable}
			<button on:click={onCloseable}>
				<i class="fa fa-times" />
			</button>
		{/if}
	</div>
{/if}

<style lang="scss">
	div {
		position: relative;
		padding: 0.75rem 1.25rem;
		margin-bottom: 1rem;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.heading {
		color: inherit;
		font-weight: bold;
	}

	.link {
		font-weight: 700;
		color: blue;
	}

	.primary {
		color: #084298;
		background-color: #cfe2ff;
		border-color: #b6d4fe;
	}

	.secondary {
		color: #41464b;
		background-color: #e2e3e5;
		border-color: #d3d6d8;
	}

	.success {
		color: #0f5132;
		background-color: #d1e7dd;
		border-color: #badbcc;
	}

	.info {
		color: #055160;
		background-color: #cff4fc;
		border-color: #b6effb;
	}

	.warning {
		color: #664d03;
		background-color: #fff3cd;
		border-color: #ffecb5;
	}

	.danger {
		color: #842029;
		background-color: #f8d7da;
		border-color: #f5c2c7;
	}

	.light {
		color: #636464;
		background-color: #fefefe;
		border-color: #fdfdfe;
	}

	.dark {
		color: #141619;
		background-color: #d3d3d4;
		border-color: #bcbebf;
	}
	button {
		margin-left: auto;
		background: none;
		font-size: 20px;
		align-items: center;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}
</style>
