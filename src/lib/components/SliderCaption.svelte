<script>
	import Button from './Button.svelte';

	export let title;
	export let description;
	export let buttonText = 'Pagina principal';
	export let buttonRoute = '/';
</script>

<div class="slider-caption">
	<div class="slider-caption__text">
		<h1>{title}</h1>
		<p>
			{#each description.split('\n') as desc}
				<div>{desc}</div>
			{/each}
		</p>
		<Button style="margin-top: 32px;">{buttonText}</Button>
	</div>
</div>

<style lang="scss">
	.slider-caption {
		position: absolute;
		left: 0;
		top: 50%;
		right: 0;
		color: #fff;
		z-index: 2;
		-ms-transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);

		&__text {
			width: 80%;
			font-size: 16px;
			text-align: center;
			margin: 0 auto;

			h1 {
				font-size: 72px;
				font-weight: 700;
				line-height: 1.2;
				color: #fff;
				margin-bottom: 16px;
			}

			p {
				font-size: 20px;
				margin-bottom: 0;
			}
		}
	}
</style>
