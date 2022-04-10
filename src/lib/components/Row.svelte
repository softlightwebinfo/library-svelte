<div class="Row {$$props.class ?? ''}">
	<slot />
</div>

<style lang="scss">
	.Row {
		--bs-gutter-x: 24px;
		--bs-gutter-y: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		// margin-top: calc(var(--bs-gutter-y) * -1);
		margin-right: calc(var(--bs-gutter-x) * -0.5);
		margin-left: calc(var(--bs-gutter-x) * -0.5);
		> :global(*) {
			flex-shrink: 0;
			padding-right: calc(var(--bs-gutter-x) * 0.5);
			padding-left: calc(var(--bs-gutter-x) * 0.5);
		}
	}
</style>
