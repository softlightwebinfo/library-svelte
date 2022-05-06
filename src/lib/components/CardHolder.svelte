<script lang="ts">
	import type { TType } from '$lib/interfaces/TTypes';

	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CatTitle from './CatTitle.svelte';
	import Price from './Price.svelte';

	export let shadow = true;
	export let rounded = true;
	export let title: string;
	export let data: string = null;
	export let buttonText: string = null;
	export let buttonUrl: string = null;
	export let theme: TType = 'default';
</script>

<Card {shadow} {rounded} class="CardHolder CardHolder--{theme} {$$props.class ?? ''}">
	<CardBody>
		<CatTitle>{title}</CatTitle>
		<slot>
			<Price {theme} block big>{data}</Price>
		</slot>
		{#if buttonUrl || buttonText}
			<a href={buttonUrl}>{buttonText} <i class="fa fa-chevron-right" /></a>
		{/if}
	</CardBody>
</Card>
