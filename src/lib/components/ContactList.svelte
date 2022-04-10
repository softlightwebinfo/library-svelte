<script lang="ts">
	import TitleHeading from './TitleHeading.svelte';
	import type { IContact } from '$lib/interfaces/IContact';
	import { createEventDispatcher } from 'svelte';
	import AvatarUser from './AvatarUser.svelte';
	import Item from './Item.svelte';	
	import NoData from './NoData.svelte';
    
	const dispatch = createEventDispatcher();

	export let contacts: IContact[] = [];
	export let active: number = null;

	const onClick = (contact: IContact) => () => {
		dispatch('selected', contact);
	};
</script>

<div class="ContactList">
	{#if !contacts.length}
		<NoData />
	{/if}
	{#each contacts as contact}
		<Item on:click={onClick(contact)} active={active == contact.id}>
			<AvatarUser {...contact} isNew={contact.new}>
				<small>{new Date(contact.date).toLocaleDateString()}</small>
			</AvatarUser>
		</Item>
	{/each}
</div>

<style lang="scss">
	.ContactList {
		height: 100%;
		border-right: 1px solid gainsboro;
		overflow-y: auto;
		width: 100%;
		:global(.AvatarUser) {
			width: 100%;
		}
		:global(.Item) {
			display: flex;
			align-items: center;
		}
	}

	small {
		font-size: 12px;
	}
</style>
