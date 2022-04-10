<script lang="ts">
	export let value = '';
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let type = 'text';
	export let placeholder = '';
	export let autofocus = false;
	export let required = false;
	export let name = '';
	export let label = '';
	export let ref = null;
	export let isDefault = true;
	function typeAction(node) {
		node.type = type;
	}
	function changeNode(typeNode) {
		if (!ref || !typeNode) return;
		ref.type = typeNode;
	}
	$: changeNode(type);
</script>

<label class="Input-label" class:default={isDefault}>
	{#if label}
		<span>{label}</span>
	{/if}
	<input
		on:keypress
		on:keyup
		on:keydown
		on:click
		on:change
		on:input
		on:focus
		{autofocus}
		{disabled}
		{name}
		{readonly}
		{placeholder}
		{required}
		use:typeAction
		bind:value
		class="Input"
		class:disabled
		bind:this={ref}
	/>
</label>

<style lang="scss">
	input {
		border: 1px solid gainsboro;
		padding: 5px 10px;
		outline: 0;
		border-radius: 5px;
		width: 100%;
		padding: 18px 24px;
		border: 1px solid #151515;
		background: 0 0;
		border-radius: 5px;
		color: #151515;
		font-size: 100%;
		margin: 0;
		vertical-align: baseline;
		width: 100%;
	}

	.disabled {
		opacity: 0.8;
		cursor: not-allowed;
	}

	span {
		display: block;
		margin-bottom: 5px;
	}
	label {
		display: block;
		width: 100%;
	}
	.default {
		input {
			display: block;
			width: 100%;
			padding: 0.47rem 0.75rem;
			font-size: 0.8125rem;
			font-weight: 400;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #ced4da;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			border-radius: 0.25rem;
			-webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
			transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
			transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
				-webkit-box-shadow 0.15s ease-in-out;
		}
	}
</style>
