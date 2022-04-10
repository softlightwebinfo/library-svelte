<script>
	import File from './File.svelte';
	import { slide } from 'svelte/transition';
	import folder from '$lib/svg/folder.svg';
	import folderOpen from '$lib/svg/folder-open.svg';
	export let expanded = false;
	export let name;
	export let files;

	function toggle() {
		expanded = !expanded;
	}
</script>

<span
	style="background: url({expanded ? folderOpen : folder}) 0 0.1em no-repeat;"
	class:expanded
	on:click={toggle}>{name}</span
>

{#if expanded}
	<ul transition:slide={{ duration: 300 }}>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file} />
				{:else}
					<File {...file} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	.expanded {
		background-image: url(/tutorial/icons/folder-open.svg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>
