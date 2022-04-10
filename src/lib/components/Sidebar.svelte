<aside class="Sidebar">
	<slot />
</aside>

<style lang="scss">
	aside {
		max-width: 400px;
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		overflow: auto;
		background: white;
		padding: 20px;
		height: 100%;
		@media (max-width: 500px) {
			max-width: 100%;
		}
	}
</style>
