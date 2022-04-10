<div class="FullPage">
	<slot name="content" />
	<slot name="sidebar" />
</div>

<style lang="scss">
	.FullPage {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		> :global(*) {
			flex: 1;
		}
		@media (max-width: 800px) {
			> :global(*:first-child) {
				display: none;
			}
			> :global(*:last-child) {
				max-width: 100%;
			}
		}
	}
</style>
