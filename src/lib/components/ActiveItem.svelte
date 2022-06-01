<script lang="ts">
	export let active: boolean = false;
	export let title: string;
</script>

<div class="ActiveItem">
	<span>
		<i class={active ? 'fa fa-check-circle' : 'fa fa-times-circle'} />
	</span>
	<span>{title}</span>
</div>

<style lang="scss">
	.ActiveItem {
		span:first-child {
			margin-right: 5px;
		}
	}
</style>
