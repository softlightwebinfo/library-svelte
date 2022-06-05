<script lang="ts">
	export let message: string = '';
</script>

<p on:click class="TextInfo {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<slot>
		{message}
	</slot>
</p>

<style lang="scss">
	.TextInfo {
		color: #222;
		font-size: 0.87em;
	}
</style>
