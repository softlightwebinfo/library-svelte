<div class="InputGroup">
	<slot />
</div>

<style lang="scss">
	div {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		width: 100%;
		:global(.Input) {
			border-top-right-radius: 0 !important;
			border-bottom-right-radius: 0 !important;
		}
		:global(.Input-label) {
			position: relative;
			-webkit-box-flex: 1;
			-ms-flex: 1 1 auto;
			flex: 1 1 auto;
			width: 1%;
			min-width: 0;
			width: auto !important;
		}
		:global(.Button) {
			margin-left: -1px;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			border-color: #ced4da;
		}
	}
</style>
