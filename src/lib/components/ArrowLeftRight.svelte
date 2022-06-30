<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="ArrowLeftRight">
	<i on:click={(e) => dispatch('left', e)} class="fa fa-chevron-left" />
	<i on:click={(e) => dispatch('right', e)} class="fa fa-chevron-right" />
</div>

<style lang="scss">
	i {
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
</style>
