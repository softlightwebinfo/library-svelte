<script>
	import { CONTEXT } from '$lib/settings';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let state = writable(false);

	setContext(CONTEXT.NAVBAR, {
		subscribe: state.subscribe,
		toggle: () => state.update((x) => !x),
		hide: () => state.update((x) => false),
		show: () => state.update((x) => true),
		state
	});
</script>

<div class="Dashboard" class:open={$state}>
	<slot name="sidebar" />
	<slot name="navbar" />
	<slot name="body" />
</div>

<style lang="scss">
	.Dashboard.open {
		--dashboard-sidebar__width: 70px;
	}
</style>
