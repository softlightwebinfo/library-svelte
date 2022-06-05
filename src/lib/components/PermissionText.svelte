<script lang="ts">
	import TextSmall from './TextSmall.svelte';
	export let title: string;
</script>

<div class="PermissionText {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<i class="fa fa-shield-alt" />
	<TextSmall {title} />
</div>

<style lang="scss">
	.PermissionText {
		display: flex;
		align-items: center;
		justify-content: center;

		i {
			color: #4385f4;
			font-size: 1.25em;
			margin-right: 10px;
		}
	}
</style>
