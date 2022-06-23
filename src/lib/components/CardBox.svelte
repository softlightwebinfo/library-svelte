<script>
	import Button from './Button.svelte';

	import ButtonToolbar from './ButtonToolbar.svelte';

	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import Description from './Description.svelte';
	import TitleCategory from './TitleCategory.svelte';
	export let title: string;
	export let description: string;
</script>

<Card>
	<CardBody>
		<TitleCategory {title} />
		<Description>
			{description}
		</Description>
		<ButtonToolbar class="mt-4">
			<slot name="actions">
				<Button rounded secondary>UI elements <i class="fa fa-chevron-right" /></Button>
				<Button rounded primary>Get in touch</Button>
			</slot>
		</ButtonToolbar>
	</CardBody>
</Card>
