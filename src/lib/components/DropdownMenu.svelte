<script>
	import { fade } from 'svelte/transition';
</script>

<div class="DropdownMenu" transition:fade>
	<slot />
</div>

<style lang="scss">
	.DropdownMenu {
		position: absolute;
		z-index: 1000;
		min-width: 10rem;
		padding: 0;
		margin: 0;
		font-size: 0.8125rem;
		color: #495057;
		text-align: left;
		list-style: none;
		background-color: #fff;
		background-clip: padding-box;
		border: 0 solid rgba(0, 0, 0, 0.15);
		border-radius: 0.25rem;
		box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
		z-index: 1000;
		right: 0;
	}
</style>
