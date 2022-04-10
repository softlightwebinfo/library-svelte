<script lang="ts">
	import ImageBox from './ImageBox.svelte';

	interface IImage {
		title: string;
		url: string;
		id: string;
		image: string;
		category: string;
	}
	export let images: IImage[] = [];
</script>

<div class="galleryImagesHover">
	{#each images as image}
		<a href={image.url}>
			<ImageBox {...image} />
		</a>
	{/each}
</div>

<style lang="scss">
	.galleryImagesHover {
		display: flex;
		flex-wrap: wrap;
		a {
			width: 25%;
			height: 300px;
			display: block;
		}
	}
</style>
