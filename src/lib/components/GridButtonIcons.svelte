<script lang="ts">
	import type { IButtonIcon } from '$lib/interfaces/IButtonIcon';
	import Item from '$lib/components/Item.svelte';
	export let data: IButtonIcon[] = [];
</script>

<div>
	{#each data as item}
		<Item>
			<img src={item.image} alt={item.title} title={item.title} />
			<span>{item.title}</span>
		</Item>
	{/each}
</div>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: repeat(3, 80px);
		padding: 10px;
		max-height: 400px;
		overflow: auto;
		:global(.Item) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 5px;
			text-align: center;
			padding: 0;
			padding: 10px;
		}
	}
	img {
		$s: 30px;
		width: $s;
		height: $s;
	}
</style>
