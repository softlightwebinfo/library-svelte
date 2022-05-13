<script>
	import Pagination from './../lib/components/Pagination.svelte';
	let currentPage = 1;
	let total = 1200;

	const change = ({ detail }) => {
		currentPage = detail.page;
	};
</script>

<Pagination {currentPage} {total} on:change={change} />

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
