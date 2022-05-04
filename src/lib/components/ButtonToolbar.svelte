<script lang="ts">
	export let right = false;
</script>

<div class="ButtonToolbar {$$props.class ?? ''}" class:right style={$$props.style}>
	<slot />
</div>

<style lang="scss">
	.ButtonToolbar {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.right {
		margin-left: auto;
	}
</style>
