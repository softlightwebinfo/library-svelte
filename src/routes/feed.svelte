<script>
	import Container from '$lib/components/Container.svelte';
	import FeedCreatePost from '$lib/components/FeedCreatePost.svelte';
	import FeedPost from '$lib/components/FeedPost.svelte';
</script>

<Container class="m-10">
	<FeedCreatePost />
	<FeedPost
		class="mt-4"
		avatar="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
		name="Rafa Gonzalez"
		href="/user/rafa"
		actionName="shared an album"
		subCategory="11 hrs · Consett, UK"
		description="Rowan Sebastian Atkinson CBE is an English actor, comedian and screenwriter best known for his work on the sitcoms Blackadder and Mr. Bean."
		images={[
			'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
			'https://freesvg.org/img/nicubunu_Game_baddie_Basic_guy.png'
		]}
	/>
	<FeedPost
		class="mt-4"
		avatar="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
		name="Rafa Gonzalez"
		href="/user/rafa"
		subCategory="11 hrs · Consett, UK"
		description="Rowan Sebastian Atkinson CBE is an English actor, comedian and screenwriter best known for his work on the sitcoms Blackadder and Mr. Bean."
		comments={[
			{
				id: 1,
				name: 'Jessalyn Gilsig',
				message:
					'She starred as Jane Porter in The @Legend of Tarzan (2016), Tanya Vanderpoel in for which nominated for a Teen Choice Award, and many other awards.',
				time: '5hrs',
				avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
			},
			{
				id: 1,
				name: 'Jessalyn Gilsig',
				message:
					'She starred as Jane Porter in The @Legend of Tarzan (2016), Tanya Vanderpoel in for which nominated for a Teen Choice Award, and many other awards.',
				time: '5hrs',
				avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
			},
			{
				id: 1,
				name: 'Jessalyn Gilsig',
				message:
					'She starred as Jane Porter in The @Legend of Tarzan (2016), Tanya Vanderpoel in for which nominated for a Teen Choice Award, and many other awards.',
				time: '5hrs',
				avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
			}
		]}
	/>
	<FeedPost
		class="mt-4"
		avatar="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
		name="Rafa Gonzalez"
		href="/user/rafa"
		subCategory="11 hrs · Consett, UK"
		images={['https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg']}
	/>
</Container>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
