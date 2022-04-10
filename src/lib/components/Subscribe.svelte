<script>
	import Button from './Button.svelte';

	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import Circle from './Circle.svelte';
	import Input from './Input.svelte';
	export let icon;
	export let title;
	export let subTitle;
	export let placeholder;
</script>

<Card class="Subscribe {$$props.class ?? ''}">
	<CardBody>
		<Circle size="md">
			<i class={icon} />
		</Circle>
		<h4>{title}</h4>
		<p>{subTitle}</p>
		<div>
			<Input {placeholder} />
			<Button><i class="fa fa-check" /></Button>
		</div>
	</CardBody>
</Card>

<style lang="scss">
	:global(.Subscribe) {
		:global(.CardBody) {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5px;
			flex-direction: column;
		}
		:global(.Input) {
			border: 1px solid gainsboro;
			border-radius: 50px;
		}
		:global(.Button) {
			align-items: center;
		}
	}
	i {
		font-size: 30px;
	}
	p {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1em;
	}
	div {
		display: flex;
		gap: 20px;
	}
	.fa-check {
		font-size: 20px;
	}
	h4 {
		--bs-text-opacity: 1;
		color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity));
		font-size: 2rem;
	}
</style>
