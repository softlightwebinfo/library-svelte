<script lang="ts">
	export let title: string;
	export let subTitle: string = null;
</script>

<div class="TitleSubtitle">
	<h3>{title}</h3>
	{#if subTitle}
		<p>{subTitle}</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 100%;
	}
	h3 {
		font-size: 1rem;
		line-height: 1;
		color: var(--bs-secondary);
	}
	p {
		line-height: 1;
		font-size: 0.8944444444rem;
		color: var(--bs-gray-700);
	}
</style>
