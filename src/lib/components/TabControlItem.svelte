<script>
	import { tabsKey } from './TabControl.svelte';
	import { getContext, onMount } from 'svelte';

	export let id;
	export let isTitle;
	export let isContent;

	const { selectedTab, tabs } = getContext(tabsKey);
	$tabs = $tabs.some((t) => t == id) ? $tabs : [...$tabs, id];

	$: isSelected = id == $selectedTab;
</script>

{#if isTitle}
	<button
		type="button"
		class="tab"
		class:selected={isSelected}
		on:click={() => ($selectedTab = id)}
	>
		<slot name="title" />
	</button>
{/if}

{#if isContent && isSelected}
	<slot />
{/if}

<style lang="scss">
	.tab {
		border: none;
		margin: 0;
		cursor: pointer;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		background: white;
		padding: 10px;
		transition: var(--transition);
		&:hover {
			background: lightgrey;
		}
	}
	.tab.selected {
		background: lightgrey;
		cursor: default;
	}
</style>
