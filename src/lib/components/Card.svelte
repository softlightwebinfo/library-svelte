<script>
	import CardHeader from './CardHeader.svelte';
	export let column = false;
	export let rounded = false;
	export let shadow = false;
</script>

<div class="Card {$$props.class ?? ''}" class:column class:rounded class:shadow>
	<slot />
</div>

<style lang="scss">
	@import '../sass/_initial.scss';
	.Card {
		@extend %Card;
	}
	.column {
		display: flex;
		flex-direction: row;
	}
	.rounded {
		border-radius: 20px;
		:global(.CardHeader) {
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
		}
		:global(.CardFooter) {
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}
	}
	.shadow {
		@extend %CardBig;
	}
</style>
