<script lang="ts">
	export let header: string;
	export let description: string;
</script>

<div class="ListDataItem {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<b>
		<slot name="header">
			{header}:
		</slot>
	</b>
	<span>
		<slot name="description">
			{description}
		</slot>
	</span>
</div>

<style lang="scss">
	.ListDataItem {
		font-size: 20px;
		font-weight: 500;

		b {
			color: var(--bs-orange);
		}

		span {
			font-size: 16px;
			font-weight: 400;
			color: var(--bs-dark);
			margin-left: 5px;
		}
	}
</style>
