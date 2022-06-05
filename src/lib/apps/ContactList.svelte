<script lang="ts">
	import AppWidget from '$lib/components/AppWidget.svelte';
	import type { ILabel } from '$lib/interfaces/ILabel';
	export let menu: ILabel[] = [
		{ name: 'Contacts', icon: 'fa fa-user' },
		{ name: 'Starred contacts', icon: 'fa fa-star' },
		{ name: 'Frequently Used', icon: 'fa fa-clock' },
		{ name: 'Trash', icon: 'fa fa-trash' }
	];
	export let noPaddingBody: boolean = false;
</script>

<div class="ContactList {$$props.class ?? ''}">
	<AppWidget {noPaddingBody} on:addLabel on:clickMenu {menu} let:viewOptions>
		<slot {viewOptions} />
	</AppWidget>
</div>

<style lang="scss">
</style>
