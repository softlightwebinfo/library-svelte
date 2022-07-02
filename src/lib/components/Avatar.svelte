<script lang="ts">
	import type { TSize } from '$lib/interfaces/size';

	export let image: string;
	export let title: string;
	export let size: TSize = 'sm';
</script>

<div class="Avatar {size}">
	<img src={image} alt={title} {title} />
</div>

<style lang="scss">
	@import '../sass/vars.scss';
	@import '../sass/mixin.scss';

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
	@include avatarSize();
</style>
