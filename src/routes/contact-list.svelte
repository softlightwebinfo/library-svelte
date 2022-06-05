<script>
	import '$lib/style.scss';
	import ContactList from '$lib/apps/ContactList.svelte';
	import TableBase from '$lib/components/TableBase.svelte';
</script>

<ContactList noPaddingBody let:viewOptions>
	{#if viewOptions == 1}
		<TableBase
			columns={[
				{
					label: 'Name',
					key: 'name',
					type: 'string'
				},
				{ label: 'Email address', key: 'email', type: 'string' },
				{ label: 'Phone', key: 'phone', type: 'string' },
				{ label: 'Company', key: 'company', type: 'string' }
			]}
			rows={[...new Array(100)].map((_, index) => ({
				id: index,
				name: 'Nombre ' + index,
				phone: 1234510 + index,
				company: 'Company ' + index,
				email: 'test' + index + '@ElementInternals.com'
			}))}
		/>
	{:else}
		Grid
	{/if}
</ContactList>
