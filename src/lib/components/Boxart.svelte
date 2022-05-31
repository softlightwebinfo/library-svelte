<script lang="ts">
	export let image: string;
	export let index: number;
	export let title: string;
</script>

<div class="Boxart">
	<span>{index}</span>
	<img src={image} alt={title} {title} />
</div>

<style lang="scss">
	.Boxart {
		display: flex;
		align-items: center;
		line-height: 1;
		span {
			display: block;
			font-size: 220px;
			color: black;
			text-shadow: 0 0 4px white;
			font-weight: bold;
			text-align: right;
			margin-right: -10px;
		}
		img {
			width: auto;
			height: 180px;
		}
	}
</style>
