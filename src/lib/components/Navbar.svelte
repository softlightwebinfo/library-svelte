<script lang="ts">
	export let className = '',
		style = '';
	export let padding: boolean = false;
	export let borderRadiusBottom: boolean = false;
	export let auto: boolean = false;
</script>

<header class={className} {style} class:padding class:borderRadiusBottom class:auto>
	<slot />
</header>

<style lang="scss">
	$p: 20px;
	header {
		background-color: var(--navbar_bg, var(--primary));
		height: var(--navbar_height);
		display: flex;
		align-items: center;
		gap: var(--Navbar_gap, 10px);
	}
	.padding {
		padding-left: $p;
		padding-right: $p;
	}
	.auto {
		height: auto;
		&.padding {
			padding: $p;
		}
	}
	.borderRadiusBottom {
		$size: 20px;
		border-bottom-left-radius: $size;
		border-bottom-right-radius: $size;
	}
</style>
