<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let description: string;

	const dispatch = createEventDispatcher();
	const onClose = () => dispatch('close');
</script>

<div on:click class="Note {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<h3 class={'Note__title'}>
		<slot name="title">
			{title}
		</slot>
	</h3>
	<div class={'Note__content'}>
		<slot>
			{description.slice(0, 100) + '...'}
		</slot>
	</div>
	<button on:click={onClose}>
		<i class="fa fa-times" />
	</button>
</div>

<style lang="scss">
	.Note {
		display: block;
		border: 1px solid #e9e4ca;
		background: #fffced;
		padding: 20px;
		-moz-transition: all 300ms ease-in-out;
		-webkit-transition: all 300ms ease-in-out;
		-o-transition: all 300ms ease-in-out;
		transition: all 300ms ease-in-out;
		position: relative;

		&__title {
			color: #373e4a;
			word-break: break-all;
			font-size: 0.9em;
		}

		button {
			position: absolute;
			right: 30px;
			top: 30px;
			border: none;
			background: 0 0;
			outline: none;
			zoom: 1;
			-webkit-opacity: 0;
			-moz-opacity: 0;
			opacity: 0;
			filter: 0;
			-moz-transition: all 300ms ease-in-out;
			-webkit-transition: all 300ms ease-in-out;
			-o-transition: all 300ms ease-in-out;
			transition: all 300ms ease-in-out;
		}

		&:hover {
			cursor: pointer;
			button {
				opacity: 1;
			}
		}

		&__content {
			color: #373e4a;
			font-size: 0.9em;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-top: 8px;
		}
		i {
			cursor: pointer;
		}
	}
</style>
