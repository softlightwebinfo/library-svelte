<script lang="ts">
	export let title: string;
</script>

<p class="TextSmall {$$props.class ?? ''}" style={$$props.style ?? ''}>{title}</p>

<style lang="scss">
	.TextSmall {
		font-size: 0.8em;
		color: #222;
	}
</style>
