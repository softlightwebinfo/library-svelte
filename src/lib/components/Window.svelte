<script lang="ts">
	import WindowHeader from './WindowHeader.svelte';

	export let title: string = '';
</script>

<div class="Window {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<WindowHeader {title} on:close on:maximize on:minimize />
	<div class="Window__content">
		<slot />
	</div>
</div>

<style lang="scss">
	.Window {
		background-color: rgba(17, 24, 39, 1);
		border-radius: 0.5rem;
		box-shadow: var(--bs-shadow, 0 0 #0000);
		color: rgba(156, 163, 175, 1);

		&__content {
			padding: 0 1rem 1rem;
		}
	}
</style>
