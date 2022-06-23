<script lang="ts">
	import AvatarUser from './AvatarUser.svelte';
    export let title, subTitle,image;
</script>

<article class="UserReview">
	<header>
		<AvatarUser {title} {subTitle} {image} />
	</header>
	<section />
</article>
