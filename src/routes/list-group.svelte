<script>
	import ListGroup from '$lib/components/ListGroup.svelte';
	import ListGroupItem from '$lib/components/ListGroupItem.svelte';
</script>

<div style="width: 400px" class="m-10">
	<ListGroup>
		<ListGroupItem>Home</ListGroupItem>
		<ListGroupItem>Messages</ListGroupItem>
		<ListGroupItem>Items</ListGroupItem>
		<ListGroupItem>Bills</ListGroupItem>
		<ListGroupItem>Budgets</ListGroupItem>
		<ListGroupItem>Receipts</ListGroupItem>
	</ListGroup>
</div>
<div style="width: 400px" class="m-10">
	<ListGroup hover>
		<ListGroupItem>Home</ListGroupItem>
		<ListGroupItem>Messages</ListGroupItem>
		<ListGroupItem>Items</ListGroupItem>
		<ListGroupItem>Bills</ListGroupItem>
		<ListGroupItem>Budgets</ListGroupItem>
		<ListGroupItem>Receipts</ListGroupItem>
	</ListGroup>
</div>
<div style="width: 400px" class="m-10">
	<ListGroup noBorder>
		<ListGroupItem>Home</ListGroupItem>
		<ListGroupItem>Messages</ListGroupItem>
		<ListGroupItem>Items</ListGroupItem>
		<ListGroupItem>Bills</ListGroupItem>
		<ListGroupItem>Budgets</ListGroupItem>
		<ListGroupItem>Receipts</ListGroupItem>
	</ListGroup>
</div>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
