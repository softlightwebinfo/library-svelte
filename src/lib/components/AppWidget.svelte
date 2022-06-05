<script lang="ts">
	import type { ILabel } from '$lib/interfaces/ILabel';
	import { createEventDispatcher } from 'svelte';
	import AppBox from './AppBox.svelte';
	import Button from './Button.svelte';
	import ButtonToolbar from './ButtonToolbar.svelte';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
	import MenuTitle from './MenuTitle.svelte';
	import NavbarApp from './NavbarApp.svelte';
	import Page from './Page.svelte';
	const dispatch = createEventDispatcher();

	export let openMenu = true;
	export let search = '';
	export let viewOptions = 1;
	export let labels: ILabel[] = [];
	export let menuSelected = 0;
	export let textPlaceholderSearch = 'Search contact';
	export let menu: ILabel[] = [];
	export let textButtonAction: string = 'Create new Contact';
	export let textLabel: string = 'Add label';
	export let textTitleLabel: string = 'Labels';
	export let noPaddingBody: boolean = false;

	const onToggleMenu = () => {
		openMenu = !openMenu;
		dispatch('toggleMenu', openMenu);
	};
	const setViewOption = (option) => () => {
		viewOptions = option;
		dispatch('viewOption', option);
	};
	const onClickMenu = (item, index) => () => {
		dispatch('clickMenu', { item, index });
		menuSelected = index;
	};
	const onAddLabel = () => dispatch('addLabel');
	const onClickButtonAction = () => dispatch('buttonAction');
</script>

<AppBox class="AppWidget">
	<NavbarApp
		title="Contacts"
		showSearch
		bind:search
		{textPlaceholderSearch}
		on:toggle={onToggleMenu}
		{openMenu}
	>
		<ButtonToolbar>
			<Button on:click={setViewOption(1)} primaryDark={viewOptions == 1} icon="fa fa-list" />
			<Button on:click={setViewOption(2)} primaryDark={viewOptions == 2} icon="fa fa-th" />
		</ButtonToolbar>
	</NavbarApp>
	<Page showSidebar={openMenu} {noPaddingBody}>
		<div slot="sidebar">
			<Button primaryDark block icon="fa fa-plus" on:click={onClickButtonAction}>
				{textButtonAction}
			</Button>
			<Menu class="pt-4">
				<MenuTitle>Menu</MenuTitle>
				{#each menu as item, index}
					<MenuItem
						on:click={onClickMenu(item, index)}
						active={index == menuSelected}
						title={item.name}
						icon={item.icon}
					/>
				{/each}

				<MenuTitle>{textTitleLabel}</MenuTitle>
				{#each labels as label}
					<MenuItem title={label.name} icon={label.icon} />
				{/each}
				<MenuItem on:click={onAddLabel} title={textLabel} icon="fa fa-add" />
			</Menu>
		</div>
		<div>
			<slot {viewOptions} {search} {openMenu} />
		</div>
	</Page>
</AppBox>

<style lang="scss">
	:global(.AppWidget) {
		:global(.Page) {
			height: calc(100% - var(--navbar_height));
		}
	}
</style>
