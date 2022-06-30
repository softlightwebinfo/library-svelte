<script>
	import '$lib/style.scss';
	import SliderPicker from '$lib/components/SliderPicker.svelte';
	import Container from '$lib/components/Container.svelte';
	import image from '$lib/assets/imageBoxart.webp';
import Divider from '$lib/components/Divider.svelte';
	let data = [...new Array(100)].map((__, i) => ({
		id: i + 1,
		title: 'Thse small business ideas are Great ' + i,
		image
	}));
</script>

<Container>
	<SliderPicker textButton="Mostrar todo" title="EDITORS PICKS" {data} showIndicators={false}/>
	<Divider/>
	<SliderPicker title="Example" {data} />
</Container>
