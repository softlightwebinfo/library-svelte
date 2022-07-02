<script>
	import BoxFriend from '$lib/components/BoxFriend.svelte';
	import Button from '$lib/components/Button.svelte';
	import ButtonToolbar from '$lib/components/ButtonToolbar.svelte';
	const image2 = 'https://photostame.com/images/video-home-poster.jpg';
	const avatar = 'https://photostame.com/upload/thumbs/gal-5-04.jpg';
</script>

<div class="box">
	<BoxFriend shadow {avatar} image={image2} name="Codeunic" subTitle="1 hours ago">
		<ButtonToolbar center class="pb-4">
			<Button icon="fa fa-user" primary>Follow</Button>
			<Button icon="fa fa-envelope" danger>Message</Button>
		</ButtonToolbar>
	</BoxFriend>
</div>

<style lang="scss" global>
	@import '../lib/style.scss';
	.box {
		width: 300px;
		margin: auto;
		margin-top: 40px;
	}
</style>
