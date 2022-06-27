<script lang="ts">
	import Description from './Description.svelte';
	import SubTitle from './SubTitle.svelte';
	import Title from './Title.svelte';
	export let title: string, description: string, image: string;
	export let id: number | string = null;
	export let index: number;
	export let align = 'bottom-right';
</script>

<div class="BoxCategory {align}">
	<div class="content-image">
		<img src={image} alt={title} {title} />
	</div>
	<div class="content">
		<SubTitle {title} />
		<Description>{description}</Description>
	</div>
</div>

<style lang="scss">
	.BoxCategory {
		position: relative;
		display: flex;
		height: 18.75rem;
		color: var(--bs-primary);
		text-decoration: none;
		padding: 1.5rem 1.25rem;
		border: 2px solid gainsboro;
		border-radius: 20px;
		&.bottom-right {
			align-items: flex-end;
			justify-content: flex-end;
			text-align: right;
		}
		:global(.Description) {
			font-size: 1.375rem;
		}
	}
	.content {
		position: relative;
		z-index: 1;
	}
	.content-image {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	img {
		margin: 0;
		display: block;
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		transform: scale(1.01);
		transition: all 1s;
	}
</style>
