<script>
	import CardList from '$lib/components/CardList.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import Item from '$lib/components/Item.svelte';
</script>

<div style="width: 400px" class="m-10">
	<CardList>
		<Item><i class="fa fa-plus" /> GO PRO</Item>
		<Divider />
		<Item>Item</Item>
		<Item>Item</Item>
		<Divider />
		<Item>Item</Item>
	</CardList>
</div>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
