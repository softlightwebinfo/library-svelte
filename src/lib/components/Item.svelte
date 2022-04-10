<script lang="ts">
	export let active: boolean = false;
</script>

<div on:click class="Item" class:active>
	<slot />
</div>

<style lang="scss">
	div {
		transition: all 0.3s ease-in-out;
		padding: 10px 20px;
		border-radius: var(--border-radius-soft);
		border: 1px solid transparent;
		&:hover {
			background: whitesmoke;
			cursor: pointer;
		}
	}
	.active {
		position: relative;
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		&::after {
			position: absolute;
			content: '';
			height: 100%;
			width: 0.25rem;
			left: 0;
			top: 0;
			background-color: var(--bs-success);
		}
	}
</style>
