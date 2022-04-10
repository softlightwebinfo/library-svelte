<script lang="ts">
	import Input from './Input.svelte';
	import { getContext } from 'svelte';
	import { CONTEXT } from '$lib/settings';

	export let showButton: boolean = true;

	const { toggle } = getContext(CONTEXT.NAVBAR);
</script>

<header class="DashboardNavbar">
	<div class="DashboardNavbar__content">
		<slot name="brand" class="DashboardNavbar__brand" />
		<div class="DashboardNavbar__left">
			{#if showButton}
				<button on:click={toggle}><i class="fa fa-bars" /></button>
			{/if}
			<slot name="left" />
		</div>
		<div class="DashboardNavbar__right">
			<slot name="right" />
		</div>
	</div>
</header>

<style lang="scss">
	.DashboardNavbar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1002;
		background-color: #fff;
		-webkit-box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
		box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
		i {
			font-size: 20px;
			box-shadow: none;
			color: #555b6d;
			border: 0;
			border-radius: 0;
		}
		button {
			background: none;
			cursor: pointer;
		}
		&__left {
			flex: 1;
			padding-left: 20px;
		}
		&__right {
			margin-left: auto;
		}
		&__left,
		&__right {
			display: flex;
			gap: 20px;
			:global(.Input) {
				border: none;
				height: 38px;
				padding-left: 20px;
				padding-right: 20px;
				background-color: #f3f3f9;
				-webkit-box-shadow: none;
				box-shadow: none;
				border-radius: 30px;
			}
		}
		&__content {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-pack: justify;
			-webkit-box-pack: justify;
			// justify-content: space-between;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			margin: 0 auto;
			height: var(--navbar_height);
			padding: 0 calc(24px / 2) 0 0;
		}
	}
</style>
