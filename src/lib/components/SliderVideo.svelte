<script>
	import SliderCaption from './SliderCaption.svelte';

	export let title;
	export let description;
	export let video;
	export let poster;
</script>

<div class="slider-video">
	<video id="video" preload="metadata" autoplay loop muted {poster}>
		<source src={video} type="video/mp4" />
	</video>
	<SliderCaption {title} {description} />
</div>

<style lang="scss">
	.slider-video {
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		overflow: hidden;
		z-index: 1;

		&:before {
			content: '';
			background: rgba(0, 0, 0, 0.4);
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: 2;
		}

		video {
			position: absolute;
			left: 50%;
			width: auto;
			height: auto;
			top: 50%;
			min-width: 125%;
			min-height: 125%;
			-webkit-transform: translateX(-50%) translateY(-50%);
			-ms-transform: translateX(-50%) translateY(-50%);
			transform: translateX(-50%) translateY(-50%);
		}
	}
</style>
