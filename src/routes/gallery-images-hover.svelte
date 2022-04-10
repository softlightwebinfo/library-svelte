<script>
	import '$lib/style.scss';
	import GalleryImagesHover from '$lib/components/GalleryImagesHover.svelte';
	const images = [
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		},
		{
			image: 'https://photostame.com/upload/thumbs/gal-5-04.jpg',
			title: 'Family moments',
			category: 'Boda'
		}
	];
</script>

<GalleryImagesHover {images} />
