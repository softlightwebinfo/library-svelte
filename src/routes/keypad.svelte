<script>
	import { password } from '$lib/functions/password';
	import Keypad from '$lib/components/Keypad.svelte';
	let pin;
	$: view = pin ? password(pin) : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<Keypad bind:value={pin} on:submit={handleSubmit} />

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
