<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte';
	import Description from './Description.svelte';
	import PriceBadge from './PriceBadge.svelte';
	import TitleCategory from './TitleCategory.svelte';
	import TitleHeading from './TitleHeading.svelte';

	export let image: string;
	export let title: string;
	export let price: string;
	export let subTitle: string[];
</script>

<header class="BoxThumb">
	<BackgroundImage {image} {title} />
	<PriceBadge {price} />
	<div class="content">
		<TitleHeading>{title}</TitleHeading>
		{#each subTitle as item}
			<Description>{item}</Description>
		{/each}
	</div>
</header>

<style lang="scss">
	.BoxThumb {
		--bs-description: var(--bs-white);
		--bs-primary-rgb: var(--bs-white);
		color: white;
		position: relative;
		border-radius: 4px 4px 0 0;
		height: 100%;
		position: relative;
		width: 100%;
		z-index: 0;
		transition: all 0.4s ease 0s;
		&::before {
			background: -moz-linear-gradient(
				top,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 23, 31, 0.45) 30%,
				rgba(0, 23, 31, 0.65) 100%
			);
			background: -webkit-gradient(
				linear,
				left top,
				left bottom,
				color-stop(0%, rgba(0, 0, 0, 0)),
				color-stop(30%, rgba(0, 23, 31, 0.45)),
				color-stop(100%, rgba(0, 23, 31, 0.65))
			);
			background: -webkit-linear-gradient(
				top,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 23, 31, 0.45) 30%,
				rgba(0, 23, 31, 0.65) 100%
			);
			background: -o-linear-gradient(
				top,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 23, 31, 0.45) 30%,
				rgba(0, 23, 31, 0.65) 100%
			);
			background: -ms-linear-gradient(
				top,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 23, 31, 0.45) 30%,
				rgba(0, 23, 31, 0.65) 100%
			);
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 23, 31, 0.45) 30%,
				rgba(0, 23, 31, 0.65) 100%
			);
			content: '';
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}
	}
	.content {
		bottom: 0;
		left: 0;
		padding: 20px;
		position: absolute;
		width: 100%;
		z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        text-align: left;
		:global(.TitleHeading) {
            margin: 0!important;
			margin-bottom: 15px!important;
			font-size: 22px;
			position: static!important;
			padding: 0!important;
		}
	}
</style>
