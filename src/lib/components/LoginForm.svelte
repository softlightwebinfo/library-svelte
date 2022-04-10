<script lang="ts">
	import Button from './Button.svelte';
	import InputPassword from './InputPassword.svelte';
	import Checkbox from './Checkbox.svelte';
	import FormGroup from './FormGroup.svelte';
	import Input from './Input.svelte';
	export let placeholderUser: string = 'Enter username';
	export let placeholderPassword: string = 'Enter password';
	export let buttonText: string = 'Log in';
	let user = {
		user: '',
		password: ''
	};
</script>

<form>
	<FormGroup label={placeholderUser}>
		<Input type="email" placeholder={placeholderUser} bind:value={user.user} />
	</FormGroup>
	<FormGroup label={placeholderPassword}>
		<InputPassword placeholder={placeholderPassword} />
	</FormGroup>
	<FormGroup>
		<Checkbox label="Remember me" />
	</FormGroup>
	<Button primary block>{buttonText}</Button>
</form>
