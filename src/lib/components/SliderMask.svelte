<script lang="ts">
	import Arrow from './Arrow.svelte';
</script>

<div class="SliderMask">
	<Arrow left />
	<div class="SliderMask__content">
		<slot />
	</div>
	<Arrow />
</div>

<style lang="scss">
	.SliderMask {
		padding-bottom: 1px;
		overflow: hidden;
		display: flex;
		align-items: center;

		&__content {
			white-space: nowrap;
			width: 100%;
			display: flex;
			gap: 40px;
			justify-content: center;
			margin: auto;
			width: fit-content;
		}
	}
</style>
