<script lang="ts">
	import { fly, fade, slide } from 'svelte/transition';
	import Button from './Button.svelte';

	import Toolbar from './Toolbar.svelte';

	export let open: boolean = false;
	export let title: string = '';

	const toggle = () => (open = !open);
</script>

<div class="Collapse">
	<header on:click={toggle}>
		<slot {open} name="header" {toggle}>
			<Toolbar spaceBetween alignCenter>
				<span>{title}</span>
				<Button icon={open ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
			</Toolbar>
		</slot>
	</header>
	{#if open}
		<section transition:slide={{ duration: 1000 }}>
			<slot {open} {toggle} />
		</section>
	{/if}
</div>

<style lang="scss">
	.Collapse {
		display: flex;
		flex-direction: column;
		border: 1px solid gainsboro;
		header {
			padding: 5px 20px;
			background-color: gainsboro;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:hover {
				cursor: pointer;
			}
		}
		section {
			padding: 20px;
		}
	}
	:global(.Collapse + .Collapse) {
		border-top: 1px solid whitesmoke!important;
	}
</style>
