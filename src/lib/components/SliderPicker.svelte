<script lang="ts">
	import type { ICarouselSlickData } from '$lib/interfaces/ICarouselSlickData';
	import ArrowLeftRight from './ArrowLeftRight.svelte';
	import CarouselSlick from './CarouselSlick.svelte';
	import TitleCategory from './TitleCategory.svelte';
	export let title: string;
	export let textButton: string = undefined;
	export let showIndicators: boolean = true;
	export let data: ICarouselSlickData[] = [];
</script>

<div class="SliderPicker">
	<CarouselSlick {data} {showIndicators}>
		<TitleCategory {title} {textButton} slot="top" let:onClickLeft let:onClickRight>
			<ArrowLeftRight slot="right" on:left={onClickLeft} on:right={onClickRight} />
		</TitleCategory>
	</CarouselSlick>
</div>

<style lang="scss">
</style>
