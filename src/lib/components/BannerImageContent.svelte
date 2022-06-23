<script lang="ts">
	import Container from './Container.svelte';

	export let image: string;
	export let title: string;
</script>

<section class="BannerImageContent {$$props.class ?? ''}" style={$$props.style}>
	<img src={image} alt={title} {title} />
	<Container class="content">
		<slot />
	</Container>
</section>

<style lang="scss">
	.BannerImageContent {
		position: relative;
		height: 640px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
		:global(.content) {
			position: absolute;
			top: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			left: 0;
			right: 0;
			> :global(*) {
				max-width: 500px;
			}
		}
	}
</style>
