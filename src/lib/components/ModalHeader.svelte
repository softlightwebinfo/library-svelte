<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const onClose = () => dispatch('close');
</script>

<header class="ModalHeader">
	<div>
		<slot />
	</div>
	<button on:click={onClose}><i class="fa fa-times" /></button>
</header>

<style lang="scss">
	header {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 1rem 1rem;
		border-bottom: 1px solid #eff2f7;
		border-top-left-radius: calc(0.4rem - 1px);
		border-top-right-radius: calc(0.4rem - 1px);
	}
	button {
		$s: 30px;
		font-size: 18px;
		border-radius: 50px;
		padding: 10px;
		width: $s;
		height: $s;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: var(--transition);
		&:hover {
			opacity: 0.8;
		}
	}
</style>
