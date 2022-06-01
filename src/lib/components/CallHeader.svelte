<script lang="ts">
	import AlertCircleIcon from './AlertCircleIcon.svelte';
	import HeaderItems from './HeaderItems.svelte';
</script>

<div class="CallHeader {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<HeaderItems>
		<i class="fa fa-user-friends" />
	</HeaderItems>
	<HeaderItems>
		<i class="fa fa-comment-alt" />
		<AlertCircleIcon />
	</HeaderItems>
	<HeaderItems date>01:00 PM</HeaderItems>
	<HeaderItems icon>
		<i class="fa fa-user-circle" />
	</HeaderItems>
</div>

<style lang="scss">
	.CallHeader {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 350px;
		position: absolute;
		top: 0;
		right: 0;
		background: white;
		border-radius: 0 0 0 10px;
		overflow: hidden;
	}
</style>
