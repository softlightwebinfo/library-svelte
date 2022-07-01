<script lang="ts">
	import BoxRateShare from './BoxRateShare.svelte';

	import BoxThumb from './BoxThumb.svelte';

	export let image: string;
	export let title: string;
	export let price: string;
	export let subTitle: string[];
	export let rate = 0;
	export let totalRate = 0;
</script>

<div on:click class="BoxListing">
	<BoxThumb {price} {image} {title} {subTitle} />
	<BoxRateShare {rate} {totalRate} />
</div>

<style lang="scss">
	.BoxListing {
		transition: all 0.4s ease 0s;
		display: flex;
		flex-direction: column;
		> :global(.BoxThumb) {
			overflow: hidden;
		}
		&:hover {
			> :global(.BoxThumb img) {
				transform: rotate(20deg) scale(1.8);
			}
		}
	}
</style>
