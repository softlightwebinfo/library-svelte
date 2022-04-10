<div class="DashboardBody">
	<slot/>
</div>

<style lang="scss">
	.DashboardBody {
		margin-left: var(--dashboard-sidebar__width);
		overflow: hidden;
		margin-top: var(--navbar_height);
		transition: var(--transition);
	}
</style>
