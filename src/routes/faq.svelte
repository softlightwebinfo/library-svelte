<script>
import Card from '$lib/components/Card.svelte';
import CardBody from '$lib/components/CardBody.svelte';

	import FaqRow from '$lib/components/FaqRow.svelte';
	import TabControl from '$lib/components/TabControl.svelte';
	import TabControlItem from '$lib/components/TabControlItem.svelte';
	const data = [
		{
			title: 'Vegetables',
			content: 'Tab 1',
			icon: 'fa fa-check',
			row: [
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				},
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				},
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				},
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				},
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				}
			]
		},
		{
			title: 'Fruits',
			content: 'Tab 2',
			icon: 'fa fa-check',
			row: [
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				},
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				}
			]
		},
		{
			title: 'Legumes',
			content: 'Tab 3',
			icon: 'fa fa-check',
			row: [
				{
					title: 'Where can I get some?',
					description:
						'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental'
				}
			]
		}
	];
</script>

<Card class="m-10">
	<CardBody>
		<TabControl let:isTitle let:isContent>
			{#each data as item, i}
				<TabControlItem id={i} {isTitle} {isContent}>
					<span slot="title">
						<i class={item.icon} />
						{item.title}
					</span>
					{#each item.row as row}
						<FaqRow title={row.title} icon="fa fa-info">
							{row.description}
						</FaqRow>
					{/each}
				</TabControlItem>
			{/each}
		</TabControl>
	</CardBody>
</Card>
<Card class="m-10">
	<CardBody>
		<TabControl vertical let:isTitle let:isContent>
			{#each data as item, i}
				<TabControlItem id={i} {isTitle} {isContent}>
					<span slot="title">
						<i class={item.icon} />
						{item.title}
					</span>
					{#each item.row as row}
						<FaqRow title={row.title} icon="fa fa-info">
							{row.description}
						</FaqRow>
					{/each}
				</TabControlItem>
			{/each}
		</TabControl>
	</CardBody>
</Card>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
