<script>
	import '$lib/style.scss';
	import VideoPremium from '$lib/components/VideoPremium.svelte';
	import Parallax from '$lib/components/Parallax.svelte';
	const image = 'https://photostame.com/images/video-home-poster.jpg';
</script>

<Parallax {image}>
	<VideoPremium
		title="El Ejercito"
		{image}
		description="Lorem ipsum es simplemente texto de relleno de la industria de la impresion y la composicion typografica. Lorem ipsum ha sudo el texto de relleno estandar de la industria desde el sigo XV1"
		list={[
			{ header: 'Protagonizada', description: 'Karen, James, Jones' },
			{ header: 'Géneros', description: 'Accion' },
			{ header: 'Etiqueta', description: 'Acción, Adventura, Terror' }
		]}
	/>
</Parallax>
