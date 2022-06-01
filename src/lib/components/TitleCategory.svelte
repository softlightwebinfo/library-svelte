<script lang="ts">
	import Button from './Button.svelte';

	export let title: string;
	export let hiddenRight: boolean = false;
	export let textButton: string = 'Ver todo';
</script>

<div class="TitleCategory {$$props.class ?? ''}" style={$$props.style}>
	<h4>{title}</h4>
	{#if $$slots.right}
		<div class="TitleCategory__right">
			<slot name="right" />
		</div>
	{/if}
	{#if !hiddenRight}
		<Button on:click>{textButton}</Button>
	{/if}
</div>

<style lang="scss">
	.TitleCategory {
		--iq-body-text: black;
		margin-bottom: 20px;
		justify-content: space-between;
		align-items: center;
		display: flex;
		width: 100%;
		h4 {
			color: black;
			font-size: 1.667em;
		}

		> div {
			margin-left: auto;
		}

		:global(.Button) {
			color: var(--iq-body-text);
		}
	}
</style>
