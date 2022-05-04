<script>
	import DetailEvent from '$lib/apps/DetailEvent.svelte';
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	const events = [...new Array(10)].map(() => ({
		title: "Crain's New York BusinessFre",
		subTitle: 'Organized byAID MIT',
		startTime: '2022-05-07 22:30',
		endTime: '2022-05-08 01:00',
		location: 'The Liberty Warehouse, New Yourk',
		url: '/'
	}));
</script>

<Container class="m-10">
	<DetailEvent
		image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
		title="Free new Year eve Middnight harbot fireworks"
		tags={['Things to do in brrokllyn, ny', 'Party', 'Music']}
		month="DEC"
		day="18"
		price="49.99€ - 89.99€"
		{events}
	>
		<svelte:fragment slot="actions">
			<Button rounded shadow icon="fa fa-heart">100</Button>
			<Button rounded shadow icon="fa fa-share">Share</Button>
			<Button rounded shadow>Register</Button>
		</svelte:fragment>
		<svelte:fragment slot="subTitle">
			By <a href="/">Boston harbor Now 2</a>
		</svelte:fragment>
		<p>
			Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf
			District Council and the City of Boston is proud to announce the New Year's Eve Midnight
			Harbor Fireworks!
		</p>
		<p>
			This beloved nearly 40-year old tradition is made possible by the generous support of local
			waterfront organizations and businesses and the support of the City of Boston and the Office
			of Mayor Marty Walsh. Join us as we ring in the New Year with a dazzling display over Boston
			Harbor. Public viewing is free and available from the Harborwalk of these suggested viewing
			locations:
		</p>
		<ul style="list-style:initial;padding-left: 20px;margin-bottom: 1rem;">
			<li>Christopher Columbus Park, North End</li>
			<li>Fan Pier, Seaport District</li>
			<li>East Boston Harborwalk</li>
		</ul>
		<p>The show will begin promptly at midnight.</p>
		<p>
			Register here for a reminder and updates about the harbor fireworks and other waterfront
			public programs as they become available. Be the first to be notified for popular waterfront
			New Year's Eve public activities.
		</p>
	</DetailEvent>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
