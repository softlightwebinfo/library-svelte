<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';

	export let rounded: boolean = true;
	export let size: TSize = 'sm';
</script>

<div class="Circle {size}" class:rounded>
	<slot />
</div>

<style lang="scss">
	@import '../sass/_initial';
	.Circle {
		align-items: center;
		--bs-bg-opacity: 1;
		background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity));
		position: relative;
		overflow: hidden;
		display: inline-flex;
		justify-content: center;
		color: white;
	}

	.rounded {
		border-radius: 50%;
	}

	@include avatarSize();
</style>
