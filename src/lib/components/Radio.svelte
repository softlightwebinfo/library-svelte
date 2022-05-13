<script lang="ts">
	import SubTitleHeading from './SubTitleHeading.svelte';

	export let name;
	export let value;
	export let label = null;
	export let checked: boolean = false;
	export let group = null;
</script>

<label class={$$props.class ?? ''}>
	<input type="radio" bind:group {name} on:change bind:value {checked} />
	{#if label}
		{label}
	{/if}
	{#if $$slots}
		<SubTitleHeading><slot /></SubTitleHeading>
	{/if}
</label>

<style lang="scss">
	label {
		display: inline-block;
		cursor: pointer;
		:global(.SubTitleHeading) {
			font-size: 0.8em;
		}
	}
</style>
