<script lang="ts">
	import Badge from './Badge.svelte';
	export let badge: string = 'NEWSFLASH';
	export let icon: string = 'fa fa-bolt';
	export let active = 0;
	export let data: string[] = [];
	$: item = data[active] ?? data[data.length - 1];
	const onClick = (index) => () => {
		active = (index + active) % data.length;
	};
</script>

<div class="Flash">
	<Badge bg="primary"><i class={icon} />{badge}</Badge>
	<p>{item}</p>
	<div>
		<i on:click={onClick(-1)} class="fa fa-chevron-left" />
		<i on:click={onClick(1)} class="fa fa-chevron-right" />
	</div>
</div>

<style lang="scss">
	.Flash {
		$size: 40px;
		display: flex;
		width: 100%;
		background-color: white;
		align-items: center;
		height: var(--flash-size, $size);
		:global(.Badge) {
			height: 100%;
		}
		i {
			cursor: pointer;
		}
		div {
			display: flex;
			height: 100%;
			align-items: center;
			i:first-child {
				height: 100%;
				display: flex;
				align-items: center;
				padding: 10px;
				border-right: 1px solid gainsboro;
			}
		}
	}
	i {
		margin-right: 10px;
	}
	p {
		flex: 1;
		padding: 10px;
	}
</style>
