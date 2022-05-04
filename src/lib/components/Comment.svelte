<script lang="ts">
	import Avatar from './Avatar.svelte';
	import CatTitle from './CatTitle.svelte';
	import Description from './Description.svelte';

	import Group from './Group.svelte';

	export let id: number;
	export let name: string;
	export let time: string;
	export let message: string;
	export let avatar: string;
</script>

<div class="Comment {$$props.class ?? ''}">
	<Group>
		<Avatar slot="left" image={avatar} title={name} />
		<div class="Comment__content">
			<CatTitle>{name}</CatTitle>
			<Description>{message}</Description>
		</div>
        <span>Like</span>
        <span>Reply</span>
        <span>{time}</span>
	</Group>
</div>

<style lang="scss">
	.Comment {
		&__content {
			background-color: white;
			padding: 10px;
			border-radius: 10px;
		}
        span+span{
            margin-left: 10px;
            margin-top: 10px;
            display: inline-block;
        }
	}
</style>
