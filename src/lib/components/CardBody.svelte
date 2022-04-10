<script lang="ts">
	export let noPadding: boolean = false;
</script>

<div class="CardBody {$$props.class ?? ''}" class:noPadding>
	<slot />
</div>

<style lang="scss">
	.CardBody {
		-webkit-box-flex: 1;
		-ms-flex: 1 1 auto;
		flex: 1 1 auto;
		padding: 1.25rem 1.25rem;
	}
	.noPadding {
		padding: 0;
	}
</style>
