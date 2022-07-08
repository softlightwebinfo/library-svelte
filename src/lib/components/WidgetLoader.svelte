<script lang="ts">
	import Button from './Button.svelte';

	import TitleHeading from './TitleHeading.svelte';
	import Toolbar from './Toolbar.svelte';
	export let title: string;
</script>

<div class="WidgetLoader">
	<header>
		<Toolbar spaceBetween center>
			<TitleHeading>{title}</TitleHeading>
			<Button size="lg" icon="fa fa-arrow-right-rotate" on:click />
		</Toolbar>
	</header>
	<section>
		<slot />
	</section>
</div>

<style lang="scss">
	.WidgetLoader {
		--bs-primary-rgb: var(--bs-secondary);
	}
    section{
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>
