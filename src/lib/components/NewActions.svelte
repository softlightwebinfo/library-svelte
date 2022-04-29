<script lang="ts">
	import Item from './Item.svelte';

	export let items = [];
	
	const onDelete = (item, index) => () => {
		const data = items.filter((_, i) => i != index);
		items = data;
	};

	const onAdd = (template) => () => {
		items = [...items, template];
	};
</script>

<div class="NewActions">
	<div class="NewActions__list">
		{#each items as item, index}
			<slot onDelete={onDelete(item, index)} {onAdd} />
		{/each}
	</div>
	<div class="NewActions__actions">
		<slot name="add" {onDelete} {onAdd} />
	</div>
</div>

<style lang="scss">
	.NewActions {
		position: relative;
		&__list {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		&__actions {
			margin-top: 20px;
		}
	}
</style>
