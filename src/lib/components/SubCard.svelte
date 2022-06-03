<script lang="ts">
	import Card from './Card.svelte';
	import CardIcon from './CardIcon.svelte';
	import CardTitle from './CardTitle.svelte';
	export let icon: string = '';
	export let title: string;
	export let subTitle: string;
</script>

<div class="SubCard {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<Card>
		<CardIcon {icon}>
			<slot name="icon" />
		</CardIcon>
		<CardTitle {subTitle}>
			{title}
		</CardTitle>
	</Card>
</div>

<style lang="scss">
	.SubCard {
		:global(.Card) {
			font-size: 0.9em;
			line-height: normal;
			color: inherit;
			border-bottom: 1px solid #141414;
			padding-bottom: 15px;
			padding-top: 15px;
			width: 100%;
			border-radius: 5px 5px 0 0;
			display: flex;
			align-items: center;
			background: transparent;
			transition: all 0.5s ease-out 0s;
			flex-direction: row;
			gap: 20px;
			padding-left: 15px;
		}
		&:hover {
			background: var(--bs-light-primary);
			cursor: pointer;

			:global(.CardIcon) {
				color: var(--iq-primary);
			}
		}
	}
	:global(.SubCard+.SubCard){
		margin-top: 5px;
	}
</style>
