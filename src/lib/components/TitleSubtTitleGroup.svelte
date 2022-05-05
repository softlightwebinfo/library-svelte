<script lang="ts">
	import CalendarMiniDay from './CalendarMiniDay.svelte';
	import CatTitle from './CatTitle.svelte';

	import Group from './Group.svelte';
	import Price from './Price.svelte';
	import SubCategory from './SubCategory.svelte';
	export let title = null;
	export let subTitle = null;
	export let price = null;
	export let month = null;
	export let day = null;
</script>

<Group>
	<CalendarMiniDay slot="left" {month} {day} />
	<CatTitle class="mb-1" uppercase>
		<slot name="title">{title}</slot>
	</CatTitle>
	<SubCategory>
		<slot name="subTitle">{subTitle}</slot>
	</SubCategory>
	<Price>
		<slot name="price">{price}</slot>
	</Price>
	<slot />
</Group>
