<script lang="ts">
	export let bottom: boolean = false;
	export let top: boolean = false;
	export let left: boolean = false;
	export let right: boolean = false;
</script>

<div class="Border" class:top class:left class:bottom class:right>
	<slot />
</div>

<style lang="scss">
	$s: 1px;

	.Border {
		border-style: var(--border_style, solid);
		border-color: var(--border_color, gainsboro);
	}
	.left {
		border-left-width: var(--border_width, $s);
	}
	.right {
		border-right-width: var(--border_width, $s);
	}
	.top {
		border-top-width: var(--border_width, $s);
	}
	.bottom {
		border-bottom-width: var(--border_width, $s);
	}
</style>
