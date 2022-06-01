<script lang="ts">
	import Button from './Button.svelte';

	export let description: string = null;
	export let fixed: boolean = false;
</script>

<div class:fixed class="AlertPmo {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<div class="AlertPmo__content">
		<slot>
			{description}
		</slot>
	</div>
	<Button on:click icon="fa fa-times" />
</div>

<style lang="scss">
	.AlertPmo {
		background: #0564e5;
		border-radius: 50px;
		box-shadow: 0 0 40px -2px rgba(31, 43, 58, 25%);
		z-index: 9999;
		max-width: 90%;
		width: 590px;
		position: relative;
		display: flex;
		padding: 0.875rem 3.5rem 0.875rem 1.5rem;
		align-items: center;
		transition: all 300ms;
		color: white;

		:global(.Button) {
			border-radius: 50%;
			height: 36px;
			width: 36px;
			line-height: 38px;
			text-align: center;
			position: absolute;
			top: 50%;
			margin-top: -18px;
			right: 8px;
			font-size: 16px;
			z-index: 99;
			background: rgba(31, 43, 58, 0.3);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&.fixed {
			position: fixed;
			bottom: 20px;
			transition-delay: 1s;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
</style>
