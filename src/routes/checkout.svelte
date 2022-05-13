<script lang="ts">
	import Checkout from '$lib/apps/Checkout.svelte';
	import Container from '$lib/components/Container.svelte';
</script>

<Container class="m-4">
	<Checkout
		shippingAddress={[
			{
				id: 1,
				title: 'Antony hopkins',
				address: '2392 Main Avenue',
				country: 'Spain',
				state: 'Mallorca',
				town: 'Inca',
				phone: '12346789'
			},
			{
				id: 2,
				title: 'Robert Bruce',
				address: 'Pensaukee',
				country: 'Spain',
				state: 'Mallorca',
				town: 'Lloseta',
				phone: '12346789'
			},
			{
				id: 3,
				title: 'Antony hopkins',
				address: '2392 Main Avenue',
				country: 'Spain',
				state: 'Mallorca',
				town: 'Inca',
				phone: '12346789'
			},
			{
				id: 4,
				title: 'Robert Bruce',
				address: 'Pensaukee',
				country: 'Spain',
				state: 'Mallorca',
				town: 'Lloseta',
				phone: '12346789'
			}
		]}
	/>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
