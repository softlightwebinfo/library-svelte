<script lang="ts">
	export let image: string;
	export let title: string;
</script>

<img class="image" on:click src={image} {title} alt={title} />

<style lang="scss">
	.image {
		width: 100%;
		display: block;
		bottom: 0;
	}
</style>
