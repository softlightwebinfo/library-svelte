<script lang="ts">
	export let sub: boolean = false;
</script>

<footer class="Footer" class:sub>
	<slot />
</footer>

<style lang="scss">
	.Footer {
		background-color: var(--bs-dark);
		padding: 20px;
		min-height: 80px;
		color: white;
		--bs-secondary: white;
		display: flex;
		flex-direction: column;
	}
	.sub {
		background-color: black;
		min-height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
