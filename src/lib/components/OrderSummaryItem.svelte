<script>
	import CatTitle from './CatTitle.svelte';
	import Group from './Group.svelte';
	import Price from './Price.svelte';
	import SubCategory from './SubCategory.svelte';
	export let href = null;
	export let title;
	export let price;
	export let description;
</script>

<a {href} class="OrderSummaryItem">
	<Group noWrap>
		<svelte:fragment slot="left">
			<CatTitle>{title}</CatTitle>
			<SubCategory>{description}</SubCategory>
		</svelte:fragment>
		<Price>
			{price}
		</Price>
	</Group>
</a>

<style lang="scss">
	a {
		display: block;
		padding-top: 10px;
		padding-bottom: 10px;
	}
</style>
