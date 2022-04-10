<script>
	export let href = null;
	export let icon = null;
</script>

<a {href} class="DropdownItem">
	{#if icon}
		<i class={icon} />
	{/if}
	<span>
		<slot />
	</span>
</a>

<style lang="scss">
	.DropdownItem {
		width: 100%;
		padding: 10px 25px;
		clear: both;
		font-weight: 400;
		color: #212529;
		text-align: inherit;
		white-space: nowrap;
		background-color: transparent;
		border: 0;
		gap: 5px;
		display: flex;
		align-items: center;
		&:hover,
		&:focus,
		&:active {
			color: #1e2125;
			cursor: pointer;
			text-decoration: none;
			background-color: #f8f9fa;
		}
	}
	i {
		font-size: 16px;
		color: #74788d;
	}
</style>
