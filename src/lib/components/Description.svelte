<div class="Description {$$props.class ?? ''}">
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
</style>
