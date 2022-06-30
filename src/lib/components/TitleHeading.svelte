<h3 class="TitleHeading {$$props.class ?? ''}">
	<slot />
</h3>

<style lang="scss">
	h3 {
		--bs-text-opacity: 1;
		color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity));
		font-size: 1.21562rem;
		margin-top: 0;
		// margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
	}
</style>
