<script>
	export let group = [];
	export let value = 1;
	export let checked = false;
	export let label = null;
	export let block = false;
	$: updateChekbox(group);
	$: updateGroup(checked);

	function updateChekbox(group) {
		checked = group.indexOf(value) >= 0;
	}

	function updateGroup(checked) {
		const index = group.indexOf(value);
		if (checked) {
			if (index < 0) {
				group?.push?.(value);
				group = group;
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}
</script>

<label class:block disabled>
	<input type="checkbox" bind:checked {value} />
	{#if label}
		<span>{label}</span>
	{/if}
</label>

<style lang="scss">
	label {
		user-select: none;
		cursor: pointer;
	}
	.block {
		width: 100%;
		display: block;
	}
</style>
