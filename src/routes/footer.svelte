<script>
	import CatTitle from '$lib/components/CatTitle.svelte';
	import Col from '$lib/components/Col.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import List from '$lib/components/List.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Row from '$lib/components/Row.svelte';
	import SubTitle from '$lib/components/SubTitle.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<Footer>
	<Title title="Codeunic" />
	<Row>
		<Col sm="3">
			<SubTitle title="Información" />
			<Divider />
			<Nav vertical>
				<a href="/">Pagina principal</a>
				<a href="/">Inicia sesión</a>
				<a href="/">Crea una nueva cuenta</a>
			</Nav>
		</Col>
		<Col sm="3">
			<SubTitle title="Páginas de interes" />
			<Divider />
			<Nav vertical>
				<a href="/">Pagina principal</a>
				<a href="/">Inicia sesión</a>
				<a href="/">Crea una nueva cuenta</a>
			</Nav>
		</Col>
		<Col sm="3">
			<SubTitle title="Redes sociales" />
			<Divider />
			<Nav vertical>
				<a href="/">Pagina principal</a>
				<a href="/">Inicia sesión</a>
				<a href="/">Crea una nueva cuenta</a>
			</Nav>
		</Col>
		<Col sm="3" />
	</Row>
</Footer>
<Footer sub>
	<div>Copyright 2022 © Codeunic - Todos los derechos reservados</div>
	<div>Build by Codeunic</div>
</Footer>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
