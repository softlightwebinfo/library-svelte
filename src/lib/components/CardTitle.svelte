<script lang="ts">
	export let subTitle: string = '';
</script>

<div class="CardTitle">
	<h3 class="CardTitle">
		<slot />
	</h3>
	{#if subTitle}
		<p>{subTitle}</p>
	{/if}
</div>

<style lang="scss">
	h3 {
		font-size: 15px;
		font-weight: 600;
		color: var(--bs-gray-700);
		margin: 0;
	}
	p {
		margin: 0;
	}
</style>
