<script lang="ts">
	export let rate: number;
	export let totalRate: number;
</script>

<div class="Rate {$$props.class ?? ''}" style={$$props.style}>
	{#each [...new Array(5)] as _, index}
		<i class="fa fa-star" class:active={index + 1 <= rate} />
	{/each}
</div>

<span>({totalRate})</span>

<style lang="scss">
	.Rate {
		display: inline-flex;
		gap: 2px;
		i,
		& {
			color: var(--bs-black);
		}
		.active {
			color: gold;
		}
	}
	span {
		margin-left: 10px;
		color: var(--bs-black);
	}
</style>
