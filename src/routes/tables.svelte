<script lang="ts">
	import TableBase from '$lib/components/TableBase.svelte';

	import '$lib/style.scss';
</script>

<TableBase
	columns={[
		{
			label: 'ID',
			type: 'string',
			key: 'id'
		},
		{
			label: 'Name',
			type: 'string',
			key: 'name'
		},
		{
			label: 'Email',
			type: 'string',
			key: 'email'
		},
		{
			label: 'Age',
			type: 'age',
			key: 'age'
		}
	]}
	rows={[...new Array(100)].map((item, index) => ({
		id: index,
		age: 18 + index,
		email: 'rafael.gonzalez.1737@gmail.com',
		name: 'Rafa'
	}))}
	let:column
/>
