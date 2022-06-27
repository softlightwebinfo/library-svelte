<section class={$$props.class} style={$$props.style ?? ''}>
	<slot />
</section>

<style lang="scss">
	section {
		padding: 80px;
		background: white;
		@media (max-width: 768px) {
			padding: 20px;
		}
	}
</style>
