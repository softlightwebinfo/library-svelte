<script lang="ts">
	import Badge from './Badge.svelte';

	export let title: string;
	export let description: string;
	export let label: string;
</script>

<div class="CardTitleDescription {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<h6>{title}</h6>
	<div>
		{#if label}
			<Badge round={false} bg={'secondary'}>{label}</Badge>
		{/if}
		<span>{description}</span>
	</div>
</div>

<style lang="scss">
	.CardTitleDescription {
		h6 {
			font-size: 1.5em;
		}

		> div {
			display: flex;
			align-items: center;

			> span {
				font-size: 14px;
				margin-left: 10px;
			}
		}
	}
</style>
