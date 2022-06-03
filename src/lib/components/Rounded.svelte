<script lang="ts">
	import type { TType } from '$lib/interfaces/TTypes';

	export let theme: TType = 'default';
</script>

<span on:click class="Rounded {$$props.class ?? ''} {theme}" />

<style lang="scss">
	@import '../sass/_mixin.scss';

	.Rounded {
		$sz: 0.75rem;
		--bs-bg-opacity: 1;
		background-color: rgba(239, 68, 68, var(--bs-bg-opacity));
		border-radius: 9999px;
		display: inline-flex;
		height: $sz;
		width: $sz;

		@include backgroundColor(false, '.');
		&:hover {
			cursor: pointer;
		}
	}
</style>
