<script lang="ts">
	import type { IListDataItem } from '$lib/interfaces/IListDataItem';
	import ListDataItem from './ListDataItem.svelte';
	export let data: IListDataItem[] = [];
</script>

<div class="ListData {$$props.class ?? ''}" style={$$props.style ?? ''}>
	{#each data as value}
		<ListDataItem {...value} />
	{/each}
</div>

<style lang="scss">
</style>
