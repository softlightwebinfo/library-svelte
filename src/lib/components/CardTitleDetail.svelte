<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BigTitle from './BigTitle.svelte';
	import Button from './Button.svelte';
	import ListData from './ListData.svelte';

	export let title: string;
	export let description: string;
	export let list = [];
	export let textButtonPlay = '';
	export let textButtonDetail = '';
	const dispatch = createEventDispatcher();

	const onClickPlay = () => dispatch('play');
	const onClickDetail = () => dispatch('detail');
</script>

<div class={'CardTitleDetail'} style={$$props.style ?? ''}>
	<BigTitle>{title}</BigTitle>
	<p>{description}</p>
	<ListData data={list} />
	<div class="CardTitleDetail__buttons">
		<Button on:click={onClickPlay}>
			{textButtonPlay ?? 'Reproducir ahora'}
		</Button>
		<Button onClick={onClickDetail}>{textButtonDetail ?? 'Más detalles'}</Button>
	</div>
</div>

<style lang="scss">
	.CardTitleDetail {
		p {
			animation-delay: 1s;
			max-width: 600px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			color: var(--bs-dark);
			-webkit-box-orient: vertical;
			margin-bottom: 20px;
		}

		&__buttons {
			animation-delay: 1.4s;
		}
	}
</style>
