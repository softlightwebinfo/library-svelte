<script lang="ts">
	import Card from './Card.svelte';
</script>

<Card class="CardList">
	<slot />
</Card>

<style lang="scss">
	:global(.CardList) {
		:global(*) {
			margin: 0 !important;
		}
	}
</style>
