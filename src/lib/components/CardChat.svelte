<script>
	import Card from '$lib/components/Card.svelte';
</script>

<Card class="CardChat {$$props.class ?? ''}">
	<div>
		<aside><slot name="aside" /></aside>
		<section><slot name="content" /></section>
	</div>
</Card>

<style lang="scss">
	:global(.CardChat) {
		height: 100%;
		z-index: 1;
		overflow: hidden;
	}
	div {
		border-bottom-left-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
		flex: 1 1 auto;
		position: relative;
		overflow: hidden;
		display: flex;
	}
	aside {
		position: absolute;
		height: 100%;
		z-index: 11;
		top: 0;
		left: -100%;
		width: 100%;
		transition: all 0.5s ease;
		overflow: hidden;
		border-right: 1px solid gainsboro;
		display: flex;
		flex-direction: column;
		> :global(*) {
			border: 0 !important;
		}
		@media (min-width: 768px) {
			position: relative;
			height: 100%;
			top: 0;
			left: 0;
			width: auto;
			transition: none;
		}

		@media (min-width: 992px) {
			flex: 0 0 17.5rem;
			max-width: 17.5rem;
		}

		@media (min-width: 1540px) {
			flex: 0 0 21.88rem;
			max-width: 21.88rem;
		}
	}
	section {
		flex-grow: 1;
		flex-basis: 0;
		max-width: 100%;
		height: 100%;
		font-size: 0.8333333333rem;
		position: relative;
		display: flex;
		flex-direction: column;
		display: flex;
		flex-direction: column;
	}
</style>
