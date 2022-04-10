<script>
	import '$lib/style.scss';
	import ElementPhotoSection from '$lib/components/ElementPhotoSection.svelte';
	const description =
		'We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos.';
	const title = 'We are Gleam a small and enthusiastic photography studio based in New York';
	const images = [
		{ title: 'titulo 1', image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg' },
		{ title: 'titulo 2', image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg' }
	];
</script>

<ElementPhotoSection {description} {images} {title} />
<ElementPhotoSection {description} {images} {title} />
<ElementPhotoSection {description} {images} {title} />
