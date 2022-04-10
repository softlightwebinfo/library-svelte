<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Image from '$lib/components/Image.svelte';

	export let images: { image: string; title: string }[];
	export let title: string;
	export let description: string;
</script>

<Container class="elementPhotoSection">
	<div class="elementPhotoSection__left">
		{#each images as image}
			<Image image={image.image} title={image.title} />
		{/each}
	</div>
	<div class="elementPhotoSection__right">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
</Container>

<style lang="scss">
	:global(.elementPhotoSection) {
		$p: 60px;
		padding-top: $p;
		padding-bottom: $p;
		display: flex;
		flex-direction: row;
		gap: 30px;

		&:nth-child(even) {
			flex-direction: row-reverse;
		}
		
        & + & {
			border-top: 1px dashed gainsboro;
		}

		h2 {
			color: #151515;
			padding: 0;
			margin: 0;
			font-weight: 200;
			line-height: 1.2em;
			font-size: 48px;
		}

		p {
			line-height: 1.7;
			margin-bottom: 0;
			color: rgb(133, 133, 133);
			font-size: 16px;
			margin-top: 50px;
		}

		.elementPhotoSection__left {
			display: flex;
			padding-right: 30px;
			flex: 0 0 55%;
			gap: 20px;
			img {
				flex: 1;
				width: 50% !important;

				&:first-child {
					padding-right: 20px;
				}
			}
		}
	}
</style>
