<script lang="ts">
	export let label: unknown;
	export let value: unknown;
	export let multiple: boolean = false;
	export let selected: boolean = false;
</script>

<div on:click class="SelectItem" class:multiple class:selected>
	<slot {label} {value}>
		<span>{label}</span>
	</slot>
</div>

<style lang="scss">
	.SelectItem {
		padding: 7px;
		transition: var(--transition);
		&:hover {
			background-color: var(--bs-light);
			cursor: pointer;
		}
	}
	.selected {
		color: var(--bs-dark);
		background-color: var(--bs-light);
	}
</style>
