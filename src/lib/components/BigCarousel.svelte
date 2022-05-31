<script lang="ts">
	import CalendarMiniDay from './CalendarMiniDay.svelte';
	import Description from './Description.svelte';
	import Toolbar from './Toolbar.svelte';

	export let image;
	export let title;
	export let logo;
	export let top;
	export let topTitle;
	export let description;
</script>

<div class="BigCarousel">
	<div class="BigCarousel__background">
		<img src={image} alt={title} {title} />
	</div>
	<div class="BigCarousel__content">
		<img class="BigCarousel__image" src={logo} alt={title} {title} />
		<div>
			<Toolbar alignCenter>
				<CalendarMiniDay day={top} month="TOP" />
				<span>{topTitle}</span>
			</Toolbar>
			<p>
				{description}
			</p>
			<div class="BigCarousel__actions">
				<slot name="actions" />
			</div>
		</div>
	</div>
</div>
<div class="BigCarousel__body">
	<slot />
</div>

<style lang="scss">
	.BigCarousel {
		background-color: #000;
		width: 100%;
		height: 100vh;
		z-index: 0;
		&__body {
			position: relative;
			margin-top: -200px;
			z-index: 8;
		}
		&__content {
			position: absolute;
			top: 0;
			bottom: 35%;
			left: 4%;
			width: 36%;
			z-index: 10;
			display: -webkit-box;
			display: -webkit-flex;
			display: -moz-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			-moz-box-pack: end;
			-ms-flex-pack: end;
			justify-content: flex-end;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			-moz-box-orient: vertical;
			-moz-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
		}
		&__image {
			width: 100%;
			-webkit-transform-origin: bottom left;
			-moz-transform-origin: bottom left;
			-ms-transform-origin: bottom left;
			-o-transform-origin: bottom left;
			transform-origin: bottom left;
			height: 200px;
			width: fit-content;
			+ div {
				margin-top: 40px;
			}
		}

		&__actions {
			margin-top: 20px;
		}

		&__background {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			img {
				position: absolute;
				background-position: center center;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				background-size: cover;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				width: 100%;
				opacity: 1;
				-webkit-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
				-o-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
				-moz-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
				transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
				z-index: 5;
				user-select: none;
				border: 0;
				height: 100%;
				object-fit: cover;
			}
		}
		span {
			color: white;
			font-size: 30px;
			margin-left: 20px;
		}
		p {
			color: lightgray;
			font-size: 20px;
			margin-top: 20px;
		}
		&:after {
			background-image: -webkit-gradient(
				linear,
				left top,
				left bottom,
				from(rgba(20, 20, 20, 0)),
				color-stop(15%, rgba(20, 20, 20, 0.15)),
				color-stop(29%, rgba(20, 20, 20, 0.35)),
				color-stop(44%, rgba(20, 20, 20, 0.58)),
				color-stop(68%, #141414),
				to(#141414)
			);
			background-image: -webkit-linear-gradient(
				top,
				rgba(20, 20, 20, 0) 0,
				rgba(20, 20, 20, 0.15) 15%,
				rgba(20, 20, 20, 0.35) 29%,
				rgba(20, 20, 20, 0.58) 44%,
				#141414 68%,
				#141414 100%
			);
			background-image: -moz-
				oldlinear-gradient(
					top,
					rgba(20, 20, 20, 0) 0,
					rgba(20, 20, 20, 0.15) 15%,
					rgba(20, 20, 20, 0.35) 29%,
					rgba(20, 20, 20, 0.58) 44%,
					#141414 68%,
					#141414 100%
				);
			background-image: -o-linear-gradient(
				top,
				rgba(20, 20, 20, 0) 0,
				rgba(20, 20, 20, 0.15) 15%,
				rgba(20, 20, 20, 0.35) 29%,
				rgba(20, 20, 20, 0.58) 44%,
				#141414 68%,
				#141414 100%
			);
			background-image: linear-gradient(
				to bottom,
				rgba(20, 20, 20, 0) 0,
				rgba(20, 20, 20, 0.15) 15%,
				rgba(20, 20, 20, 0.35) 29%,
				rgba(20, 20, 20, 0.58) 44%,
				#141414 68%,
				#141414 100%
			);
			-webkit-background-size: 100% 100%;
			-moz-background-size: 100% 100%;
			background-size: 100% 100%;
			background-position: 0 top;
			background-repeat: repeat-x;
			background-color: transparent;
			width: 100%;
			height: 14.7vw;
			top: auto;
			bottom: -1px;
			opacity: 1;
			content: '';
			z-index: 8;
			position: absolute;
			left: 0;
			right: 0;
		}
	}
</style>
