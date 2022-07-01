<script lang="ts">
	export let black: boolean = false;
	export let center: boolean = false;
</script>

<div class="Description {$$props.class ?? ''}" style={$$props.style} class:black class:center>
	<slot />
</div>

<style lang="scss">
	.Description {
		position: relative;
		display: flex;
		flex-direction: column;
		min-width: 0;
		word-wrap: break-word;
		color: var(--bs-description);
		:global(p) {
			margin-top: 0;
			margin-bottom: 1rem;
		}
	}
	.black {
		--bs-description: var(--bs-black);
	}
	.center {
		justify-content: center;
		text-align: center;
	}
</style>
