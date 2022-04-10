<script lang="ts">
	export let image: string;
	export let title: string;
</script>

<div class="Avatar">
	<img src={image} alt={title} {title} />
</div>

<style lang="scss">
	.Avatar {
		$s: 36px;
		height: $s;
		width: $s;
		background-color: #f6f6f6;
		border-radius: 50%;
		img {
			height: $s;
			width: $s;
			object-fit: cover;
			border-radius: 50%;
		}
	}
</style>
