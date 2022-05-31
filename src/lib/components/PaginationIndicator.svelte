<script lang="ts">
	export let active = 0;
	export let total = 0;

	$: data = [...new Array(total)];
</script>

<ul class="PaginationIndicator">
	{#each data as _, index}
		<li class:active={index == active} />
	{/each}
</ul>

<style lang="scss">
	.PaginationIndicator {
		margin: -24px 0 12px 0;
		padding: 0;
		list-style-type: none;
		position: absolute;
		top: 0;
		right: 62px;
	}
	li {
		display: inline-block;
		width: 12px;
		height: 2px;
		background-color: #4d4d4d;
		margin-left: 1px;
	}
	.active {
		background-color: #aaa;
	}
</style>
