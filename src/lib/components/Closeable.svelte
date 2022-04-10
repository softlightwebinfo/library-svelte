<div class="Closeable {$$props.class ?? ''}" on:click>
	<i class="fa fa-times" />
</div>

<style lang="scss">
	.Closeable {
		$s: 15px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bs-secondary);
		border-radius: 10px;
		height: $s;
		width: $s;
		color: white;
		vertical-align: middle;
		cursor: pointer;
	}
</style>
