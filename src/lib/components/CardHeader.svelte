<script lang="ts">
	export let alignCenter: boolean = false;
	export let spaceBetween: boolean = false;
</script>

<header class="CardHeader {$$props.class ?? ''}" class:alignCenter class:spaceBetween>
	<slot />
</header>

<style lang="scss">
	header {
		padding: 0.625rem 1.25rem;
		margin-bottom: 0;
		background-color: rgba(0, 0, 0, 0.03);
		border-bottom: 0 solid #f6f6f6;
		border-bottom: 1px solid #eff2f7;
		color: var(--bs-gray-700);
	}
	.alignCenter {
		display: flex;
		align-items: center;
	}
	.spaceBetween {
		justify-content: space-between;
		display: flex;
	}
</style>
