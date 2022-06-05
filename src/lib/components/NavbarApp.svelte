<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Border from './Border.svelte';
	import Button from './Button.svelte';
	import InputSearch from './InputSearch.svelte';
	import Navbar from './Navbar.svelte';
	import NavbarItem from './NavbarItem.svelte';

	export let title: string;
	export let showSearch: boolean = false;
	export let textPlaceholderSearch: string = null;
	export let search: string;
	export let openMenu: boolean = false;

	const dispatch = createEventDispatcher();
	const onToggle = () => dispatch('toggle');
</script>

<div class="NavbarApp">
	<Border bottom>
		<Navbar padding>
			<NavbarItem center>
				<Button on:click={onToggle} icon="fa {openMenu ? 'fa-times' : 'fa-bars'}" />
			</NavbarItem>
			<NavbarItem center>
				{title}
			</NavbarItem>
			{#if showSearch}
				<NavbarItem center class="NavbarApp__search">
					<InputSearch placeholder={textPlaceholderSearch} bind:value={search} />
				</NavbarItem>
			{/if}
			<slot />
		</Navbar>
	</Border>
</div>

<style lang="scss">
	.NavbarApp {
		:global(.InputSearch) {
			margin-left: 40px;
			flex: 1;
			width: 100%;
		}
		:global(.NavbarApp__search) {
			flex: 1;
		}
	}
</style>
