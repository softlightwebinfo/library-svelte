<script lang="ts">
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardImage from './CardImage.svelte';
	import CardTitleDescription from './CardTitleDescription.svelte';

	export let image: string;
	export let title: string;
	export let description: string;
	export let label: string;
	export let id: string | number;
	export let isDefault: boolean = false;
</script>

<div class:isDefault>
	<Card style={$$props.style ?? ''} class={'LayoutCardVideo'} default>
		<CardImage {title} {image} />
		<CardBody>
			<CardTitleDescription {description} {title} {label} />
		</CardBody>
	</Card>
</div>

<style lang="scss">
	.isDefault {
		:global(.CardBody) {
			position: absolute;
			left: 25px;
			top: 0;
			bottom: 0;
			z-index: 1;
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			color: white;
			text-shadow: 2px 2px 5px black;
		}
	}
</style>
