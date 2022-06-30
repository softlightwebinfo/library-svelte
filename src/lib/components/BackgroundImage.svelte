<script lang="ts">
	export let title: string;
	export let image: string;
</script>

<img src={image} {title} class="BackgroundImage" alt={title} />

<style lang="scss">
	img {
		transition: all 0.3s ease-in-out;
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
</style>
