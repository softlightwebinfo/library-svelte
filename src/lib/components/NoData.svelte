<script>
	import SubTitleHeading from './SubTitleHeading.svelte';

	import TitleHeading from './TitleHeading.svelte';
	export let title = "I'm sorry";
	export let subTitle = 'No data found';
	export let icon = 'fa fa-warning';
</script>

<div class="NoData">
	<i class={icon} />
	<TitleHeading>{title}</TitleHeading>
	<SubTitleHeading>{subTitle}</SubTitleHeading>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: inherit;
	}
	i {
		font-size: 40px;
		margin-bottom: 20px;
		color: var(--bs-warning);
	}
</style>
