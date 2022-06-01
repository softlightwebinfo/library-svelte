<script lang="ts">
	import Badge from './Badge.svelte';
	import CardImage from './CardImage.svelte';

	export let image: string;
	export let viewers: number;
	export let live: boolean = false;
	export let title: string;
</script>

<div class="LiveItem {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<CardImage {title} {image} />
	<Badge bg="dark" class="LiveItem__viewers">
		{viewers} viewes
	</Badge>
	{#if live}
		<Badge class={'LiveItem__live'} bg={'danger'}>EN DIRECTO</Badge>
	{/if}
</div>
<h3 class={'LiveItem__title'}>{title}</h3>

<style lang="scss">
	.LiveItem {
		position: relative;

		&__live {
			position: absolute;
			left: 30px;
			bottom: 30px;
			z-index: 1;
		}
		:global(.LiveItem__live) {
			position: absolute;
			top: 20px;
			left: 20px;
		}
		:global(.LiveItem__viewers) {
			position: absolute;
			bottom: 20px;
			left: 20px;
		}
		&__title {
			font-family: 'Rubik', sans-serif;
			font-size: 18px;
			line-height: 28px;
			font-weight: 400;
			color: black;
			margin-bottom: 0;
			margin-top: 15px;
			width: calc(100% - 55px);
		}
	}
</style>
