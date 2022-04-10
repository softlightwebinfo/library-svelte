<script lang="ts">
	export let card: boolean = false;
	export let rounded: boolean = false;
</script>

<header class="NavbarToolbar" class:card class:rounded>
	<div class="NavbarToolbar__title"><slot name="title" /></div>
	<div class="NavbarToolbar__actions"><slot name="actions" /></div>
</header>

<style lang="scss">
	@import '../sass/_initial.scss';
	.NavbarToolbar {
		padding: 15px;
		display: flex;
		justify-content: space-between;
		background-color: white;
		align-items: center;
	}
	.card {
		@extend %Card;
		@extend %CardBig;
		align-items: baseline;
		flex-direction: row;
	}
	.rounded {
		border-radius: 12px;
	}
</style>
