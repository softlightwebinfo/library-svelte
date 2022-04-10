<script>
	import { createEventDispatcher } from 'svelte';
	import Dialog from './Dialog.svelte';
import Portal from './Portal.svelte';
	const dispatch = createEventDispatcher();

	export let open = false;
	const onClose = () => dispatch('close');
</script>

{#if open}
	<Portal>
		<Dialog fixed on:click={onClose}>
			<slot />
		</Dialog>
	</Portal>
{/if}
