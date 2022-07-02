<script lang="ts">
	import { SubTitleHeading } from '.';
	import Avatar from './Avatar.svelte';

	import BackgroundImage from './BackgroundImage.svelte';
	import Card from './Card.svelte';
	import TitleHeading from './TitleHeading.svelte';
	export let image: string;
	export let name: string;
	export let subTitle: string;
	export let avatar: string;
	export let border: boolean = false;
	export let column: boolean = false;
	export let shadow: boolean = false;
	export let rounded: boolean = true;
</script>

<Card class="BoxFriend" {border} {column} {shadow} {rounded}>
	<header>
		<BackgroundImage {image} title={name} />
	</header>
	<section>
		<Avatar size="md" image={avatar} title={name} />
		<div class="content">
			<TitleHeading>{name}</TitleHeading>
			<SubTitleHeading>{subTitle}</SubTitleHeading>
			<slot />
		</div>
	</section>
</Card>

<style lang="scss">
	:global(.BoxFriend) {
        overflow: hidden;
		:global(.Avatar) {
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			bottom: calc(100% - 35px);
			:global(img) {
				border: 2px solid gainsboro;
			}
		}
	}

	section {
		position: relative;
	}
	header {
		height: 100px;
	}
	.content {
		background: var(--bs-white);
		> :global(.TitleHeading) {
			padding-top: 40px;
			color: var(--bs-black);
			text-align: center;
		}
		> :global(.SubTitleHeading) {
			color: var(--bs-black);
			text-align: center;
			padding-bottom: 20px;
		}
	}
</style>
