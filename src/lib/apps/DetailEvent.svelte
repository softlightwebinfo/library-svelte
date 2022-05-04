<script lang="ts">
	import CoverImage from '$lib/components/CoverImage.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Shadow from '$lib/components/Shadow.svelte';
	import CatTitle from '$lib/components/CatTitle.svelte';
	import Button from '$lib/components/Button.svelte';
	import ButtonToolbar from '$lib/components/ButtonToolbar.svelte';
	import TitleSubTitleGroup from '$lib/components/TitleSubTitleGroup.svelte';
	import Row from '$lib/components/Row.svelte';
	import Col from '$lib/components/Col.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import Card from '$lib/components/Card.svelte';
	import Description from '$lib/components/Description.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Sticky from '$lib/components/Sticky.svelte';
	import SubCategory from '$lib/components/SubCategory.svelte';
	import Category from '$lib/components/Category.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import EventList from '$lib/components/EventList.svelte';
	import Event from '$lib/components/Event.svelte';
	import CardFooter from '$lib/components/CardFooter.svelte';
	import Center from '$lib/components/Center.svelte';

	export let title: string = null;
	export let image: string = null;
	export let tags: string[] = [];
	export let month;
	export let day;
	export let price;
	export let events = [];
</script>

<div class="DetailEvent">
	<Shadow rounded overflow>
		<CoverImage noBorderBottom {image} alt="Image" isDefault />
		<Navbar padding auto>
			<Toolbar spaceBetween alignCenter>
				<TitleSubTitleGroup {month} {day} {price} {title}>
					<slot name="subTitle" slot="subTitle" />
				</TitleSubTitleGroup>
				<ButtonToolbar right>
					<slot name="actions">
						<Button rounded shadow icon="fa fa-heart">235</Button>
						<Button rounded shadow icon="fa fa-share">Share</Button>
						<Button rounded shadow>Register</Button>
					</slot>
				</ButtonToolbar>
			</Toolbar>
		</Navbar>
	</Shadow>
	<Row class="mt-4">
		<Col xs="12" md="8">
			<Card shadow rounded>
				<CardBody>
					<CatTitle>{title}</CatTitle>
					<Description class="DetailEvent__description">
						<slot />
					</Description>
					{#if tags?.length}
						<CatTitle class="mb-2">Tags</CatTitle>
						<ButtonToolbar>
							{#each tags as tag}
								<Badge round bg="light">{tag}</Badge>
							{/each}
						</ButtonToolbar>
					{/if}
				</CardBody>
			</Card>
		</Col>
		<Col xs="12" md="4">
			<Sticky>
				<Card shadow rounded>
					<CardBody>
						<Category>Date and time</Category>
						<SubCategory>Mon, Dec 31, 2018, 11:59PM</SubCategory>
						<SubCategory>Tue, Jan 1, 2019, 12:19 AM EST</SubCategory>
						<a href="/">Add to calendar</a>
					</CardBody>
					<CardBody>
						<Category>Location</Category>
						<SubCategory>Boston Harborwalk</SubCategory>
						<SubCategory>Christopher Columbus Park</SubCategory>
						<SubCategory>Boston, MA 02109</SubCategory>
						<SubCategory>United States</SubCategory>
						<a href="/">View Map</a>
					</CardBody>
					<CardBody>
						<Category>Refund Policy</Category>
						<SubCategory>No Refunds</SubCategory>
					</CardBody>
				</Card>
				<Card shadow rounded class="mt-4">
					<CardHeader>Events your may like</CardHeader>
					<CardBody class="DetailEvent__events">
						<EventList>
							{#each events as item}
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
					<CardFooter>
						<Center>
							<a href="/">All Events</a>
						</Center>
					</CardFooter>
				</Card>
			</Sticky>
		</Col>
	</Row>
</div>

<style lang="scss">
	.DetailEvent {
		--EventList_columns: 1fr;

		:global(.DetailEvent__description) {
			margin-top: 20px;
		}

		:global(.DetailEvent__events) {
			max-height: 400px;
			overflow: auto;
		}
	}
</style>
