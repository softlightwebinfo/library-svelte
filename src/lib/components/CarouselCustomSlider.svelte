<script lang="ts">
	import type { ICarouselCustomSliderData } from '$lib/interfaces/ICarouselCustomSliderData';
	import SlickArrow from './SlickArrow.svelte';
	import SlickList from './SlickList.svelte';

	let ref = null;
	let active: number = 0;

	export let col: number = 4;
	export let data: ICarouselCustomSliderData[] = [];
	export let noArrow: boolean = false;
	export let isDetail: boolean = false;
	export let padding: boolean = true;

	const onClick = (pos: number) => () => {
		console.log(pos)
		let length = data.length;
		if (col) {
			length = Math.ceil(length / col);
		}
		const a = (active + pos) % length;
		active = a < 0 ? length - 1 : a;
	};
</script>

<div bind:this={ref} style={$$props.class ?? ''} class="CarouselCustomSlider" class:padding>
	{#if !noArrow}
		<SlickArrow on:click={onClick(-1)} left />
	{/if}
	<SlickList {isDetail} {col} {active} {data} let:item let:index>
		<slot {index} {item} />
	</SlickList>
	{#if !noArrow}
		<SlickArrow on:click={onClick(1)} />
	{/if}
</div>

<style lang="scss">
	.CarouselCustomSlider {
		$space: 40px;
		position: relative;
		box-sizing: border-box;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		-khtml-user-select: none;
		touch-action: pan-y;
		-webkit-tap-highlight-color: transparent;
		overflow: hidden;
		margin-bottom: 40px;
		:global(.SlickArrow) {
			position: absolute;
			top: 0;
			bottom: 0;
			right: $space;
			z-index: 2;
			margin: auto;
		}
		:global(.SlickArrow.left) {
			left: $space;
			right: initial;
		}
	}
	.padding {
		$s: 80px;
		padding-left: $s;
		padding-right: $s;
		:global(.SlickArrow) {
			color: black;
			--border: black;
			right: 0;
			:global(i) {
				color: black;
			}
		}
		:global(.SlickArrow.left) {
			left: 0;
		}
	}
</style>
