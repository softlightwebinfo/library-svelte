<script lang="ts">
	import InputGroup from './InputGroup.svelte';
	import Input from './Input.svelte';
	import Button from './Button.svelte';
	import Label from './Label.svelte';
    
	export let placeholder: string;
	export let value: string = null;
	export let label: string = null;

	let show = false;
	$: type = show ? 'text' : 'password';
	$: onShow = () => (show = !show);
</script>

<InputGroup>
	{#if label}
		<Label>{label}</Label>
	{/if}
	<Input {type} {placeholder} bind:value />
	<Button on:click={onShow} light><i class="fa fa-eye" /></Button>
</InputGroup>
