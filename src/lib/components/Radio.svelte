<script lang="ts">
	import SubTitleHeading from './SubTitleHeading.svelte';

	export let name;
	export let value;
	export let label = null;
	export let checked: boolean = false;
</script>

<label>
	<input type="radio" {name} on:change bind:value {checked} />
	{#if label}
		{label}
	{/if}
	{#if $$slots}
		<SubTitleHeading><slot /></SubTitleHeading>
	{/if}
</label>

<style lang="scss">
	label {
		cursor: pointer;
		:global(.SubTitleHeading) {
			font-size: 0.8em;
		}
	}
</style>
