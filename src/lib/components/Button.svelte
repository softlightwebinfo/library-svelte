<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';

	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;
	export let normal: boolean = false;
	export let isDefault: boolean = true;
	export let rounded: boolean = false;
	export let block: boolean = false;
	export let icon: string = null;
	export let size: TSize = 'md';
	export let primary: boolean = false;
	export let secondary: boolean = false;
	export let success: boolean = false;
	export let warning: boolean = false;
	export let danger: boolean = false;
	export let info: boolean = false;
	export let light: boolean = false;
	export let dark: boolean = false;
	export let shadow: boolean = false;
	export let loading: boolean = false;
	export let textLoading: string = 'Loading';
</script>

<button
	on:click
	{type}
	class="Button {$$props.class ?? ''} {size}"
	class:default={isDefault}
	style={$$props.style}
	class:disabled
	class:normal
	class:primary
	class:block
	class:light
	class:secondary
	class:success
	class:warning
	class:danger
	class:info
	class:dark
	class:rounded
	class:shadow
	class:loading
	disabled={loading || disabled}
>
	{#if !loading}
		{#if icon}
			<i class={icon} />
		{/if}
		<slot />
	{:else}
		<i class="fa fa-spin fa-spinner" />
		{textLoading}
	{/if}
</button>

<style lang="scss">
	button {
		background-color: white;
		padding: 5px 20px;
		border-radius: 50px;
		border: 1px solid gainsboro;
		transition: all 0.3s ease-in-out;
		display: inline-flex;
		transition: all 1s cubic-bezier(0.25, 1, 0.35, 1) 0s;
		-moz-transition: all 1s cubic-bezier(0.25, 1, 0.35, 1) 0s;
		-webkit-transition: all 1s cubic-bezier(0.25, 1, 0.35, 1) 0s;
		-o-transition: all 1s cubic-bezier(0.25, 1, 0.35, 1) 0s;
		font-size: 14px;
		color: #fff;
		letter-spacing: 0.03em;
		padding: 12px 24px;
		border-radius: 99em;
		display: inline-flex;
		border: none;
		background: #8bb8c1;
		text-decoration: none;
		width: -webkit-max-content;
		width: -moz-max-content;
		width: max-content;

		&:hover {
			background-color: whitesmoke;
			cursor: pointer;
		}
	}
	i {
		margin-right: 2px;
		color: inherit;
	}
	.default {
		display: inline-block;
		font-weight: 400;
		line-height: 1.5;
		color: #495057;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.47rem 0.75rem;
		font-size: 0.8125rem;
		border-radius: 0.25rem;
		-webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
			-webkit-box-shadow 0.15s ease-in-out;
		&:hover {
			color: var(--bs-gray-700);
			text-decoration: none;
		}
	}
	.normal {
		border-radius: var(--border-radius-soft);
	}
	.light {
		color: var(--color-black);
		background-color: var(--bs-light);
		border-color: var(--bs-light);
	}
	.primary {
		color: #fff;
		background-color: var(--bs-primary);
		border-color: var(--bs-primary);
		&:hover {
			color: #fff;
			background-color: #485ec4;
			border-color: #4458b8;
		}
	}
	.block {
		width: 100%;
	}
	.rounded {
		border-radius: 50px;
	}
	.secondary {
		background-color: var(--bs-secondary);
		color: var(--bs-white);
		&:hover {
			background-color: rgba($color: var(--bs-secondary-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.success {
		background-color: var(--bs-success);
		color: var(--bs-white);
		&:hover {
			background-color: rgba($color: var(--bs-success-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.warning {
		background-color: var(--bs-warning);
		color: var(--bs-white);
		&:hover {
			background-color: rgba($color: var(--bs-warning-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.danger {
		background-color: var(--bs-danger);
		color: var(--bs-white);
		&:hover {
			background-color: rgba($color: var(--bs-danger-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.info {
		background-color: var(--bs-info);
		color: var(--bs-white);
		&:hover {
			background-color: rgba($color: var(--bs-info-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.light {
		background-color: var(--bs-light);
		&:hover {
			background-color: rgba($color: var(--bs-light-rgb), $alpha: 0.8);
			color: var(--bs-black);
		}
	}
	.dark {
		background-color: var(--bs-dark);
		color: var(--bs-light);
		&:hover {
			background-color: rgba($color: var(--bs-dark-rgb), $alpha: 0.8);
			color: var(--bs-white);
		}
	}
	.lg {
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
		border-radius: 0.3rem;
	}

	.sm {
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		border-radius: 0.2rem;
	}
	.shadow {
		box-shadow: var(--bs-button-shadow);
		border: 1px solid rgb(240, 248, 255);
	}
	.disabled,
	.loading {
		background-color: gainsboro;
		opacity: 0.4;
		color: black;
		border: 0;

		&:hover {
			cursor: no-drop;
		}
	}
</style>
