<script>
	import { slide, fade } from 'svelte/transition';
	import Overlay from './Overlay.svelte';
	export let fixed = false;
</script>

<div class="Dialog" transition:slide class:fixed>
	<Overlay open on:click />
	<div class="Dialog__content">
		<slot />
	</div>
</div>

<style lang="scss">
	.Dialog {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		margin: 0;

		@media (max-width: 576px) {
			overflow: hidden;
		}

		&__content {
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			width: 100%;
			pointer-events: auto;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #f6f6f6;
			border-radius: 0.4rem;
			outline: 0;

			@media (min-width: 576px) {
				max-width: 500px;
				margin: 1.75rem auto;
			}

			@media (max-width: 576px) {
				max-width: 100%;
				width: 100%;
				height: 100%;
				:global(.ModalBody) {
					overflow: auto;
					flex: 1;
					height: 100%;
				}
			}
		}
	}
	.fixed {
	}
</style>
