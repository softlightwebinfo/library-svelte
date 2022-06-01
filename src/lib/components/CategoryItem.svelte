<script lang="ts">
	import Badge from './Badge.svelte';
	export let badge: string = '';
	export let title: string = '';
	export let image: string;
	export let list: string[] = [];
</script>

<div class="CategoryItem {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<div class={'CategoryItem__cover'}>
		<img {title} alt={title} src={image} />
	</div>
	<div class={'CategoryItem__content'}>
		{#if title}
			<h3 class={'CategoryItem__title'}>{title}</h3>
		{/if}
		{#if badge}
			<Badge bg="primary" round>{badge}</Badge>
		{/if}
		{#if list}
			<div class={'CategoryItem__list'}>
				{#each list as item}
					<span>{item}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.CategoryItem {
		$then: &;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		position: relative;
		overflow: hidden;

		&__cover {
			width: 100%;
			border-radius: 16px;
			overflow: hidden;
			position: relative;

			#{$then}:hover &:before {
				cursor: pointer;
				opacity: 0.9;
				background-color: black;
			}

			img {
				position: relative;
				width: 100%;
				z-index: 1;
				transition: 0.5s;

				#{$then}:hover & {
					transform: scale(1.08);
				}
			}
		}

		&__title {
			font-family: 'Rubik', sans-serif;
			font-size: 18px;
			line-height: 28px;
			font-weight: 400;
			color: #e0e0e0;
			margin-bottom: 0;
			z-index: 3;
			transition: 0.5s;
			flex: 1;

			#{$then}:hover & {
				color: white;
			}
		}

		.Badge {
			display: inline-flex;
			width: min-content;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			z-index: 3;
			transition: 0.5s;
			pointer-events: none;
			height: 30px;
			padding: 0 12px;
			border-radius: 10px;
			background-color: rgba(21, 31, 48, 0.75);
			color: #fff;
			font-size: 12px;
			font-weight: 500;
		}

		&__list {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			grid-gap: 10px;
			margin-top: 5px;
			grid-row: 2;

			span {
				font-size: 14px;
				font-weight: 400;
				color: #e0e0e0;
				line-height: 100%;
			}
		}

		&__content {
			position: absolute;
			z-index: 3;
			bottom: 20px;
			left: 20px;
			display: grid;
			grid-template-columns: 1fr auto;
			right: 20px;
			justify-content: space-between;
		}
	}
</style>
