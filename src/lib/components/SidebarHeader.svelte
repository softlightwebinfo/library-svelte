<script lang="ts">
	export let border = false;
</script>

<header class="SidebarHeader" class:border>
	<slot />
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}
	.border {
		border-bottom: 1px solid gainsboro;
	}
</style>
