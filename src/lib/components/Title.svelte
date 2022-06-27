<script lang="ts">
	export let title;
	export let black: boolean = false;
	export let center: boolean = false;
</script>

<h2 class:black class:center>
	{title}
</h2>

<style lang="scss">
	h2 {
		font-size: 40px;
		font-weight: 600;
		margin: 15px 0 25px;
	}
	.black {
		color: var(--bs-black);
	}
	.center {
		text-align: center;
	}
</style>
