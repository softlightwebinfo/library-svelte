<script lang="ts">
	import src from '$lib/assets/price-bg.png';
	export let price: string;
</script>

<div class="PriceBg">
	<img {src} title={price} alt={price} />
	<div class="text">{price}</div>
</div>

<style lang="scss">
	img {
		width: 540px;
		height: 163px;
		display: block;
		max-width: 100%;
		margin: 0 auto;
		height: auto;
	}
	.PriceBg {
		position: relative;
	}
	.text {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-weight: bold;
		font-size: 3.75rem;
		white-space: nowrap;
		color: var(--bs-primary);
		margin-top: 0.25rem;
		line-height: 1;
	}
</style>
