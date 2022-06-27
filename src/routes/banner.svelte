<script>
	import '$lib/style.scss';
	import Banner from '$lib/components/Banner.svelte';
	import Box from '$lib/components/Box.svelte';
	import SubTitle from '$lib/components/SubTitle.svelte';
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import image from '$lib/assets/banner-bg.jpeg';
	import Divider from '$lib/components/Divider.svelte';
	import PriceBg from '$lib/components/PriceBg.svelte';
	import Button from '$lib/components/Button.svelte';
	import Center from '$lib/components/Center.svelte';
	import Description from '$lib/components/Description.svelte';
</script>

<Banner image="https://api.emprendimos.com/images/sliders/73ab57cce19cd8fe43dc298e02e95965.jpg">
	<Box>
		<SubTitle title="Most Afordable Properties" />
		<Title title="A beautiful luxuries " />
		<Paragraph>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper
			nibh volutpat at. In rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed
			cursus eros ligula non odio. Suspendisse volutpat sagittis sapien. Curabitur quis malesuada
			ipsum.
		</Paragraph>
	</Box>
</Banner>
<Divider />
<Banner {image} opacity={false} right>
	<Center>
		<h2>Happy sunday</h2>
		<PriceBg price="40% off" />
		<p>For all Vegetables</p>
		<Button primary rounded>Show now <i class="fa fa-chevron-right" /></Button>
	</Center>
</Banner>
<Divider />
<Banner {image} opacity={false} center>
	<Center>
		<h2>All natural products</h2>
		<Title title="Live Healthy" black />
		<Description center black class="mb-10">
			Summer is going to say goodbye! Visit Organisk to gather all your favorite tropical fruits
			rightnow for a surprising discount - 40% Off discount for every tropical!
		</Description>
		<Button primary>Explote products <i class="fa fa-chevron-right" /></Button>
	</Center>
</Banner>

<style lang="scss">
	h2,
	p {
		margin-bottom: 20px;
		font-size: 30px;
	}
	p {
		margin-top: 20px;
	}
</style>
