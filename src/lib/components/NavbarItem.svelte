<script lang="ts">
	export let center: boolean = false;
</script>

<div class:center class="NavbarItem {$$props.class ?? ''}">
	<slot />
</div>

<style lang="scss">
	div {
		height: var(--navbar_height);
	}
	.center {
		align-items: center;
		display: inline-flex;
		justify-content: center;
	}
</style>
