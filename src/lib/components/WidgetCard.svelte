<script>
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardFooter from './CardFooter.svelte';

	import CardHeader from './CardHeader.svelte';
	export let noPadding = false;
</script>

<Card class="WidgetCard">
	<CardHeader>
		<slot name="header" />
	</CardHeader>
	<CardBody {noPadding}>
		<slot />
	</CardBody>
	<CardFooter>
		<slot name="footer" />
	</CardFooter>
</Card>

<style lang="scss">
	:global(.WidgetCard) {
		width: 320px;
		:global(.CardBody) {
			max-height: 230px;
			overflow: auto;
		}
	}
</style>
