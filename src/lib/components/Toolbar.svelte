<script lang="ts">
	export let right: boolean = false;
	export let left: boolean = false;
	export let center: boolean = false;
</script>

<div class="Toolbar" class:right class:left class:center>
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
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
</style>
