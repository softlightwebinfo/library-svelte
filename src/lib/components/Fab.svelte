<script lang="ts">
</script>

<div on:click class="Fab {$$props.class ?? ''}" style={$$props.style}>
	<slot />
</div>

<style lang="scss">
	.Fab {
		$s: 40px;
		border-radius: $s;
		width: $s;
		height: $s;
		background-color: var(--primary);
		position: fixed;
		transition: all 0.3s ease-in-out;
		color: black;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		&:hover {
			cursor: pointer;
			background-color: gainsboro;
		}
	}
</style>
