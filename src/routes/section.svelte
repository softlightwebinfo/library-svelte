<script>
	import SectionDark from '$lib/components/SectionDark.svelte';
	import image from '$lib/assets/cat-bg1.jpeg';
import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<SectionDark {image} title="Big sale" subTitle="Spring" button="Shop now" href="/" />
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
