<script lang="ts">
	export let padding: boolean = false;
</script>

<section class="SidebarBody" class:padding>
	<slot />
</section>

<style lang="scss">
	.SidebarBody {
		flex: 1;
		overflow: auto;
	}
	.padding {
		padding: 1rem;
	}
</style>
