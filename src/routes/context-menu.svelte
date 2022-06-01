<script>
	import ContextMenu from '$lib/components/ContextMenu.svelte';
	import '$lib/style.scss';
</script>

<ContextMenu
	on:click={({ detail }) => console.log(detail)}
	menu={[
		{ label: 'Edit this task' },
		{ label: 'Complete this task' },
		{ label: 'Complete task y clone',test:"hlka" }
	]}
/>
