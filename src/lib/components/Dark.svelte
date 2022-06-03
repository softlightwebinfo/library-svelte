<script lang="ts">
	export let padding: boolean = false;
</script>

<div class="Dark" class:padding>
	<slot />
</div>

<style lang="scss">
	.Dark {
		background-color: var(--bs-dark-light);
		:global(*) {
			color: var(--bs-light);
		}
		:global(i) {
			color: var(--bs-dark-primary);
		}
	}
	.padding {
		padding: var(--padding);
	}
</style>
