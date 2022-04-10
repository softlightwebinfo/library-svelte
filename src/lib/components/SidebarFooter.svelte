<script lang="ts">
	export let border: boolean = false;
</script>

<footer class="SidebarFooter" class:border>
	<slot />
</footer>

<style lang="scss">
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}
	.border {
		border-top: 1px solid gainsboro;
	}
</style>
