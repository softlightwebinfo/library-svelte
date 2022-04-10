<script lang="ts">
	export let image: string;
	export let title: string;
</script>

<div class="CardImage">
	<img src={image} alt={title} {title} />
</div>

<style lang="scss">
	div {
		max-width: 100%;
		height: auto;
		width: 100%;
	}
	img {
		max-width: 100%;
		height: auto;
		width: 100%;
	}
</style>
