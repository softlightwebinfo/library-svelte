<script lang="ts">
	import Title from './Title.svelte';

	import Group from './Group.svelte';
	import CatTitle from './CatTitle.svelte';
	import Checkbox from './Checkbox.svelte';

	export let title: string;
	export let data: string[] = [];
	export let image: string;
	let items = [...new Array(data.length)].map((_, index) => index);
</script>

<Group>
	<img src={image} slot="left" alt="" />
	<CatTitle>{title}</CatTitle>
	{#each data as item, index}
		<Checkbox bind:group={items} value={index} checked label={item} block />
	{/each}
</Group>

<style lang="scss">
	img {
		max-height: 80px;
	}
</style>
