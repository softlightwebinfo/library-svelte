<script>
	import '$lib/style.scss';
	import image from '$lib/assets/imageBoxart.webp';
	import UserReview from '$lib/components/UserReview.svelte';
	import { CardGrid } from '$lib';
	import Container from '$lib/components/Container.svelte';
	const description = `We use cookies to understand how you use our site, to personalize content and to improve your
			experience. By continuing to use our site, you accept our use of cookies and revised.`;
</script>

<Container class="mt-10">
	<CardGrid bordered shadow>
		<UserReview title="Rafa gonzalez" subTitle="Regular client" {image} {description} />
		<UserReview title="Rafa gonzalez" subTitle="Regular client" {image} {description} />
		<UserReview title="Rafa gonzalez" subTitle="Regular client" {image} {description} />
		<UserReview title="Rafa gonzalez" subTitle="Regular client" {image} {description} />
	</CardGrid>
</Container>
