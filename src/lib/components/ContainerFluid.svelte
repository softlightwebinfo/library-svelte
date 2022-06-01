<script lang="ts">
	export let expand: boolean = false;
</script>

<div class="ContainerFluid" class:expand>
	<slot />
</div>

<style lang="scss">
	.ContainerFluid {
		width: 100%;
		padding-right: var(--bs-gutter-x, 12px);
		padding-left: var(--bs-gutter-x, 12px);
		margin-right: auto;
		margin-left: auto;
	}
	.expand {
		padding-left: 40px;
		padding-right: 40px;
	}
</style>
