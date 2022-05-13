<script lang="ts">
	export let left = null;
	export let right = null;
	export let paddingTop = false;
	export let paddingBottom = false;
	export let paddingLeft = false;
	export let paddingRight = false;
</script>

<div
	class="GroupLeftRight"
	class:paddingTop
	class:paddingBottom
	class:paddingLeft
	class:paddingRight
>
	<div class="GroupLeftRight__left">
		<slot name="left">{left}</slot>
	</div>
	<div class="GroupLeftRight__right">
		<slot name="right">{right}</slot>
	</div>
</div>

<style lang="scss">
	$padding: 10px;
	.GroupLeftRight {
		display: flex;
		flex-direction: row;
		gap: 20px;
		justify-content: space-between;
		&__left {
			font-weight: bold;
		}
	}
	.paddingLeft {
		padding-left: $padding;
	}
	.paddingTop {
		padding-top: $padding;
	}
	.paddingRight {
		padding-right: $padding;
	}
	.paddingBottom {
		padding-bottom: $padding;
	}
</style>
