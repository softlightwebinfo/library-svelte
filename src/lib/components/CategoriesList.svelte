<script>
	import Container from './Container.svelte';

	export let categories;
	export let title;
</script>

<section>
	<Container>
		<h2>{title}</h2>
		<div class="categories">
			{#each categories as category}
				<a href={category.url}>
					<h3>{category.title} ({category.count})</h3>
					<p>{category.description.slice(0, 250) + '...'}</p>
				</a>
			{/each}
		</div>
	</Container>
</section>

<style lang="scss">
	.categories {
		$size: 300px;
		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(var(--categories-list__column-min, $size), var(--categories-list__column-max, 1fr))
		);
		align-items: flex-start;
		grid-auto-flow: var(--categories-list__column-flow, dense);
		grid-auto-columns: minmax(
			var(--categories-list__column-min, $size),
			var(--categories-list__column-max, 1fr)
		);
		overflow: auto;
		width: 100%;
		gap: 40px;
		margin-bottom: 40px;
		width: 100%;
	}

	h2 {
		grid-column: span 3;
		font-size: 42px;
		margin-bottom: 20px;
	}

	a {
		transition: var(--transition);
		background: white;
		padding: 20px;
		border-radius: 10px;
		&:hover {
			cursor: pointer;
		}
	}

	h3 {
		font-weight: bold;
		margin-bottom: 10px;
	}
</style>
