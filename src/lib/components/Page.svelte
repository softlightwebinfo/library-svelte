<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';
	import Content from './Content.svelte';
	import Sidebar from './Sidebar.svelte';
	export let showSidebar: boolean = true;
	export let size: TSize = 'xs';
	export let noPaddingBody: boolean = false;
</script>

<div class="Page {$$props.class ?? ''}" style={$$props.style ?? ''} class:noPaddingBody>
	{#if showSidebar}
		<Sidebar {size} borderRight>
			<slot name="sidebar" />
		</Sidebar>
	{/if}
	<Content noPadding={noPaddingBody}>
		<slot />
	</Content>
</div>

<style lang="scss">
	div {
		display: flex;
		height: 100%;
	}
</style>
