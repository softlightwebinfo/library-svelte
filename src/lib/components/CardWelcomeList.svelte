<script lang="ts">
	import Card from './Card.svelte';

	import CardBody from './CardBody.svelte';
	export let title: string;
	export let subTitle: string;
	export let image: string;
</script>

<Card class="CardWelcomeList {$$props.class ?? ''}">
	<CardBody>
		<section>
			<h5>{title}</h5>
			<p>{subTitle}</p>
			<slot />
		</section>
		<aside>
			<img src={image} alt={title} {title} />
		</aside>
	</CardBody>
</Card>

<style lang="scss">
	p {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 13px;
	}
	h5 {
		--bs-text-opacity: 1;
		color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity));
		font-size: 1.01562rem;
	}
	:global(.CardWelcomeList) {
		:global(.CardBody) {
			display: flex;
		}
	}
	section {
		flex: 1;
	}
	img {
		height: auto;
		margin-left: auto;
		max-height: 140px;
	}
</style>
