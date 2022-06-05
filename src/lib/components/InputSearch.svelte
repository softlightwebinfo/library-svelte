<script lang="ts">
	import Input from './Input.svelte';
	import InputGroup from './InputGroup.svelte';
	export let placeholder: string;
	export let value: string = '';
</script>

<div class="InputSearch">
	<InputGroup>
		<i class="fa fa-search" />
		<Input type="search" {placeholder} on:click on:change on:focus bind:value />
	</InputGroup>
</div>

<style lang="scss">
	.InputSearch {
		:global(.InputGroup) {
			align-items: center;
			gap: 0px;
		}
		:global(.Input-label input) {
			border: 0;
		}
	}
</style>
