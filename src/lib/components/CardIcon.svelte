<script lang="ts">
	export let icon: string = '';
</script>

<div class="CardIcon {$$props.class ?? ''}">
	<slot name="icon">
		<i class={icon} />
	</slot>
</div>

<style lang="scss">
	.CardIcon {
		width: 45px;
		height: 45px;
		line-height: 40px;
		font-size: 22px;
		background: var(--bs-light-primary);
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		&,
		&:focus,
		&:hover {
			color: var(--bs-primary);
		}
	}
</style>
