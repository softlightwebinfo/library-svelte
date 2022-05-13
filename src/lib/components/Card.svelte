<script lang="ts">
	export let column = false;
	export let rounded = false;
	export let shadow = false;
	export let border = false;
</script>

<div
	class="Card {$$props.class ?? ''}"
	style={$$props.style ?? ' '}
	class:column
	class:rounded
	class:shadow
	class:border
>
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
	.border {
		border: 1px solid gainsboro;
	}
</style>
