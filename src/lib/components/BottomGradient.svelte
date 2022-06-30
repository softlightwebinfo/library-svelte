<script lang="ts">
</script>

<div class="BottomGradient" />

<style lang="scss">
	.BottomGradient {
		position: absolute;
		width: 100%;
		height: 70%;
		bottom: 0;
		z-index: 1;
		background: rgba(0, 0, 0, 0.7);
		background: -webkit-gradient(
			linear,
			left bottom,
			left top,
			from(rgba(0, 0, 0, 0.7)),
			to(transparent)
		);
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
	}
</style>
