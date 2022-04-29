<script lang="ts">
	export let image: string;
</script>

<div class="ImageBackground">
	<div class="ImageBackground__cover" style="background-image: url({image})" />
	{#if $$slots}
		<div class="ImageBackground__content">
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.ImageBackground {
		position: relative;
		min-height: var(--imageBackground_height, 300px);
		&__content {
			position: relative;
			width: 100%;
		}
		&__cover {
			position: absolute;
			width: 100%;
			min-height: 100%;
			top: 0;
			left: 0;
			background-size: cover;
			background-position: 50%;
			overflow: hidden;
			will-change: transform, opacity, filter;
			backface-visibility: hidden;
			background-repeat: no-repeat;
			z-index: 0;

			&::before {
				position: absolute;
				content: '';
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: rgba(0, 0, 0, 0.55);
			}
		}
	}
</style>
