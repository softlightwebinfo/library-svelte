<script>
	import Notification from '$lib/components/Notification.svelte';
</script>

<div style="max-width: 25rem">
	<Notification avatar="https://via.placeholder.com/150" time="Just Now" to="#!" unread={false} emoji="💬">
		<strong>Emma Watson</strong> replied to your comment : "Hello world 😍"
	</Notification>
</div>

<style lang="scss" global>
	@import '../lib/style.scss';
</style>
