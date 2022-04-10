<script lang="ts">
	import type { IContact } from '$lib/interfaces/IContact';
	import CardChat from '$lib/components/CardChat.svelte';
	import ContactList from '$lib/components/ContactList.svelte';
	import Input from '$lib/components/Input.svelte';
	import NavbarToolbar from '$lib/components/NavbarToolbar.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Button from '$lib/components/Button.svelte';
	import NoData from '$lib/components/NoData.svelte';
	import SubText from '$lib/components/SubText.svelte';
	import Message from '$lib/components/Message.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import MessageChat from '$lib/components/MessageChat.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let contacts: IContact[] = [];
	export let active: number = null;
	export let placeholderAsideSearch: string = 'Search contact';
	export let placeholderSendMessage: string = 'Type your message';
	let search: string = '';
	let message: string = '';

	$: _contacts = search
		? contacts.filter(
				(item) => item.title.trim().toLowerCase().indexOf(search.trim().toLowerCase()) > -1
		  )
		: contacts;
	$: _user = contacts.find((i) => i.id == active);
</script>

<CardChat class="CardChatAPP">
	<svelte:fragment slot="aside">
		<NavbarToolbar>
			<span slot="title">Contactos</span>
			<Toolbar slot="actions">
				<Button size="sm"><i class="fa fa-edit" /></Button>
				<Button size="sm" primary rounded><i class="fa fa-cog" /></Button>
			</Toolbar>
		</NavbarToolbar>
		<ContactList on:selected {active} contacts={_contacts} />
		<Input bind:value={search} placeholder={placeholderAsideSearch} />
	</svelte:fragment>
	<div slot="content" class:noData={!_user}>
		{#if _user}
			<NavbarToolbar>
				<span slot="title">{_user.title}</span>
				<Toolbar slot="actions">
					<Button on:click={() => dispatch('video')} primary size="sm"
						><i class="fa fa-video" /></Button
					>
					<Button on:click={() => dispatch('camera')} primary size="sm"
						><i class="fa fa-camera" /></Button
					>
					<Button on:click={() => dispatch('info')} primary size="sm"
						><i class="fa fa-info" /></Button
					>
				</Toolbar>
			</NavbarToolbar>
			<section>
				<SubText>May 5, 2019, 11:54 AM</SubText>
				{#each _user.messages ?? [] as message}
					<MessageChat my={message.my}>
						<Avatar slot="avatar" title={message.user} image={message.avatar} />
						<Message slot="message">
							{message.message}
						</Message>
						<SubText slot="date">{message.date}</SubText>
					</MessageChat>
				{/each}
			</section>
			<div class="send-group">
				<Input bind:value={message} placeholder={placeholderSendMessage} />
				<Button on:click={() => dispatch('file')}><i class="fa fa-paperclip" /></Button>
				<Button on:click={() => dispatch('emote')}><i class="far fa-smile-wink" /></Button>
				<Button on:click={() => dispatch('send', message)}><i class="fas fa-paper-plane" /></Button>
			</div>
		{:else}
			<NoData />
		{/if}
	</div>
</CardChat>

<style lang="scss">
	span {
		font-weight: bold;
		font-size: 16px;
	}
	:global(.CardChatAPP) {
		position: absolute !important;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		:global(.Input) {
			border-left: 0 !important;
			border-radius: 0 !important;
		}
		:global(.NavbarToolbar) {
			border-bottom: 1px solid gainsboro !important;
			border-top: 1px solid gainsboro !important;
		}
		:global(.NoData) {
			height: 100%;
		}
	}
	div {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: auto;
	}
	section {
		flex: 1;
		overflow: auto;
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
	.noData {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.send-group {
		display: flex;
		flex-direction: row;
		flex: none;
		border-top: 1px solid gainsboro;
		:global(.Input) {
			border: 0 !important;
		}
	}
</style>
