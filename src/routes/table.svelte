<script>
	import Container from '$lib/components/Container.svelte';
	import Table from '$lib/components/Table.svelte';
	import TableColumn from '$lib/components/TableColumn.svelte';
	import TableRow from '$lib/components/TableRow.svelte';
	import dayjs from 'dayjs';
	import { each } from 'svelte/internal';
	const data = [...new Array(100)].map((item, index) => ({
		id: index,
		name: `hola ${index}`,
		email: 'example@test.com',
		phone: '567989129',
		address: 'test de ejemplo',
		joined: dayjs().format('YYYY-MM-DD')
	}));
</script>

<Container class="m-4">
	<Table>
		<TableRow slot="thead">
			<TableColumn th>Id</TableColumn>
			<TableColumn th>Name</TableColumn>
			<TableColumn th>Email</TableColumn>
			<TableColumn th>Phone</TableColumn>
			<TableColumn th>Billing Addres</TableColumn>
			<TableColumn th>Joined</TableColumn>
		</TableRow>
		{#each data as item}
			<TableRow>
				{#each Object.entries(item) as [key, value] (key)}
					<TableColumn>{value}</TableColumn>
				{/each}
			</TableRow>
		{/each}
	</Table>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
