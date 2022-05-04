<script>
	import { createEventDispatcher } from 'svelte';

	import { AvatarUser } from '.';
	import AvatarTitle from './AvatarTitle.svelte';
	import Button from './Button.svelte';
	import ButtonToolbar from './ButtonToolbar.svelte';
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardFooter from './CardFooter.svelte';
	import CardHeader from './CardHeader.svelte';
	import Textarea from './Textarea.svelte';
	import Toolbar from './Toolbar.svelte';
	export let textPlaceholder = 'What do yoy want to talk about';
	export let textTitle = 'Create post';
	export let avatar =
		'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg';
	export let shadow = true;

	const dispatch = createEventDispatcher();

	const onClickImage = () => dispatch('image');
	const onClickEvent = () => dispatch('event');
	const onClickCheck = () => dispatch('check');
	const onClickPublish = () => dispatch('publish');
</script>

<Card {shadow}>
	<CardHeader alignCenter>
		<AvatarUser title={textTitle} image={avatar} />
	</CardHeader>
	<CardBody>
		<Textarea simpleHeight transparent placeholder={textPlaceholder} />
	</CardBody>
	<CardFooter>
		<Toolbar spaceBetween>
			<ButtonToolbar>
				<Button on:click={onClickImage} shadow rounded icon="fa fa-image">Image</Button>
				<Button on:click={onClickEvent} shadow rounded icon="fa fa-calendar">Event</Button>
				<Button on:click={onClickCheck} shadow rounded icon="fa fa-map">Check in</Button>
			</ButtonToolbar>
			<ButtonToolbar>
				<Button on:click={onClickPublish} icon="fa fa-envelope" rounded shadow primary>
					Publish
				</Button>
			</ButtonToolbar>
		</Toolbar>
	</CardFooter>
</Card>
