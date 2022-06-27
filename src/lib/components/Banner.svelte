<script>
	export let image;
	export let fixed = false;
	export let opacity = true;
	export let right = false;
	export let center = false;
</script>

<div
	class:fixed
	class="Banner"
	class:opacity
	class:right
	class:left={!center && !right}
	class:center
>
	<img src={image} alt="" />
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.Banner {
		height: 600px;
		background: black;
		position: relative;
		color: white;

		:global(.Paragraph) {
			color: white;
		}
	}
	.right .content {
		left: initial;
		right: 40px;
	}
	.left {
		.content {
			left: 40px;
		}
	}
	.content {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		max-width: 500px;
		z-index: 1;
		@media (max-width: 577px) {
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			max-width: 100%;
			height: 100%;
			align-items: initial;
		}
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.opacity {
		img {
			opacity: 0.4;
		}
	}

	.fixed {
		img {
			background-attachment: fixed;
		}
	}
</style>
