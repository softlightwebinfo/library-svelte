<script lang="ts">
	import Card from './Card.svelte';

	export let shadow = false;
	export let bordered = false;
</script>

<Card {shadow} {bordered} class="CardGrid {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<slot />
</Card>

<style lang="scss">
	@import '../sass/_placeholders.scss';
	:global(.CardGrid) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row !important;
		:global(> *) {
			flex: 1 1 300px;
			border: 0;
			border-radius: 0 !important;
			box-shadow: none !important;
			border: 1px solid whitesmoke !important;
		}
	}
</style>
