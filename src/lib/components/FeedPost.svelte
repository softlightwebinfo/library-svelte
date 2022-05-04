<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Avatar from './Avatar.svelte';
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardFooter from './CardFooter.svelte';
	import CardHeader from './CardHeader.svelte';
	import CatTitle from './CatTitle.svelte';
	import Description from './Description.svelte';
	import Comment from './Comment.svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownDivider from './DropdownDivider.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import DropdownMenu from './DropdownMenu.svelte';
	import Group from './Group.svelte';
	import SubCategory from './SubCategory.svelte';
	import Text from './Text.svelte';
	import WriteComment from './WriteComment.svelte';
	import FeedActions from './FeedActions.svelte';
	import type { IComment } from '$lib/interfaces/IComment';

	export let shadow = true;
	export let name: string;
	export let avatar: string;
	export let href: string;
	export let actionName: string = null;
	export let subCategory: string;
	export let description: string = null;
	export let images: string[] = [];
	export let likes = 0;
	export let comments: IComment[] = [];

	const dispatch = createEventDispatcher();
	const onClickImage = (image, index) => () => dispatch('image', { image, index });
</script>

<Card {shadow} class={`FeedPost ${$$props.class ?? ''}`}>
	<CardHeader spaceBetween alignCenter>
		<Group>
			<Avatar image={avatar} title={name} slot="left" />
			<CatTitle>
				<a {href}>{name}</a>
				<slot name="actionName">
					{#if actionName}
						<small>{actionName}</small>
					{/if}
				</slot>
			</CatTitle>
			<SubCategory>{subCategory}</SubCategory>
		</Group>
		<Dropdown>
			<Button icon="fa fa-ellipsis-h" slot="trigger" />
			<DropdownMenu>
				<DropdownItem>View</DropdownItem>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Report</DropdownItem>
				<DropdownDivider />
				<DropdownItem>Archive</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</CardHeader>
	<CardBody>
		{#if description}
			<Description>{description}</Description>
		{/if}
		{#if images?.length}
			<div class="FeedPost__images">
				{#each images as image, index}
					<img on:click={onClickImage(image, index)} src={image} alt="" />
				{/each}
			</div>
		{/if}
		<slot />
		<Text class="mt-4">{likes} likes</Text>
	</CardBody>
	<CardFooter>
		<FeedActions />
		<WriteComment class="mt-2" {avatar} {name} />
		<div class="comments">
			{#each comments as comment}
				<Comment {...comment} />
			{/each}
			<span>Load more comments (2 of {comments.length})</span>
		</div>
	</CardFooter>
</Card>

<style lang="scss">
	:global(.FeedPost) {
		:global(.FeedPost__images) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 10px;
			margin-top: 20px;
			img {
				width: 100%;
				height: 100%;
				display: block;
				object-fit: cover;
				border-radius: 10px;
				height: 250px;
			}
		}
	}
	.comments {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
