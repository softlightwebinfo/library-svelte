<script lang="ts">
</script>

<table class="Table {$$props.class ?? ''}">
	<thead>
		<slot name="thead" />
	</thead>
	<tbody>
		<slot />
	</tbody>
	{#if $$slots.tbody}
		<tbody>
			<slot name="tbody" />
		</tbody>
	{/if}
</table>

<style lang="scss">
	.Table {
		width: 100%;
		margin-bottom: 1rem;
		color: #5e6e82;
		vertical-align: top;
		border-color: rgb(237, 242, 249);
		caption-side: bottom;
		border-collapse: collapse;
		background-color: var(--bs-white);
	}
</style>
