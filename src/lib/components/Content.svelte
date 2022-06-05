<script lang="ts">
	export let noPadding: boolean = false;
</script>

<section class="Content {$$props.class ?? ''}" style={$$props.style ?? ''} class:noPadding>
	<slot />
</section>

<style lang="scss">
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
		background: white;
		padding: 20px;
		height: 100%;
		@media (max-width: 500px) {
			max-width: 100%;
		}
	}
	.noPadding {
		padding: 0;
	}
</style>
