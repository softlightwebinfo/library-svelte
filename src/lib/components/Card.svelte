<script>
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
		border-radius: 15px;
	}
	.shadow {
		@extend %CardBig;
	}
</style>
