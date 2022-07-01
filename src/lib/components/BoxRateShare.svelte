<script lang="ts">
	import Fab from './Fab.svelte';

	import Rate from './Rate.svelte';
	export let rate: number = 0;
	export let totalRate: number = 0;
</script>

<div class="BoxRateShare">
	<Rate {totalRate} {rate} />
	<Fab on:click><i class="fa fa-heart" /></Fab>
</div>

<style lang="scss">
	.BoxRateShare {
		background: #ffffff none repeat scroll 0 0;
		-webkit-border-radius: 0 0 4px 4px;
		-moz-border-radius: 0 0 4px 4px;
		-ms-border-radius: 0 0 4px 4px;
		-o-border-radius: 0 0 4px 4px;
		border-radius: 0 0 4px 4px;
		-webkit-box-shadow: 2px 0 5px rgb(0 0 0 / 10%);
		-moz-box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		-ms-box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		-o-box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		box-shadow: 2px 0 5px rgb(0 0 0 / 10%);
		height: 40px;
		margin-bottom: 6px;
		padding: 0 20px;
		position: relative;
		width: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		:global(.Fab) {
			position: absolute;
			right: 20px;
			bottom: calc(100% - 20px);
		}
	}
	i {
		color: black;
	}
</style>
