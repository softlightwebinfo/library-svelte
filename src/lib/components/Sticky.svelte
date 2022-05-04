<script lang="ts">
	export let top: boolean = true;
	export let bottom: boolean = false;
</script>

<div class="Sticky" class:top class:bottom>
	<slot />
</div>

<style lang="scss">
	.Sticky {
		position: sticky;
	}
	.top {
		top: var(--sticky_position, 20px);
	}
	.bottom {
		bottom: var(--sticky_position, 20px);
	}
</style>
