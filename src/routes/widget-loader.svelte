<script>
	import WidgetLoader from './../lib/components/WidgetLoader.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Badge from '$lib/components/Badge.svelte';

	const data = {
		foo: [1, 2, 3],
		bar: [4, 5, 6, 7, 8, 9, 10, 11],
		baz: [12, 24, 42]
	};
</script>

<WidgetLoader title="Trending" on:click={console.log}>
	<Badge secondary round># Hello</Badge>
	<Badge secondary round># Hello</Badge>
	<Badge secondary round># Hello</Badge>
	<Badge secondary round># Hello</Badge>
</WidgetLoader>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
