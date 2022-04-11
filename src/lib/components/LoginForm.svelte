<script lang="ts">
	import Button from './Button.svelte';
	import InputPassword from './InputPassword.svelte';
	import Checkbox from './Checkbox.svelte';
	import FormGroup from './FormGroup.svelte';
	import Input from './Input.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let placeholderUser: string = 'Enter username';
	export let placeholderPassword: string = 'Enter password';
	export let buttonText: string = 'Log in';
	export let textCheckbox: string = 'Remember me';

	let user = {
		user: '',
		password: '',
		checked: false
	};

	const onSubmit = () => dispatch('submit', user);
</script>

<form on:submit|preventDefault={onSubmit}>
	<FormGroup label={placeholderUser}>
		<Input type="email" placeholder={placeholderUser} bind:value={user.user} />
	</FormGroup>
	<FormGroup label={placeholderPassword}>
		<InputPassword bind:value={user.password} placeholder={placeholderPassword} />
	</FormGroup>
	<FormGroup>
		<Checkbox label={textCheckbox} value={1} bind:checked={user.checked} />
	</FormGroup>
	<Button primary block type="submit">{buttonText}</Button>
</form>
