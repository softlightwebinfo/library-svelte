<script lang="ts">
	import type { ITitleDescription } from '$lib/interfaces/ITitleDescription';
	import BoxCategory from './BoxCategory.svelte';
	export let data: ITitleDescription[] = [];
</script>

<div class="GridMultipleContent">
	{#each data as item, index (item.id)}
		<slot {item} {index}>
			<BoxCategory {...item} {index} />
		</slot>
	{/each}
</div>

<style lang="scss">
	.GridMultipleContent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		> :global(*) {
			&:nth-child(3) {
				grid-row: span 2;
				height: 100%;
			}
			&:nth-child(4) {
				grid-column: span 2;
			}
		}
	}
</style>
