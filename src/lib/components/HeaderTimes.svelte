<script lang="ts">
	import Close from './Close.svelte';
	export let title: string;
	export let padding: boolean = false;
	export let isDefault: boolean = false;
</script>

<header
	class="HeaderTimes {$$props.class ?? ''}"
	style={$$props.style ?? ''}
	class:padding
	class:isDefault
>
	<h3>{title}</h3>
	<Close on:click class="HeaderTimes__icon" />
</header>

<style lang="scss">
	.HeaderTimes {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #222;

		h3 {
			margin: 0;
			font-size: 1.125em;
			font-weight: 400;
			color: #222;
		}

		:global(.HeaderTimes__icon) {
			cursor: pointer;
			font-size: 20px;
		}

		&.padding {
			padding: 20px;
		}

		&isDefault {
			&,
			h3 {
				color: white;
			}
		}
	}
</style>
