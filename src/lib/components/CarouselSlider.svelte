<script lang="ts">
	import Boxart from './Boxart.svelte';
	import PaginationIndicator from './PaginationIndicator.svelte';
	import SliderItem from './SliderItem.svelte';
	import SliderMask from './SliderMask.svelte';
	export let active = 0;
	export let total = 5;
	export let rows = [];
	export let title: string;
</script>

<h2>{title}</h2>
<div class="CarouselSlider">
	<PaginationIndicator {active} {total} />
	<SliderMask>
		{#each rows as item, index (item.id)}
			<SliderItem {index}>
				<Boxart image={item.image} index={index + 1} title={item.title} />
			</SliderItem>
		{/each}
	</SliderMask>
</div>

<style lang="scss">
	.CarouselSlider {
		position: relative;
		margin: 0;
		padding: 0 4%;
		-ms-touch-action: pan-y;
		touch-action: pan-y;
		z-index: 2;
		@media screen and (min-width: 1500px) {
			padding: 0 60px;
		}
	}
	h2 {
		color: white;
		@media screen and (min-width: 1500px) {
			padding: 0 60px;
		}
	}
</style>
