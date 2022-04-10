<script>
	import Button from '$lib/components/Button.svelte';
	import SubTitleHeading from '$lib/components/SubTitleHeading.svelte';
	import TitleHeading from '$lib/components/TitleHeading.svelte';
	import Flyout from '$lib/components/Flyout.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';

	let open = false;
</script>

<Button primary on:click={() => (open = true)}>Click</Button>
<Flyout borderTop borderBottom padding {open} on:close={() => (open = false)}>
	<TitleHeading>Titulo de la cabezera</TitleHeading>
	<SubTitleHeading>Esto es el subtitulo de la Cabezera</SubTitleHeading>
	<span slot="header">Comentarios</span>
	<Toolbar right slot="footer">
		<Button on:click={() => (open = false)} secondary>Close</Button>
		<Button primary>Save</Button>
	</Toolbar>
</Flyout>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
