<script lang="ts">
	import Avatar from './Avatar.svelte';
	export let unread: boolean = true;
	export let avatar: string;
	export let to: string = null;
	export let name = null;
	export let time: string = null;
	export let emoji: string = null;
	export let padding: boolean = true;
	export let shadow: boolean = true;
</script>

<a class="Notification" href={to} class:unread class:padding class:shadow>
	<div class="Notification__avatar">
		<slot name="avatar">
			<Avatar title={name} image={avatar} />
		</slot>
	</div>
	<div class="Notification__body">
		<div class="Notification__content">
			<slot />
		</div>
		<span class="Notification__time">
			<span role="img" aria-label="Emoji">
				<slot name="emoji">{emoji}</slot>
			</span>
			<slot name="time">{time}</slot>
		</span>
	</div>
</a>

<style lang="scss">
	@import '../sass/_initial';
	.Notification {
		@extend %Card;
		color: var(--bs-black);
		text-decoration: none;
		display: flex;
		flex-direction: row;
		gap: 20px;
		font-size: 0.8333333333rem;
		transition: all 0.2s ease-in-out;
		&__time {
			margin-bottom: 0;
			color: var(--bs-gray);
			font-size: 0.8333333333rem;
		}
	}
	.shadow {
		box-shadow: var(--bs-big-shadow);
	}
	.padding {
		padding: 10px;
	}
</style>
