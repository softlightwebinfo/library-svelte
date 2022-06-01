<script>
	import '$lib/style.scss';
	import Parallax from '$lib/components/Parallax.svelte';
	import CarouselCustomSlider from '$lib/components/CarouselCustomSlider.svelte';
	import LayoutCardVideo from '$lib/components/LayoutCardVideo.svelte';
	import ContainerFluid from '$lib/components/ContainerFluid.svelte';
	const image = 'http://localhost:6006/images/parallex.jpg';
	const image2 = 'http://localhost:6006/images/parallex.jpg';
</script>

<Parallax {image}>
	<ContainerFluid>
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
</Parallax>
