<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';

	import type { TType } from '$lib/interfaces/TTypes';

	export let theme: TType = 'default';
	export let size: TSize = 'md';
</script>

<span class="Dot {$$props.class ?? ''} {theme ?? ''} {size ?? ''}" />

<style lang="scss">
	$size: 6px;
	.Dot {
		width: var(--dot_size, $size);
		height: var(--dot_size, $size);
		background: gainsboro;
		border-radius: 50%;
		display: inline-flex;
	}
	.xs {
		--dot_size: 4px;
	}
	.sm {
		--dot_size: 6px;
	}
	.md {
		--dot_size: 8px;
	}

	.lg {
		--dot_size: 10px;
	}

	.xl {
		--dot_size: 12px;
	}

	.xxl {
		--dot_size: 15px;
	}

	.light {
		background-color: var(--bs-light);
	}
	.primary {
		background-color: var(--bs-primary);
	}
	.block {
		width: 100%;
	}
	.rounded {
		border-radius: 50px;
	}
	.secondary {
		background-color: var(--bs-secondary);
	}
	.success {
		background-color: var(--bs-success);
	}
	.warning {
		background-color: var(--bs-warning);
	}
	.danger {
		background-color: var(--bs-danger);
	}
	.info {
		background-color: var(--bs-info);
	}
	.light {
		background-color: var(--bs-light);
	}
	.dark {
		background-color: var(--bs-dark);
	}
</style>
