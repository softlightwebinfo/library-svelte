<script lang="ts">
	export let my: boolean = false;
</script>

<div class="MessageChat" class:my>
	<div><slot name="avatar" /></div>
	<div class="message">
		<slot name="message" />
		<div class="date"><slot name="date" /></div>
	</div>
</div>

<style lang="scss">
	.MessageChat {
		display: flex;
		padding: 10px;
		gap: 20px;
	}
	.date {
		> :global(*) {
			text-align: inherit !important;
		}
	}
	.message {
		width: 100%;
	}
	.my {
		text-align: end;
		flex-direction: row-reverse;
	}
</style>
