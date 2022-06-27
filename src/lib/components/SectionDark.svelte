<script lang="ts">
	import Button from './Button.svelte';

	export let title: string = '',
		subTitle: string = '',
		button = '',
		href = '',
		image: string;
	export let style = '';
</script>

<section class="SectionDark" {style} on:click>
	<div class="left">
		<slot>
			<div>
				{subTitle}
			</div>
			<h3>{title}</h3>
			<a {href}> <Button round primary>{button} <i class="fa fa-chevron-right" /></Button></a>
		</slot>
	</div>
	<img src={image} alt={title} {title} />
</section>

<style lang="scss">
	.SectionDark {
		background-color: rgb(28, 28, 51);
		color: #fff;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		position: relative;
		padding: 4.5rem 0;
		padding-left: 6rem;
		padding-right: 2rem;
		background-position: left center;
        border-radius: 20px;
	}
	.left {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	h3 {
		font-size: 40px;
	}
	img {
		max-width: 400px;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
</style>
