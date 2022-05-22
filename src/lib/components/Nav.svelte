<script lang="ts">
	export let vertical = false;
</script>

<nav class="Nav" class:vertical>
	<slot />
</nav>

<style lang="scss">
	.Nav {
		display: flex;
		gap: var(--nav__gap, 5px);
		:global(> a) {
			color: white;
			font-size: 16px;
			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}

	.vertical {
		flex-direction: column;
	}
</style>
