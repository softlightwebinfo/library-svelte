<script>
	import Image from './Image.svelte';
	export let images = [];
</script>

<section>
	{#each images as image}
		<Image image={image.image} title={image.title} />
	{/each}
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: repeat(8, 1fr);

		:global(.image) {
			flex: 1;
			height: 300px;
			transition: opacity 0.25s linear, filter 0.25s linear;
			position: relative;
			opacity: 1;
			object-fit: cover;
		}
	}
</style>
