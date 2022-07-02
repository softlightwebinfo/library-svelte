<script lang="ts">
	import Avatar from './Avatar.svelte';
	import BackgroundImage from './BackgroundImage.svelte';
	export let avatar = undefined;
	export let name: string;
	export let image: string;
</script>

<div class="UserStat">
	<div>
		{#if !avatar}
			<i class="fa fa-plus" />
		{:else}
			<img src={avatar} alt={name} title={name} />
		{/if}
	</div>
	<BackgroundImage {image} title={name} />
	<span>{name}</span>
</div>

<style lang="scss">
	.UserStat {
		height: 100%;
	}
	img {
		$s: 30px;
		width: $s;
		height: $s;
		border-radius: $s;
		position: absolute;
		left: 10px;
		top: 10px;
		border: 2px solid gainsboro;
		box-shadow: var(--bs-big-shadow);
	}
	span {
		position: absolute;
		bottom: 10px;
		left: 10px;
	}
</style>
