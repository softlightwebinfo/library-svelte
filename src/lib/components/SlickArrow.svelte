<script lang="ts">
	export let left: boolean = false;
</script>

<div on:click style={$$props.class ?? ''} class="SlickArrow" class:left>
	<i class="fa fa-chevron-right"></i>
</div>

<style lang="scss">
	.SlickArrow {
		--active: #fff;
		--border: hsla(0, 0%, 100%, 0.12);
		width: 44px;
		height: 44px;
		position: absolute;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;

		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			left: 1px;
			right: 1px;
			top: 1px;
			bottom: 1px;
			border-radius: 50%;
			border: 2px solid var(--border);
		}
	}
	i{
		color:white;
	}
	.left {
		transform: rotate(180deg);
	}
</style>
