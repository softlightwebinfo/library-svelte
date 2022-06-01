<script lang="ts">
	import SlickItem from './SlickItem.svelte';

	export let isDetail: boolean = false;
	export let data = [];
	export let col: number;
	export let active: number;

	$: components = (data) => {
		let results = data
			.map((item, index) => {
				if (!col && index != active) return null;
				return item;
			})
			.filter((i) => i);

		if (col) {
			return results.slice(col * active, active > 0 ? col * active + col : col);
		}

		return results;
	};
</script>

<div class="SlickList {col ? `SlickList--col-${col}` : ''}" class:isDetail>
	{#each components(data) as item, index (item.id)}
		<slot {item} {index}>
			<SlickItem {...item} {index} />
		</slot>
	{/each}
</div>

<style lang="scss">
	.SlickList {
		display: flex;
		gap: 20px;

		:global(.SlickItem) {
			position: relative;
			width: 100%;
			height: 100vh;
			flex: none;

			:global(img) {
				object-fit: cover;
				height: 100%;
			}
		}

		&.isDetail {
			:global(.SlickVideoItem),
			:global(.SlickItem) {
				background-image: linear-gradient(
					180deg,
					rgba(51, 51, 51, 0),
					rgba(0, 0, 0, 0.6) 75%,
					var(--iq-black)
				);
				height: 80vh;

				:global(.SlickItem:first-child),
				:global(.SlickItem:last-child) {
					opacity: 0.4;
					filter: blur(3px);
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
						0 2px 1px -1px rgba(0, 0, 0, 0.12);
					flex: 0 200px;
					:global(section) {
						display: none;
					}
				}
			}
		}
	}
</style>
