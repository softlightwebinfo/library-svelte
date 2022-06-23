<script>
	import '$lib/style.scss';
	import BannerImageContent from '$lib/components/BannerImageContent.svelte';
	import image from '$lib/assets/imageBoxart.webp';
	import CardBox from '$lib/components/CardBox.svelte';

	const title = 'The fasted HTML TEMPLATE';
	const description = `We use cookies to understand how you use our site, to personalize content and to improve your
			experience. By continuing to use our site, you accept our use of cookies and revised.`;
</script>

<BannerImageContent {image}>
	<CardBox {description} {title} />
</BannerImageContent>
