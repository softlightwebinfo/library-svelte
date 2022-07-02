<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte';
	import BottomGradient from './BottomGradient.svelte';
	import TitleHeading from './TitleHeading.svelte';
	export let image: string = '';
	export let title: string = '';
</script>

<article class="CarouselSlickItem {$$props.class ?? ''}" on:click>
	<slot>
		<BackgroundImage {image} {title} />
		<BottomGradient />
		<TitleHeading>{title}</TitleHeading>
	</slot>
</article>

<style lang="scss">
	.CarouselSlickItem {
		flex: 0 0 var(--carousel-slick-item_width);
		height: var(--carousel-slick-item_height);
		display: inline-block;
		position: relative;
		color: white;
		padding: 0 2px;
		font-size: 0.8rem;
		transition: all 0.8s ease-in-out;
		&:hover {
			// background-color: black;
			// cursor: pointer;
			// :global(.BackgroundImage) {
			// 	background-color: black;
			// 	opacity: 0.5;
			// }
		}
		:global(.TitleHeading) {
			position: absolute;
			bottom: 20px;
			z-index: 1;
			color: var(--bs-white);
			text-align: center;
			padding: 20px;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: auto;
			left: 0;
			right: 0;
			white-space: pre-wrap;
		}
	}
</style>
