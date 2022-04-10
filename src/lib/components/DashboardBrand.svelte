<script lang="ts">
	export let logo: string;
	export let title: string;
	export let dark = true;
</script>

<div class:dark class="DashboardBrand {$$props.class ?? ''}">
	<img src={logo} alt={title} {title} />
</div>

<style lang="scss">
	.DashboardBrand {
		padding: 0 1.5rem;
		text-align: center;
		width: var(--dashboard-sidebar__width, 250px);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		transition: var(--transition);
	}
	img {
		width: auto;
		height: 100%;
	}
	.dark {
		background: var(--dark);
	}
</style>
