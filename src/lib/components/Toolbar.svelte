<script lang="ts">
	export let right: boolean = false;
	export let left: boolean = false;
	export let center: boolean = false;
	export let spaceBetween: boolean = false;
	export let alignCenter: boolean = false;
</script>

<div class="Toolbar" class:alignCenter class:right class:left class:center class:spaceBetween>
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		width: 100%;
	}
	.right {
		margin-left: auto;
	}
	.left {
		margin-right: auto;
	}
	.center {
		margin-left: auto;
		margin-right: auto;
	}
	.spaceBetween {
		justify-content: space-between;
	}
	.alignCenter {
		align-items: center;
	}
</style>
