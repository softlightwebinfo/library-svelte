<script lang="ts">
	import AvatarUser from './AvatarUser.svelte';
	import Card from './Card.svelte';
	import CardBody from './CardBody.svelte';
	import CardHeader from './CardHeader.svelte';
	import Description from './Description.svelte';
	export let title, subTitle, image, description;
</script>

<Card class="UserReview">
	<CardBody>
		<AvatarUser {title} {subTitle} {image} />
		<Description class="mt-2">{description}</Description>
		<slot />
	</CardBody>
</Card>
