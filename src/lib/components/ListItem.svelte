<li class="ListItem">
	<slot />
</li>

<style lang="scss">
	.ListItem {
		color: var(--bs-secondary);
		&::before {
			--bs-text-opacity: 1;
			content: '\2022';
			color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity));
			font-weight: bold;
			display: inline-block;
			width: 1em;
			margin-left: -1em;
		}
		& + & {
			margin-bottom: 0.25rem;
		}
	}
</style>
