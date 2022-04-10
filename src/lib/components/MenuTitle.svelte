<script>
	export let dark = true;
</script>

<li class:dark class="MenuTitle">
	<slot />
</li>

<style lang="scss">
	li {
		padding: 12px 20px !important;
		letter-spacing: 0.05em;
		pointer-events: none;
		cursor: default;
		font-size: 11px;
		text-transform: uppercase;
		color: #7f8387;
		font-weight: 600;
		display: block;
		width: 100%;
	}
	.dark {
		color: var(--dark-color);
	}
</style>
