<div class="ListGroupItem">
	<slot />
</div>

<style lang="scss">
	.ListGroupItem {
		position: relative;
		display: block;
		padding: 0.5rem 1rem;
		color: var(--falcon-800);
		background-color: var(--bs-wite);
		border: 1px solid #d8e2ef;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;

		&:last-child {
			border-bottom-right-radius: inherit;
			border-bottom-left-radius: inherit;
		}

		& + :global(.ListGroupItem) {
			border-top-width: 0;
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
	}
</style>
