<script>
	import GridMultipleContent from '$lib/components/GridMultipleContent.svelte';
	import '$lib/style.scss';
	import image from '$lib/assets/cat-bg1.jpeg';
	import Container from '$lib/components/Container.svelte';
	let data = [
		{ id: 1, title: 'All natural products', description: 'Fruint y berries', image },
		{
			id: 2,
			title: 'All natural products',
			description: 'Meat & populty',
			image
		},
		{
			id: 3,
			title: 'All natural products',
			description: 'Cheese',
			image
		},
		{
			id: 4,
			title: 'All natural products',
			description: 'Vegetables',
			image
		}
	];
</script>

<Container class="mt-10">
	<GridMultipleContent {data} />
</Container>

<style lang="scss" global>
	body {
		background: rgb(206, 206, 211);
	}
</style>
