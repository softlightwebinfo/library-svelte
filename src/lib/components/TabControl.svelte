<script context="module">
	export const tabsKey = {};
</script>

<script>
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let vertical = false;

	const tabs = writable([]);
	const selectedTab = writable(null);

	setContext(tabsKey, {
		tabs,
		selectedTab
	});

	onMount(() => {
		if ($tabs.length > 0) $selectedTab = $tabs[0];
	});
</script>

<div class="tab-control" class:vertical>
	<div class="tabs">
		<slot isTitle={true} isContent={false} />
	</div>
	<div class="tab-content">
		<slot isTitle={false} isContent={true} />
	</div>
</div>

<style lang="scss">
	.tab-content {
		padding: 10px;
		background: lightgrey;
		width: 100%;
	}
	.vertical {
		display: flex;
		.tabs {
			display: flex;
			flex-direction: column;
		}
	}
</style>
