<script>
	import CreateEvent from '$lib/apps/CreateEvent.svelte';
	import Container from '$lib/components/Container.svelte';
	const organizer = [
		{
			label: 'Lost studio',
			value: 1
		},
		{
			label: 'Músicos del mundo',
			value: 2
		}
	];
	const sponsors = [
		{ label: 'Microsoft', value: 1 },
		{ label: 'Google', value: 2 },
		{ label: 'Codeunic', value: 3 }
	];
	const eventTypes = [
		{ label: 'Concert', value: 1 },
		{ label: 'Google', value: 2 },
		{ label: 'Music', value: 3 },
		{ label: 'Gymnastic', value: 4 }
	];
	const eventTopic = [
		{ label: 'Foot && drink', value: 1 },
		{ label: 'Community', value: 2 },
		{ label: 'Family', value: 3 },
		{ label: 'Education', value: 4 }
	];
	const eventTags = [
    { label: 'Rock', value: 1 },
		{ label: 'Metal', value: 2 },
		{ label: 'Pop', value: 3 },
		{ label: 'Punk', value: 4 }
  ];
</script>

<Container class="m-10">
	<CreateEvent {organizer} {sponsors} {eventTypes} {eventTopic} {eventTags} />
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
