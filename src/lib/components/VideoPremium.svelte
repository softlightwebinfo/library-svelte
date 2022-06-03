<script lang="ts">
	import type { IListDataItem } from '$lib/interfaces/IListDataItem';
	import CardTitleDetail from './CardTitleDetail.svelte';

	export let image: string;
	export let title: string;
	export let description: string;
	export let list: IListDataItem[] = [];
</script>

<div class="VideoPremium {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<CardTitleDetail {title} {description} {list} class="VideoPremium__detail" />
	<img src={image} alt={title} />
</div>

<style lang="scss">
	.VideoPremium {
		display: grid;
		grid-template-columns: 580px 1fr;
		align-items: center;
		justify-content: space-between;
		padding: 40px;
		grid-gap: 80px;

		&__image {
			flex: 1;
		}

		&__detail {
			flex: 300px;
		}
	}
</style>
