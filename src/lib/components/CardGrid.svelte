<div class="CardGrid {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<slot />
</div>

<style lang="scss">
	@import '../sass/_placeholders.scss';
	.CardGrid {
		display: flex;
		flex-wrap: wrap;
		:global(> *) {
			flex: 1 1 300px;
			border: 0;
			border-radius: 0;
			box-shadow: none;
			border: 1px solid whitesmoke;
		}
	}
</style>
