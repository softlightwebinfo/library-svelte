<script lang="ts">
	export let capitalize: boolean = false;
	export let uppercase: boolean = false;
</script>

<h3 class="CatTitle {$$props.class ?? ''}" class:capitalize class:uppercase>
	<slot />
</h3>

<style lang="scss">
	.CatTitle {
		font-weight: 500;
		line-height: 1.2;
		color: var(--bs-dark);
		font-size: 1rem;
	}

	.capitalize {
		text-transform: capitalize;
	}

	.uppercase {
		text-transform: uppercase;
	}
</style>
