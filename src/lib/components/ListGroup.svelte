<script lang="ts">
	export let hover: boolean = false;
	export let noBorder: boolean = false;
</script>

<div class="ListGroup" class:hover class:noBorder>
	<slot />
</div>

<style lang="scss">
	.ListGroup {
		display: flex;
		flex-direction: column;
		padding-left: 0;
		margin-bottom: 0;
		border-radius: 0.25rem;
	}
	.noBorder {
		:global(.ListGroupItem) {
			border-left: 0;
			border-right: 0;
			padding-left: 0;
			padding-right: 0;
		}
	}
	.hover{
		:global(.ListGroupItem:hover) {
			background-color: var(--bs-gray-400);
		}
	}
</style>
