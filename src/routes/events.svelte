<script>
	import Container from '$lib/components/Container.svelte';
	import EventList from '$lib/components/EventList.svelte';
	import Event from '$lib/components/Event.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	const data = [...new Array(10)].map(() => ({
		title: "Crain's New York BusinessFre",
		subTitle: 'Organized byAID MIT',
		startTime: '2022-05-07 22:30',
		endTime: '2022-05-08 01:00',
		location: 'The Liberty Warehouse, New Yourk',
		url: '/'
	}));
</script>

<Container class="m-10">
	<Card shadow>
		<CardHeader>Events</CardHeader>
		<CardBody>
			<EventList>
				{#each data as item}
					<Event
						url={item.url}
						startTime={item.startTime}
						endTime={item.endTime}
						title={item.title}
						subTitle={item.subTitle}
						location={item.location}
					/>
				{/each}
			</EventList>
		</CardBody>
	</Card>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
