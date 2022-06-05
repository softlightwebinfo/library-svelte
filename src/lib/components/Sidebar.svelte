<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';

	export let borderRight: boolean = false;
	export let size: TSize = 'md';
</script>

<aside class="Sidebar {$$props.class ?? ''} {size}" class:borderRight>
	<slot />
</aside>

<style lang="scss">
	aside {
		max-width: 400px;
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		overflow: auto;
		background: white;
		padding: 20px;
		height: 100%;
		@media (max-width: 500px) {
			max-width: 100%;
		}
	}
	.borderRight {
		border-right: 1px solid gainsboro;
	}
	.xs {
		max-width: 300px;
	}
</style>
