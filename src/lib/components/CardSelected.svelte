<script lang="ts">
	import type { ICardSelected } from '$lib/interfaces/ICardSelected';
	import { createEventDispatcher } from 'svelte';
	import Radio from './Radio.svelte';
	const dispatch = createEventDispatcher();

	export let rows: ICardSelected[];
	export let checked = [];
	export let selected = null;
	export let all = false;

	export let selectedItem = (item) => () => {
		selected = item.id;
		dispatch('selected', item);
	};
</script>

<div class="CardSelected">
	{#each rows as item, index (item.id)}
		{#if all || index < 2}
			<div on:click={selectedItem(item)} class:selected={selected == item.id}>
				<Radio
					label={item.title}
					name="address"
					value={item.id}
					on:change={() => (selected = item.id)}
					checked={selected == item.id}
				/>
				<div class="CardSelected__content">
					<slot {item} selected={selected == item.id} />
				</div>
				{#if $$slots.footer}
					<footer>
						<slot name="footer" />
					</footer>
				{/if}
			</div>
		{/if}
	{/each}
</div>
<div class="all" on:click={() => (all = !all)}>
	{#if all}
		Hide
	{:else}
		Show All
	{/if}
</div>

<style lang="scss">
	.CardSelected {
		display: grid;
		flex-wrap: wrap;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		@media (max-width: 600px) {
			grid-template-columns: repeat(1, 1fr);
		}
		&__content {
			margin-top: 10px;
		}
	}
	footer {
		margin-top: 5px;
	}
	.all {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		background-color: whitesmoke;
		color: black;
		margin-top: 20px;
		border-radius: 10px;
		cursor: pointer;
	}
</style>
