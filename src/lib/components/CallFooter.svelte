<script lang="ts">
	import IconBlock from './IconBlock.svelte';
</script>

<div class="CallFooter {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<div class={'left'}>
		<IconBlock title={'Meeting details'} icon={'fa fa-angle-up'} />
	</div>
	<div class={'center'}>
		<IconBlock icon={'fa fa-microphone'} />
		<IconBlock red icon={'fa fa-phone'} />
		<IconBlock icon={'fa fa-video'} />
	</div>
	<div class={'right'}>
		<IconBlock title={'Turn on captions'} red isTitle icon={'fa fa-closed-captioning'} />
		<IconBlock title={'Present now'} red isTitle icon={'fa fa-desktop'} />
	</div>
</div>

<style lang="scss">
	.CallFooter {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90px;
		background: #fff;
		z-index: 1;

		.left {
			display: flex;
			align-items: center;
			height: 100%;
			width: 350px;
		}

		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			gap: 10px;
		}

		.right {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 100%;
			width: 350px;
			color: #555;
		}
	}
</style>
