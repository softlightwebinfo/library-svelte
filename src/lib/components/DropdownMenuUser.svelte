<script lang="ts">
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardFooter from './CardFooter.svelte';
	import CardHeader from './CardHeader.svelte';

	export let title: string;
	export let subTitle: string;
	export let noPadding: boolean = false;
</script>

<div class="DropdownMenuUser">
	<Card>
		<CardHeader>
			<slot name="header" {title} {subTitle}>
				<h3>{title}</h3>
				<p>{subTitle}</p>
			</slot>
		</CardHeader>
		<CardBody {noPadding}>
			<slot />
		</CardBody>
		<CardFooter>
			<slot name="footer" />
		</CardFooter>
	</Card>
</div>

<style lang="scss">
	.DropdownMenuUser {
		:global(.CardHeader) {
			background-color: var(--bs-dark-primary);
			border: 0;
		}
		h3,
		p {
			margin: 0;
			color: var(--bs-white);
		}

		h3 {
			font-size: 24px;
			margin-bottom: 5px;
		}
	}
</style>
