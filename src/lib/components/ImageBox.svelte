<script lang="ts">
	export let image: string;
	export let category: string;
	export let title: string;
</script>

<div class="imageBox" style="background-image: url({image})">
	<div>
		<h3>{title}</h3>
		<p>{category}</p>
	</div>
</div>

<style lang="scss">
	.imageBox {
		transition: var(--transition);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		display: block;
		height: 100%;
		position: relative;
		width: 100%;

		div {
			transition: var(--transition);
			text-align: center;
			position: absolute;
			z-index: 4;
			padding: 0 30px;
			width: 100%;
			left: 50%;
			top: 50%;
			opacity: 0;
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}

		h3 {
			color: #fff;
			font-size: 36px;
			line-height: 1.2;
			margin-bottom: 8px;
			font-size: 28px;
		}

		p {
			display: inline-block;
			font-size: 12px;
			font-weight: 600;
			text-transform: uppercase;
			margin: 4px 8px 0 0;
			letter-spacing: 0.03em;
			color: #fff;
			margin-right: 0;
		}

		&:hover {
			cursor: pointer;
			background-color: #fff;
			background-image: none !important;

			div {
				opacity: 1;
				color: black;

				h3,
				p {
					color: black;
				}
			}
		}
	}
</style>
