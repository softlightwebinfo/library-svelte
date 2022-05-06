<script lang="ts">
	import type { TType } from '$lib/interfaces/TTypes';

	export let big = false;
	export let block = false;
	export let theme: TType = 'default';
</script>

<span class="Price {$$props.class ?? ''} {theme ?? ''}" class:big class:block>
	<slot />
</span>

<style lang="scss">
	.Price {
		color: var(--bs-orange);
		font-size: 1rem;
		font-weight: bold;
	}
	.big {
		font-size: 2rem;
	}
	.block {
		display: block;
	}
	.default {
	}
	.normal {
		border-radius: var(--border-radius-soft);
	}
	.light {
		color: var(--bs-light);
	}
	.primary {
		color: var(--bs-primary);
	}
	.block {
		width: 100%;
	}
	.rounded {
		border-radius: 50px;
	}
	.secondary {
		color: var(--bs-secondary);
	}
	.success {
		color: var(--bs-success);
	}
	.warning {
		color: var(--bs-warning);
	}
	.danger {
		color: var(--bs-danger);
	}
	.info {
		color: var(--bs-info);
	}
	.light {
		color: var(--bs-light);
	}
	.dark {
		color: var(--bs-dark);
	}
</style>
