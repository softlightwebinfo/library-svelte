<script lang="ts">
</script>

<div class="EventList">
	<slot />
</div>

<style lang="scss">
	.EventList {
		display: grid;
		grid-template-columns: var(--EventList_columns, repeat(2, 1fr));
		gap: 15px;
		:global(.Event) {
			border-bottom: 1px dashed gainsboro;
			padding-bottom: 10px;
		}
	}
</style>
