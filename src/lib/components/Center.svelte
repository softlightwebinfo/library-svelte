<div class="Center {$$props.class ?? ''}">
	<slot />
</div>

<style lang="scss">
	.Center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
