<script lang="ts">
	import type { IContextMenu } from '$lib/interfaces/IContextMenu';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let menu: IContextMenu[] = [];

	const onClick = (item, index) => () => dispatch('click', { item, index });
</script>

<ul class="ContextMenu {$$props.class ?? ''}" style={$$props.style ?? ''}>
	{#each menu as item, index}
		<li class="ContextMenu__item" on:click={onClick(item, index)}>
			<slot {item} {index}>
				{item.label}
			</slot>
		</li>
	{/each}
</ul>

<style lang="scss">
	.ContextMenu {
		background-color: white;
		border-radius: 5px;
		display: inline-flex;
		flex-direction: column;
		overflow: hidden;

		&__item {
			color: black;
			font-size: 0.9em;
			padding-left: 10px;
			padding-right: 10px;

			&:hover {
				background-color: #f3f1f1;
				cursor: pointer;
			}
		}
	}
</style>
