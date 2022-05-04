<script lang="ts">
	export let alignCenter: boolean = false;
</script>

<div class="Group {$$props.class ?? ''}" class:alignCenter>
	<div><slot name="left" /></div>
	<div class="Group__right"><slot /></div>
</div>

<style lang="scss">
	.Group {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
		&__right {
			flex: 1;
		}
	}
	.alignCenter {
		align-items: center;
	}
</style>
