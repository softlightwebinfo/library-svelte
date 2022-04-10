<script lang="ts">
	import AvatarTitle from './AvatarTitle.svelte';
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import Circle from './Circle.svelte';
	export let icon: string = null;
	export let title: string;
	export let value: string;
</script>

<Card class="MiniStat">
	<CardBody>
		<p>{title}</p>
		<Circle>
			<AvatarTitle>
				<i class={icon} />
			</AvatarTitle>
		</Circle>
		<h4>{value}</h4>
	</CardBody>
</Card>

<style lang="scss">
	p {
		color: #74788d;
		font-weight: 500;
		margin-top: 0;
		margin-bottom: 1rem;
	}
	h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
		color: #495057;
		font-size: 1.21875rem;
	}
	:global(.MiniStat) {
		:global(.CardBody) {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:global(.Circle) {
			grid-row: span 2;
			align-self: center;
		}
		:global(.Circle::after) {
			left: -12px;
			width: 12px;
			-webkit-transition: all 0.2s;
			transition: all 0.2s;
		}
		:global(.Circle::before),
		:global(.Circle::after) {
			content: '';
			position: absolute;
			width: 8px;
			height: 54px;
			background-color: rgba(255, 255, 255, 0.1);
			left: 16px;
			-webkit-transform: rotate(32deg);
			transform: rotate(32deg);
			top: -5px;
			-webkit-transition: all 0.4s;
			transition: all 0.4s;
		}
	}
</style>
