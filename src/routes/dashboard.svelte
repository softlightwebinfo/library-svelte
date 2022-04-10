<script>
	import { expand } from '$lib/functions/expand';
	import DashboardBrand from './../lib/components/DashboardBrand.svelte';
	import DashboardBody from './../lib/components/DashboardBody.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import DashboardNavbar from '$lib/components/DashboardNavbar.svelte';
	import DashboardSidebar from '$lib/components/DashboardSidebar.svelte';
	import AvatarUser from '$lib/components/AvatarUser.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import DropdownHeader from '$lib/components/DropdownHeader.svelte';
	import DropdownItem from '$lib/components/DropdownItem.svelte';
	import DropdownDivider from '$lib/components/DropdownDivider.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import MenuItem from '$lib/components/MenuItem.svelte';
	import MenuTitle from '$lib/components/MenuTitle.svelte';
	import MiniStat from '$lib/components/MiniStat.svelte';
	import Row from '$lib/components/Row.svelte';
	import Col from '$lib/components/Col.svelte';
	import DashboardRow from '$lib/components/DashboardRow.svelte';
	import CardWelcomeList from '$lib/components/CardWelcomeList.svelte';
	import List from '$lib/components/List.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import Subscribe from '$lib/components/Subscribe.svelte';
	import Button from '$lib/components/Button.svelte';
	import WidgetCard from '$lib/components/WidgetCard.svelte';
	import Item from '$lib/components/Item.svelte';
	import TitleHeading from '$lib/components/TitleHeading.svelte';
	import SubTitleHeading from '$lib/components/SubTitleHeading.svelte';
	import GridButtonIcons from '$lib/components/GridButtonIcons.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardFooter from '$lib/components/CardFooter.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import Calendar from '$lib/components/Calendar.svelte';
	const notifications = [
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' },
		{ title: 'Test title', description: 'Esto es la prueba de descripcion numero 1' }
	];
	const data = [
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 1' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 2' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 3' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 4' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 5' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 6' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 7' },
		{ image: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', title: 'Google 8' }
	];
</script>

<Dashboard>
	<DashboardNavbar slot="navbar">
		<DashboardBrand slot="brand" title="Codeunic" logo="https://www.codeunic.com/images/logo.png" />
		<svelte:fragment slot="right">
			<Dropdown>
				<Button slot="trigger">
					<i class="fa fa-th" style="font-size:20px;" />
				</Button>
				<DropdownMenu>
					<GridButtonIcons {data} />
				</DropdownMenu>
			</Dropdown>
			<Button slot="trigger" on:click={expand}>
				<i class="fa fa-expand" style="font-size:20px;" />
			</Button>
			<Dropdown>
				<Button slot="trigger">
					<i class="fa fa-bell" style="font-size:20px;" />
				</Button>
				<DropdownMenu>
					<WidgetCard noPadding>
						<span slot="header">Notifications</span>
						<div>
							{#each notifications as not}
								<Item>
									<TitleHeading>{not.title}</TitleHeading>
									<SubTitleHeading>{not.description}</SubTitleHeading>
								</Item>
							{/each}
						</div>
						<span class="center" slot="footer">View More...</span>
					</WidgetCard>
				</DropdownMenu>
			</Dropdown>
			<Dropdown>
				<AvatarUser
					slot="trigger"
					showArrow
					title="Codeunic"
					image="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
				/>
				<DropdownMenu>
					<DropdownHeader>Welcome Grupsoftware</DropdownHeader>
					<DropdownItem icon="fa fa-user">Profile</DropdownItem>
					<DropdownItem icon="fa fa-cog">Settings</DropdownItem>
					<DropdownDivider />
					<DropdownItem icon="fa fa-lock">Logout</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</svelte:fragment>
	</DashboardNavbar>
	<DashboardSidebar slot="sidebar">
		<Menu>
			<MenuTitle>Menu</MenuTitle>
			<MenuItem active title="Dashboards" icon="fa fa-home" label="0.4" />
			<MenuTitle>Apps</MenuTitle>
			<MenuItem title="Calendar" icon="fa fa-calendar" />
			<MenuItem title="Chat" icon="fa fa-comments" />
			<MenuItem title="File" icon="fa fa-file" />
			<MenuItem title="Ecommerce" icon="fa fa-shop">
				<MenuItem title="File" icon="fa fa-file" />
				<MenuItem title="File" icon="fa fa-file" />
				<MenuItem title="File" icon="fa fa-file" />
			</MenuItem>
		</Menu>
	</DashboardSidebar>
	<DashboardBody slot="body">
		<DashboardRow>
			<Row>
				<Col>
					<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
				</Col>
				<Col>
					<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
				</Col>
				<Col>
					<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
				</Col>
				<Col>
					<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
				</Col>
			</Row>
		</DashboardRow>
		<DashboardRow>
			<Row>
				<Col sm="6">
					<Row>
						<Col sm="6">
							<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
						</Col>
						<Col sm="6">
							<MiniStat icon="fa fa-home" title="Orders" value="1,235" />
						</Col>
					</Row>
					<Subscribe
						class="mt-4"
						icon="fa fa-envelope-open"
						title="Subscribe!"
						subTitle="Subscribe our newletter and get notification to stay update."
						placeholder="Enter email address"
					/>
					<Card class="mt-4">
						<Calendar
							labels={['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']}
							months={[
								'Ene',
								'Feb',
								'Mar',
								'Abr',
								'May',
								'Jun',
								'Jul',
								'Ago',
								'Sep',
								'Oct',
								'Nov',
								'Dic'
							]}
							today={new Date()}
							year={2022}
							month={3}
						/>
					</Card>
				</Col>
				<Col sm="6">
					<CardWelcomeList
						title="Welcome back!"
						subTitle="Skote Crypto Dashboard"
						image="https://toppng.com/uploads/preview/web-png-jpg-transparent-stock-website-icon-blue-11563644926reanjnmk6x.png"
					>
						<List>
							<ListItem>If several languages coalesce</ListItem>
							<ListItem>Sed ut perspiciatis unde</ListItem>
							<ListItem>It would be necessary</ListItem>
						</List>
					</CardWelcomeList>
					<Card class="mt-4">
						<CardHeader>Active Users</CardHeader>
						<CardBody>
							<AvatarUser
								class="m-4"
								title="Rafa Gonzalez"
								subTitle="Codeunic"
								image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
							/>
							<AvatarUser
								class="m-4"
								title="Rafa Gonzalez"
								subTitle="Codeunic"
								image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
							/>
							<AvatarUser
								class="m-4"
								title="Rafa Gonzalez"
								subTitle="Codeunic"
								image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
							/>
							<AvatarUser
								class="m-4"
								title="Rafa Gonzalez"
								subTitle="Codeunic"
								image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
							/>
						</CardBody>
						<CardFooter class="center">All users</CardFooter>
					</Card>
				</Col>
			</Row>
		</DashboardRow>
	</DashboardBody>
</Dashboard>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
