<script lang="ts">
	export let overflow: boolean = false;
	export let rounded: boolean = false;
</script>

<div class="Shadow" class:overflow class:rounded>
	<slot />
</div>

<style lang="scss">
	.Shadow {
		box-shadow: var(--bs-big-shadow);
	}
	.overflow {
		overflow: hidden;
	}
	.rounded {
		border-radius: 20px;
	}
</style>
