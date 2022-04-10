<script>
	import Container from './Container.svelte';

	export let data = [];
</script>

<section>
	<Container>
		{#each data as item}
			<article>
				<i class={item.icon} />
				<h4>{item.title}</h4>
				<p>{item.description}</p>
			</article>
		{/each}
	</Container>
</section>

<style lang="scss">
	section {
		background-color: #8bb8c1;
		transition: var(--transition);
		padding: 60px;

		:global(.Container) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 40px;
		}

		article {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}

		h4 {
			font-size: 1.5em;
			color: white;
		}

		i {
			$w: 50px;
			width: $w;
			height: $w;
			margin-bottom: 20px;
			color: white;
            font-size: $w;
		}

		p {
			color: white;
			text-align: center;
			margin: 0;
		}
	}
</style>
