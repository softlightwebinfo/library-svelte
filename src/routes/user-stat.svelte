<script lang="ts">
	import CarouselSlick from '$lib/components/CarouselSlick.svelte';
	import CarouselSlickItem from '$lib/components/CarouselSlickItem.svelte';
	import Container from '$lib/components/Container.svelte';

	import UserStat from './../lib/components/UserStat.svelte';
	const image = 'https://photostame.com/images/video-home-poster.jpg';
</script>

<Container>
	<CarouselSlick
		data={[...new Array(100)].map((_, i) => ({
			id: i,
			title: `Title - ${i}`,
			image
		}))}
		showHideItems
		autoHeight={false}
	>
		<CarouselSlickItem class="UserStatGlobal">
			<UserStat {image} name="Codeunic" avatar={image} />
		</CarouselSlickItem>
	</CarouselSlick>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
	.UserStatGlobal {
		--carousel-slick-item_width: 150px;
		--carousel-slick-item_height: 150px !important;
		// height: var(--carousel-slick-item_height);
	}
</style>
