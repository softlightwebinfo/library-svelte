<script>
	import '$lib/style.scss';
	import BigCarousel from '$lib/components/BigCarousel.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import CarouselSlider from '$lib/components/CarouselSlider.svelte';
	import image from '$lib/assets/imageBoxart.webp';
</script>

<BigCarousel
	image="https://photostame.com/images/video-home-poster.jpg"
	title="Consciencia band"
	logo="http://conscienciaband.com/wp-content/uploads/2020/06/cropped-85023197_594536911124086_6919593708614582272_n.png"
	top="10"
	topTitle="Nº 3 en grupos de rock hoy"
	description="Despues de un accidente, el famoso abogado de los angeles mickey haller vuelve a arrancar sdu carerra(ysi coche de marca) cuando acepta un caso de asesinato."
>
	<Toolbar slot="actions">
		<Button size="lg" icon="fa fa-play" light>Reproducir</Button>
		<Button size="lg" icon="fa fa-info" dark>Más información</Button>
	</Toolbar>
	<CarouselSlider
		title="Las 10 bandas más populares de Mallorca"
		rows={[
			{ id: 1, image, title: 'Consciencia band' },
			{ id: 2, image, title: 'Almatea' },
			{ id: 3, image, title: 'Sober' },
			{ id: 4, image, title: 'Oeste' },
			{ id: 5, image, title: 'Oeste' },
			{ id: 6, image, title: 'Oeste' },
			{ id: 7, image, title: 'Oeste' },
			{ id: 8, image, title: 'Oeste' },
			{ id: 9, image, title: 'Oeste' },
			{ id: 10, image, title: 'Oeste' },
		]}
	/>
</BigCarousel>
