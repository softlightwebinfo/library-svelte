<script lang="ts">
	import Avatar from './Avatar.svelte';
	import TitleSubtitle from './TitleSubtitle.svelte';

	export let image: string;
	export let title: string;
	export let subTitle: string = null;
	export let showArrow = false;
	export let isNew = false;
</script>

<div class="AvatarUser {$$props.class ?? ''}" {title} on:click class:new={isNew}>
	<Avatar {image} {title} />
	<TitleSubtitle {title} {subTitle} />
	{#if $$slots}
		<div><slot /></div>
	{/if}
	{#if showArrow}
		<i class="fa fa-chevron-down" />
	{/if}
</div>

<style lang="scss">
	.AvatarUser {
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}
	.new {
		font-weight: bold;
	}
	i {
		font-size: 12px;
	}
</style>
