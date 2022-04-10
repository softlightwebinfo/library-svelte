<footer class="ModalFooter">
	<slot />
</footer>

<style lang="scss">
	footer {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: end;
		-ms-flex-pack: end;
		justify-content: flex-end;
		padding: 0.75rem;
		border-top: 1px solid #eff2f7;
		border-bottom-right-radius: calc(0.4rem - 1px);
		border-bottom-left-radius: calc(0.4rem - 1px);
	}
</style>
