<script>
	import '$lib/style.scss';
	import CategoryItem from '$lib/components/CategoryItem.svelte';
	import Col from '$lib/components/Col.svelte';
	import Row from '$lib/components/Row.svelte';
	import Container from '$lib/components/Container.svelte';
	const image = 'https://photostame.com/images/video-home-poster.jpg';
</script>

<Container class="mt-10">
	<Row>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
	</Row>
	<Row class="mt-4">
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
		<Col sm="3">
			<CategoryItem list={['Rock', 'Metal']} {image} badge="120" title="Comedia" />
		</Col>
	</Row>
</Container>
