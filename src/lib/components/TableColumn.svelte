<script lang="ts">
	export let indexColumn: number = null;
	export let keyColumn: string = null;
	export let th: boolean = false;
</script>

{#if th}
	<th data-key={keyColumn} data-index={indexColumn}><slot /></th>
{:else}
	<td data-index={indexColumn} data-key={keyColumn}><slot /></td>
{/if}

<style lang="scss">
	th,
	td {
		padding: 0.75rem;
		background-color: transparent;
		border-width: 0 1px;
		border-bottom-width: 1px;
		box-shadow: inset 0 0 0 9999px transparent;
		padding-left: 1.25rem;
		text-align: left;
		border-width: 0 1px;
		border: 1px solid rgb(237, 242, 249);
	}
</style>
