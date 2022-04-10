<script lang="ts">
	import { clickOutside } from '$lib/directives/outside';
	let show = false;
	const handleClickOutside = () => (show = false);
</script>

<div class="Dropdown {$$props.class ?? ''}" use:clickOutside on:click_outside={handleClickOutside}>
	<div class="Dropdown__trigger" on:click={() => (show = !show)}>
		<slot name="trigger" />
	</div>
	{#if show}
		<slot {show} close={handleClickOutside} />
	{/if}
</div>

<style lang="scss">
	.Dropdown {
		position: relative;
		&__trigger {
			cursor: pointer;
			display: flex;
		}
	}
</style>
