<script lang="ts">
	import { slide } from 'svelte/transition';
	import Badge from './Badge.svelte';

	export let href: string = null;
	export let title: string;
	export let icon: string = null;
	export let dark = true;
	export let label = null;
	export let active = false;
	const SLOTS = $$props.$$slots;
	let open = false;

	$: onClick = () => {
		if (!SLOTS) return;
		open = !open;
	};
	$: openClass = open ? 'up' : 'down';
	$: _href = SLOTS ? null : href;
	$: _active = SLOTS && open ? true : active;
</script>

<li class="MenuItem" class:dark class:active={_active}>
	<a href={_href} on:click={onClick}>
		{#if icon}
			<i class={icon} />
		{/if}
		<span>{title}</span>
		{#if label}
			<Badge secondary round>{label}</Badge>
		{/if}
		{#if SLOTS}
			<i class="fa fa-chevron-{openClass}" />
		{/if}
	</a>
	{#if SLOTS}
		<ul transition:slide class:open={SLOTS && open}>
			<slot />
		</ul>
	{/if}
</li>

<style lang="scss">
	li {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	a {
		padding: 0.625rem 1.5rem;
		position: relative;
		font-size: 15px;
		-webkit-transition: all 0.4s;
		transition: all 0.4s;
		align-items: center;
		display: flex;
		width: 100%;
		:global(.Badge) {
			margin-left: auto;
		}
		i:last-child {
			margin-left: auto;
			display: flex;
			justify-content: center;
		}
	}
	i {
		display: inline-block;
		min-width: 1.75rem;
		padding-bottom: 0.125em;
		font-size: 15px;
		line-height: 1.40625rem;
		vertical-align: middle;
		color: #7f8387;
		-webkit-transition: all 0.4s;
		transition: all 0.4s;
		color: var(--dark-color);
	}
	ul {
		padding-left: 20px;
		display: none;
		transition: var(--transition);
		&.open {
			display: block;
		}
	}
	.dark a {
		color: var(--dark-color);
		&:hover {
			i,
			& {
				color: #fff;
				cursor: pointer;
			}
		}
	}
	.active {
		i,
		a {
			color: #fff;
			cursor: pointer;
		}
	}
</style>
