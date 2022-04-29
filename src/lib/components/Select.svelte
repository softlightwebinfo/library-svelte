<script lang="ts">
	import type { ISelect } from '$lib/interfaces/ISelect';
	import { createEventDispatcher } from 'svelte';
	import Badge from './Badge.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownMenu from './DropdownMenu.svelte';
	import SelectItem from './SelectItem.svelte';

	export let multiple: boolean = false;
	export let rows: ISelect[] = [];
	export let placeholder = 'Select';
	export let selected: ISelect[] | Map<any, ISelect> | any;
	
	$: _rows = getRows(rows, selected);

	const getRows = (rows, selected) => {
		return !multiple ? rows : rows.filter((i) => !selected?.has(i.value));
	};

	const dispatch = createEventDispatcher();

	$: {
		dispatch('selected', selected);
	}

	const onClick = (item: ISelect, cbClose) => () => {
		if (multiple) {
			if (!selected) {
				selected = new Map();
			}
			if (selected.has(item.value)) {
				selected.delete(item.value);
			} else {
				selected.set(item.value, item);
			}
			selected = new Map(selected);
			return;
		}
		selected = item;
		cbClose();
	};
	const onClose = (item: ISelect) => (e) => {
		selected.delete(item.value);
		selected = new Map(selected);
	};
</script>

<Dropdown let:show={open} class="Select {multiple}" let:close>
	<div slot="trigger">
		<span>
			{#if multiple && selected | selected?.size}
				{#each [...selected] as [key, item]}
					<Badge secondary closeable round on:close={onClose(item)}>{item.label}</Badge>
				{/each}
			{:else if selected?.label}
				{selected.label}
			{:else}
				{placeholder}
			{/if}
		</span>
		<i class="fa fa-chevron-{open ? 'up' : 'down'}" />
	</div>
	<DropdownMenu>
		{#if !_rows.length}
			<SelectItem label="No data" value="1" />
		{/if}
		{#each _rows as item, index}
			<slot {item} {index} {multiple}>
				<SelectItem
					selected={!multiple && selected?.value == item.value}
					on:click={onClick(item, close)}
					{multiple}
					{...item}
				/>
			</slot>
		{/each}
	</DropdownMenu>
</Dropdown>

<style lang="scss">
	@import '../sass/_initial.scss';
	div {
		@extend %Input;
		display: flex;
		align-items: center;
		:global(.DropdownMenu) {
			width: 100%;
		}
	}
	:global(.Select) {
		:global(.DropdownMenu) {
			width: 100%;
		}
	}
	span {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
		width: 100%;
	}
</style>
