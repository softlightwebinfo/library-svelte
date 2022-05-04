<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Group from './Group.svelte';
	import Input from './Input.svelte';
	export let name: string;
	export let avatar: string;
	export let textPlaceholder: string = 'Write a comment';
</script>

<Group class="WriteComment {$$props.class ?? ''}">
	<Avatar slot="left" image={avatar} title={name} />
	<Input
		on:change
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:input		
		rounded
		placeholder={textPlaceholder}
	/>
</Group>
