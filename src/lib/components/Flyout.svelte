<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import Overlay from './Overlay.svelte';
	import Portal from './Portal.svelte';
	import Sidebar from './Sidebar.svelte';
	import SidebarBody from './SidebarBody.svelte';
	import SidebarFooter from './SidebarFooter.svelte';
	import SidebarHeader from './SidebarHeader.svelte';
	const dispatch = createEventDispatcher();

	export let open: boolean = false;
	export let borderTop: boolean = false;
	export let borderBottom: boolean = false;
	export let padding: boolean = false;

	const onClose = () => {
		dispatch('close');
	};
</script>

{#if open}
	<Portal>
		<div class="Flyout">
			<Overlay {open} on:click={onClose} />
			<Sidebar>
				{#if $$slots.header}
					<SidebarHeader border={borderTop}>
						<slot name="header" />
						<Button on:click={onClose}><i class="fa fa-times" /></Button>
					</SidebarHeader>
				{/if}
				<SidebarBody {padding}>
					<slot />
				</SidebarBody>
				{#if $$slots.footer}
					<SidebarFooter border={borderBottom}>
						<slot name="footer" />
					</SidebarFooter>
				{/if}
			</Sidebar>
		</div>
	</Portal>
{/if}

<style lang="scss">
	.Flyout {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		:global(.Sidebar) {
			z-index: 1;
			display: flex;
			flex-direction: column;
			position: relative;
			padding: 0;
		}
	}
	i {
		font-size: 20px;
	}
</style>
