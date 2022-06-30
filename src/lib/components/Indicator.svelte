<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let active: boolean = false;
	export let index: number;
	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click', { index });
</script>

<div class:active on:click={onClick} class="Indicator" data-index={index} />

<style lang="scss">
	$active: white;
	.Indicator {
		width: 15px;
		height: 2px;
		background-color: var(--indicator_bg, grey);
		display: inline-block;
		transition: all 0.3s ease-in-out;
		&:hover {
			cursor: pointer;
			--indicator_bg: #{$active};
		}
	}
	.active {
		--indicator_bg: #{$active};
	}
</style>
