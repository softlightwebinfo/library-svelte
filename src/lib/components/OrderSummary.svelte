<script lang="ts">
</script>

<div class="OrderSummary">
	<slot />
</div>

<style lang="scss">
	.OrderSummary {
		:global(> *) + :global(*) {
			border-top: 1px solid gainsboro;
		}
	}
</style>
