<script lang="ts">
	import Card from './Card.svelte';

	export let alt: string = '';
	export let icon: string = 'fa fa-camera';
	export let image: string = '';
	export let title: string = 'Default file input example';
	export let shadow: boolean = false;
</script>

<Card class="CoverImage {$$props.class ?? ''}" rounded {shadow}>
	<img src={image} {alt} title={alt} />

	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label>
		<slot>
			<span><i class={icon} />{title}</span>
			<input type="file" />
		</slot>
	</label>
</Card>

<style lang="scss">
	:global(.CoverImage) {
		overflow: hidden;
		height: 500px;
	}

	input {
		display: none;
	}

	img {
		width: 100%;
		object-fit: cover;
		height: inherit;
	}
	i {
		margin-right: 5px;
	}
	label {
		display: none;
		top: 0;
		left: 0;
		padding: 0.25rem 0.5rem;
		margin-left: 1rem;
		margin-top: 1rem;
		border-radius: 0.25rem;
		font-size: 0.8333333333rem;
		color: #fff;
		border: 1px solid var(--falcon-border-color);
		box-shadow: var(--falcon-box-shadow-sm);
		background-color: rgba(0, 0, 0, 0.9);
		position: absolute;
		&:hover {
			cursor: pointer;
		}
	}

	:global(.CoverImage:hover label) {
		display: block;
	}
</style>
