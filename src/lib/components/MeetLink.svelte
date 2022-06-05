<script lang="ts">
	export let title: string;
</script>

<div class="MeetLink {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<span>{title}</span>
	<i on:click class="fa fa-clone" />
</div>

<style lang="scss">
	.MeetLink {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #f1f3f5;
		padding: 15px;
		border-radius: 5px;

		span {
			font-size: 0.8em;
			font-weight: 600;
			border: none;
			outline: none;
			background: none;
			flex: 1;
			color: #555;
		}

		i {
			cursor: pointer;
			color: #555;
		}
	}
</style>
