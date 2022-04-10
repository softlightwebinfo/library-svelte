<script lang="ts">
	export let icon: string;
	export let title: string;
</script>

<div class="FaqRow">
	<i class={icon} />
	<div>
		<h5>{title}</h5>
		<slot />
	</div>
</div>

<style lang="scss">
	.FaqRow {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
	:global(.FaqRow) + :global(.FaqRow) {
		margin-top: 20px;
	}
	:global(*) {
		--bs-text-opacity: 1;
		color: var(--bs-secondary);
	}
	i {
		color: green;
	}
	h5 {
		color: var(--bs-gray-700);
		font-size: 15px;
	}
</style>
