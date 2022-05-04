<script lang="ts">
	import TableColumn from './../components/TableColumn.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import Col from '$lib/components/Col.svelte';
	import CoverImage from '$lib/components/CoverImage.svelte';
	import FormGroup from '$lib/components/FormGroup.svelte';
	import Input from '$lib/components/Input.svelte';
	import NavbarToolbar from '$lib/components/NavbarToolbar.svelte';
	import Row from '$lib/components/Row.svelte';
	import Textarea from '$lib/components/Textarea.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Select from '$lib/components/Select.svelte';
	import type { ISelect } from '$lib/interfaces/ISelect';
	import Divider from '$lib/components/Divider.svelte';
	import TextHeading from '$lib/components/TextHeading.svelte';
	import Radio from '$lib/components/Radio.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import TableRow from '$lib/components/TableRow.svelte';
	import Table from '$lib/components/Table.svelte';
	import type { IPriceRow } from '$lib/interfaces/IPriceRow';
	import Closeable from '$lib/components/Closeable.svelte';
	import type { IScheduleRow } from '$lib/interfaces/IScheduleRow';
	import NewActions from '$lib/components/NewActions.svelte';
	import Upload from '$lib/components/Upload.svelte';
	import CustomFields from '$lib/components/CustomFields.svelte';

	export let transTitle = 'Create event';
	export let transTitleBottom = "Nice Job! You're almost done";
	export let image: string =
		'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max';
	export let textButtonSave = 'Save';
	export let textButtonSecond = 'Make your event live';
	export let textEventTitle = 'Event title';
	export let textStartDate = 'Start Date';
	export let textStartTime = 'Start Time';
	export let textRegistrationDeadline = 'Registration Deadline';
	export let textEndTime = 'End time';
	export let textEndDate = 'End Date';
	export let textVenue = 'Venue';
	export let textAddress = 'Address';
	export let textCountry = 'Country';
	export let textState = 'State';
	export let textCity = 'City';
	export let textDescription = 'Description';
	export let textOrganizer = 'Select Organizer';
	export let textSponsors = 'Select Sponsors';
	export let textTopic = 'Select Topic';
	export let textEventType = 'Select event types';
	export let textTag = 'Select tags';
	export let textTitleDetails = 'Event Details';
	export let textTitlePrice = 'Ticket Price';
	export let textTitleSchedule = 'Schedule';
	export let textTitleUploadPhoto = 'Upload Photo';
	export let textCustomFields = 'Custom Fields';

	export let organizer: ISelect[] = [];
	export let sponsors: ISelect[] = [];
	export let eventTypes: ISelect[] = [];
	export let eventTopic: ISelect[] = [];
	export let eventTags: ISelect[] = [];

	let selectedPaid = 1;
	let prices: IPriceRow[] = [{ name: 'Normal', price: '8', isDefault: true }];
	let schedules: IScheduleRow[] = [];
	let itemsSchedule = [
		{ title: '', startDate: '', startTime: '', endDate: '', endTime: '' },
		{ title: '', startDate: '', startTime: '', endDate: '', endTime: '' },
		{ title: '', startDate: '', startTime: '', endDate: '', endTime: '' },
		{ title: '', startDate: '', startTime: '', endDate: '', endTime: '' },
		{ title: '', startDate: '', startTime: '', endDate: '', endTime: '' }
	];

	const buttons = ['Free Ticket', 'Paid Ticket', 'Donation Ticket'];
	const onDeletePrice = (index: number) => () => (prices = prices.filter((_, ind) => index != ind));
	const addItemPrice = () => (prices = [...prices, { name: '', price: '', isDefault: false }]);
	const onChangePriceDefault = (index) => () => {
		prices = prices.map((it, itIndex) => ({
			...it,
			isDefault: itIndex == index
		}));
	};
	const templateAdd = { title: '', startDate: '', startTime: '', endDate: '', endTime: '' };
	
	let fields;
</script>

<NavbarToolbar rounded card>
	<span slot="title">{transTitle}</span>
	<Toolbar slot="actions">
		<slot name="actions">
			<Button shadow primary icon="fa fa-save">{textButtonSave}</Button>
			<Button shadow icon="fa fa-cog">{textButtonSecond}</Button>
		</slot>
	</Toolbar>
</NavbarToolbar>
<CoverImage shadow class="mt-4" {image} alt="Image" />
<Row class="mt-4">
	<Col sm={12} class="mb-4" md="8">
		<Card shadow>
			<CardHeader>{textTitleDetails}</CardHeader>
			<CardBody>
				<Row>
					<Col col={12}>
						<FormGroup label={textEventTitle}>
							<Input placeholder={textEventTitle} />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textStartDate}>
							<Input type="date" />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textStartTime}>
							<Input type="time" />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textEndDate}>
							<Input type="date" />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textEndTime}>
							<Input type="time" />
						</FormGroup>
					</Col>
					<Col col={12}>
						<FormGroup label={textRegistrationDeadline}>
							<Input type="date" />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textVenue}>
							<Input type="text" placeholder={textVenue} />
						</FormGroup>
					</Col>
					<Col col={6}>
						<FormGroup label={textAddress}>
							<Input type="text" placeholder={textAddress} />
						</FormGroup>
					</Col>
					<Col col={4}>
						<FormGroup label={textCountry}>
							<Input type="text" placeholder={textCountry} />
						</FormGroup>
					</Col>
					<Col col={4}>
						<FormGroup label={textState}>
							<Input type="text" placeholder={textState} />
						</FormGroup>
					</Col>
					<Col col={4}>
						<FormGroup label={textCity}>
							<Input type="text" placeholder={textCity} />
						</FormGroup>
					</Col>
					<Col col={12}>
						<FormGroup label={textDescription}>
							<Textarea placeholder={textDescription} />
						</FormGroup>
					</Col>
				</Row>
			</CardBody>
		</Card>
		<Card shadow class="mt-4">
			<CardHeader>{textTitlePrice}</CardHeader>
			<CardBody>
				<Toolbar>
					{#each buttons as btn, index}
						<Button on:click={() => (selectedPaid = index)} primary={selectedPaid == index} shadow
							>{btn}</Button
						>
					{/each}
				</Toolbar>

				{#if selectedPaid == 1}
					<Divider />
					<TextHeading>Pricing Options:</TextHeading>
					<Checkbox block label="Enable varible pricing" />
					<Checkbox block label="Enable multi-option purchase mode." />
					{#if prices.length}
						<Table class="mt-4">
							<TableRow slot="thead">
								<TableColumn th>Option Name</TableColumn>
								<TableColumn th>Price</TableColumn>
								<TableColumn th>Default</TableColumn>
								<TableColumn th />
							</TableRow>
							{#each prices as price, index}
								<TableRow>
									<TableColumn>
										<Input autofocus bind:value={price.name} />
									</TableColumn>
									<TableColumn>
										<Input type="number" bind:value={price.price} />
									</TableColumn>
									<TableColumn>
										<input
											checked={price.isDefault}
											on:change={onChangePriceDefault(index)}
											type="radio"
											name="amount"
										/>
									</TableColumn>
									<TableColumn>
										<Closeable on:click={onDeletePrice(index)} />
									</TableColumn>
								</TableRow>
							{/each}
						</Table>
					{/if}
					<Button class={!prices.length && 'mt-2'} on:click={addItemPrice} shadow icon="fa fa-plus"
						>Add Item</Button
					>
				{/if}
			</CardBody>
		</Card>
		<Card shadow class="mt-4">
			<CardHeader>{textTitleSchedule}</CardHeader>
			<CardBody>
				<NewActions let:onDelete let:onAdd items={itemsSchedule}>
					<Button on:click={onAdd(templateAdd)} slot="add" shadow icon="fa fa-plus">New Item</Button
					>
					<Card>
						<Button icon="fa fa-trash" class="btn-delete" on:click={onDelete} />
						<CardBody>
							<FormGroup label="Title">
								<Input placeholder="title..." />
							</FormGroup>
							<Row>
								<Col>
									<FormGroup label="Start Date">
										<Input placeholder="start date..." type="date" />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup label="Start Time">
										<Input placeholder="title..." type="time" />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col>
									<FormGroup label="End Date">
										<Input placeholder="End Date..." type="date" />
									</FormGroup>
								</Col>
								<Col>
									<FormGroup label="End Time">
										<Input placeholder="End Time..." type="time" />
									</FormGroup>
								</Col>
							</Row>
						</CardBody>
					</Card>
				</NewActions>
			</CardBody>
		</Card>
		<Card shadow class="mt-4">
			<CardHeader>{textTitleUploadPhoto}</CardHeader>
			<CardBody>
				<Upload />
			</CardBody>
		</Card>
		<Card shadow class="mt-4">
			<CardHeader>{textCustomFields}</CardHeader>
			<CardBody>
				<CustomFields bind:fields />
			</CardBody>
		</Card>
	</Col>
	<Col sm={12} class="mb-4" md="4">
		<Card shadow class="card-stick">
			<CardHeader>Other info</CardHeader>
			<CardBody>
				<FormGroup label={textOrganizer}>
					<Select placeholder={textOrganizer} multiple rows={organizer} />
				</FormGroup>
				<FormGroup label={textSponsors}>
					<Select placeholder={textSponsors} multiple rows={sponsors} />
				</FormGroup>
				<FormGroup label={textEventType}>
					<Select placeholder={textEventType} rows={eventTypes} />
				</FormGroup>
				<FormGroup label={textTopic}>
					<Select placeholder={textTopic} rows={eventTopic} />
				</FormGroup>
				<FormGroup label={textTag}>
					<Select placeholder={textTag} multiple rows={eventTags} />
				</FormGroup>
				<Divider />
				<TextHeading>Listing Privacy</TextHeading>
				<Radio value="1" name="access" label="Public page:">
					Discoverable by anyone on Falcon, our distribution partners, and search engines.
				</Radio>
				<Radio value="2" name="access" label="Private page:"
					>Accessible only by people you specify.</Radio
				>
				<Divider />
				<TextHeading>Remaining Tickets</TextHeading>
				<Checkbox label="Show the number of remaining tickets." />
			</CardBody>
		</Card>
	</Col>
</Row>
<NavbarToolbar rounded card>
	<span slot="title">{transTitleBottom}</span>
	<Toolbar slot="actions">
		<slot name="actions">
			<Button shadow primary icon="fa fa-save">{textButtonSave}</Button>
			<Button shadow icon="fa fa-cog">{textButtonSecond}</Button>
		</slot>
	</Toolbar>
</NavbarToolbar>

<style lang="scss">
	:global(.card-stick) {
		position: sticky !important;
		top: 20px;
	}
	:global(.btn-delete) {
		position: absolute;
		right: 0;
	}
</style>
