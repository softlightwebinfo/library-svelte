<script lang="ts">
	import { useCarousel } from '$lib/hooks/useCarousel';
	import type { ICarouselSlickData } from '$lib/interfaces/ICarouselSlickData';
	import { createEventDispatcher } from 'svelte';
	import Arrow from './Arrow.svelte';
	import CarouselSlickItem from './CarouselSlickItem.svelte';
	import Indicators from './Indicators.svelte';
	const dispatch = createEventDispatcher();

	export let data: ICarouselSlickData[] = [];
	export let showIndicators: boolean = true;
	const { slider, onClickRight, onClickLeft, onClickIndicator, index, indicator } =
		useCarousel(data);
</script>

<slot name="top" {onClickRight} {onClickLeft} item={null} index={null} itemIndex={0} />
<div class="CarouselSlick">
	<Arrow left on:click={onClickLeft} />
	{#if showIndicators}
		<Indicators
			on:click={({ detail }) => onClickIndicator(detail.index)}
			index={$indicator.active}
			length={$indicator.indicators}
		/>
	{/if}
	<div class="CarouselSlick__slider" bind:this={$slider}>
		{#each data as item, itemIndex (item.id)}
			<slot {item} index={itemIndex} currentIndex={index}>
				<CarouselSlickItem
					on:click={() => dispatch('click', { item, currentIndex: index, itemIndex })}
					image={item.image}
					title={item.title}
					{index}
				/>
			</slot>
		{/each}
	</div>
	<Arrow on:click={onClickRight} />
</div>

<style lang="scss">
	.CarouselSlick {
		position: relative;
		&__slider {
			width: 100%;
			overflow-x: hidden;
			overflow-y: hidden;
			white-space: nowrap;
			position: relative;
			display: flex;
			scroll-behavior: smooth;
		}
	}
</style>
