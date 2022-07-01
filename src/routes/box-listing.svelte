<script lang="ts">
	import CarouselSlick from '$lib/components/CarouselSlick.svelte';
	import CarouselSlickItem from '$lib/components/CarouselSlickItem.svelte';
	import Container from '$lib/components/Container.svelte';

	import BoxListing from './../lib/components/BoxListing.svelte';
	const image = 'https://photostame.com/images/video-home-poster.jpg';
</script>

<Container>
	<CarouselSlick
		data={[...new Array(100)].map((_, i) => ({
			id: i,
			title: `Title - ${i}`,
			image
		}))}
    autoHeight
    showHideItems
	>
		<CarouselSlickItem>
			<BoxListing
				price="149.90 €"
				{image}
				rate={3}
				totalRate={100}
				title="Codeunic"
				subTitle={['07300, Palma de mallorca', '(+34) 662 223 768']}
			/>
		</CarouselSlickItem>
	</CarouselSlick>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
