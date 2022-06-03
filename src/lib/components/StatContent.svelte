<script lang="ts">
	export let title: string;
</script>

<div data-testid="StatContent" class={'StatContent'} style={$$props.style ?? ''}>
	{#if $$slots.top}
		<p class={'StatContent__top'}>
			<slot name="top" />
		</p>
	{/if}
	<p class={'StatContent__title'}>{title}</p>
	{#if $$slots.bottom}
		<p class={'StatContent__bottom'}>
			<slot name="bottom" />
		</p>
	{/if}
</div>

<style lang="scss">
	.StatContent {
		padding-top: 1.2rem;
		padding-bottom: 1.2rem;
		text-align: center;
		width: 100%;

		&__title {
			font-size: 7.2rem;
			font-weight: 600;
			line-height: 1;
			letter-spacing: -0.05em;
		}

		&__top {
			font-size: 2.4rem;
			line-height: 1.25;
		}

		&__bottom {
			font-weight: 400;
			font-size: 1.8rem;
		}
	}
</style>
