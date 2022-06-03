<script lang="ts">
</script>

<div data-testid="Scroll" class="Scroll" style={$$props.style ?? ''}>
	<div class="Scroll__content">
		<slot />
	</div>
</div>

<style lang="scss">
	.Scroll {
		position: relative;
		flex: 1;
		width: 100%;
		height: 100%;
		&__content {
			overflow: auto;
			height: 100%;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	}
</style>
