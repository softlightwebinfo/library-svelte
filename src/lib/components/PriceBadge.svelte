<script lang="ts">
	export let price: string;
</script>

<span class="PriceBadge {$$props.class ?? ''}" style={$$props.style}>{price}</span>

<style lang="scss">
	.PriceBadge {
		background: rgba(0, 23, 31, 0.8) none repeat scroll 0 0;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		-ms-border-radius: 4px;
		-o-border-radius: 4px;
		border-radius: 4px;
		color: #ffffff;
		font-family: Roboto;
		font-size: 14px;
		padding: 6px 15px;
		position: absolute;
		right: 20px;
		top: 20px;
		z-index: 1;
	}
</style>
