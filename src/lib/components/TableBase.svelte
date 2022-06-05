<script lang="ts">
	import type { ITableColumn } from '$lib/interfaces/ITableColumn';
	import type { ITableRow } from '$lib/interfaces/ITableRow';
	import Table from './Table.svelte';
	import TableColumn from './TableColumn.svelte';
	import TableRow from './TableRow.svelte';

	export let columns: ITableColumn[] = [];
	export let rows: ITableRow[] = [];
</script>

<div class="TableBase {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<Table>
		<TableRow slot="thead">
			{#each columns as column, indexColumn (column.label)}
				<TableColumn keyColumn={column.key} {indexColumn} th>{column.label}</TableColumn>
			{/each}
		</TableRow>
		{#each rows as item, index (item.id)}
			<TableRow>
				{#each columns as column, indexColumn (column.label)}
					<TableColumn {indexColumn} keyColumn={column.key}>
						<slot {column} {item} {indexColumn} indexRow={index} label={item?.[column.key] ?? '-'}>
							{item?.[column.key] ?? '-'}
						</slot>
					</TableColumn>
				{/each}
			</TableRow>
		{/each}
	</Table>
</div>

<style lang="scss">
</style>
