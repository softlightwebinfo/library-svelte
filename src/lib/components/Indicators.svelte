<script lang="ts">
	import Indicator from './Indicator.svelte';

	export let index: number = 0;
	export let length: number = 0;
</script>

<div class="Indicators">
	{#each [...new Array(length)] as _, itemIndex}
		<Indicator on:click active={itemIndex == index} index={itemIndex} />
	{/each}
</div>

<style lang="scss">
	.Indicators {
		width: 100%;
		margin-left: auto;
		margin-bottom: 20px;
		display: flex;
		gap: 2px;
		justify-content: flex-end;
	}
</style>
