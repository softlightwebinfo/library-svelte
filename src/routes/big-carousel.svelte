<script>
	import '$lib/style.scss';
	import BigCarousel from '$lib/components/BigCarousel.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import CarouselSlider from '$lib/components/CarouselSlider.svelte';
	import image from '$lib/assets/imageBoxart.webp';
	import TitleCategory from '$lib/components/TitleCategory.svelte';
	import LayoutCardVideo from '$lib/components/LayoutCardVideo.svelte';
	import CarouselCustomSlider from '$lib/components/CarouselCustomSlider.svelte';
	import ContainerFluid from '$lib/components/ContainerFluid.svelte';
	const image2 = 'https://photostame.com/images/video-home-poster.jpg';
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
			{ id: 1, label: 'Rock', image, title: 'Consciencia band' },
			{ id: 2, label: 'Rock', image, title: 'Almatea' },
			{ id: 3, label: 'Rock', image, title: 'Sober' },
			{ id: 4, label: 'Rock', image, title: 'Oeste' },
			{ id: 5, label: 'Rock', image, title: 'Oeste' },
			{ id: 6, label: 'Rock', image, title: 'Oeste' },
			{ id: 7, label: 'Rock', image, title: 'Oeste' },
			{ id: 8, label: 'Rock', image, title: 'Oeste' },
			{ id: 9, label: 'Rock', image, title: 'Oeste' },
			{ id: 10, label: 'Rock', image, title: 'Oeste' }
		]}
	/>
	<ContainerFluid expand>
		<div style="padding-left:80px;padding-right: 80px;">
			<TitleCategory title={'Magia'} />
		</div>
		<CarouselCustomSlider
			col={4}
			data={[
				{
					image: image2,
					title: 'Tierra de dinosaurios',
					description: '3 temporadas',
					label: '18+',
					id: '1'
				},
				{
					image: image2,
					title: 'Polvo de arena',
					description: '2h 30m',
					label: '13+',
					id: 2
				},
				{
					image: image2,
					title: 'Boop Bitty',
					description: '2h 30m',
					label: '15+',
					id: 3
				},
				{
					image: image2,
					title: 'El ultimo suspiro',
					description: '1h 40m',
					label: '15+',
					id: 4
				},
				{
					image: image2,
					title: 'Otro peligro',
					description: '3h',
					label: '25+',
					id: 5
				},
				{
					image: image2,
					title: '1980',
					description: '2h 45m',
					label: '11+',
					id: 6
				},
				{
					image: image2,
					title: 'Sombra',
					description: '2h 10m',
					label: '11+',
					id: 7
				},
				{
					image: image2,
					title: 'Dentro del mar',
					description: '1h 25m',
					label: '11+',
					id: 8
				}
			]}
			let:item
		>
			<LayoutCardVideo {...item} isDefault />
		</CarouselCustomSlider>
	</ContainerFluid>
</BigCarousel>
