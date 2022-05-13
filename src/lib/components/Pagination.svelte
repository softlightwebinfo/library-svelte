<script lang="ts">
	import { Constants } from '$lib/config';
	import { range } from '$lib/functions/range';

	import { createEventDispatcher } from 'svelte';

	export let currentPage = 1;
	export let total = 0;
	export let maxPages = 5;
	export let maxPagesView = Constants.PAGE_LIMIT;

	$: lastPage = Math.ceil(total / maxPagesView);

	const dispatch = createEventDispatcher();

	const onChangePage = (page) => () => {
		dispatch('change', {
			currentPage,
			prevPage: page - 1,
			page: page,
			maxPages,
			total
		});
	};
</script>

<nav class="Pagination">
	<ul>
		{#if currentPage > 1}
			<li on:click={onChangePage(currentPage - 1)}>
				<a href="#"><i class="fa fa-chevron-left" /></a>
			</li>
		{/if}
		{#each range(1, 10) as item}
			{#if item <= lastPage}
				<li class:active={item == currentPage} on:click={onChangePage(item)}>
					<a href="">{item}</a>
				</li>
			{/if}
		{/each}
		{#if currentPage < lastPage}
			<li on:click={onChangePage(currentPage + 1)}>
				<a href="#"><i class="fa fa-chevron-right" /></a>
			</li>
		{/if}
	</ul>
</nav>

<style lang="scss">
	.Pagination {
		display: flex;
		justify-content: center;
		ul {
			display: flex;
			padding-left: 0;
			list-style: none;
		}
		li a {
			position: relative;
			display: block;
			padding: 0.5rem 0.75rem;
			margin-left: -1px;
			line-height: 1.25;
			background-color: #fff;
			border: 1px solid #dee2e6;
		}
		li.active a {
			color: #fff;
			background-color: #007bff;
			border-color: #007bff;
		}
		li.disabled a {
			color: #6c757d;
			pointer-events: none;
			cursor: auto;
			border-color: #dee2e6;
		}
	}
</style>
