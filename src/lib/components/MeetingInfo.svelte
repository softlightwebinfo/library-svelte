<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import HeaderTimes from './HeaderTimes.svelte';
	import MeetLink from './MeetLink.svelte';
	import PermissionText from './PermissionText.svelte';
	import TextInfo from './TextInfo.svelte';
	import TextSmall from './TextSmall.svelte';
	const dispatch = createEventDispatcher();
	const onClose = () => dispatch('close');
	const onClickMeetLink = () => dispatch('meetLink');

	export let meetLink: string = null;
	export let textSmall: string = null;
	export let title: string;
</script>

<div class="MeetingInfo {$$props.class ?? ''}" style={$$props.style ?? ''}>
	<HeaderTimes on:click={onClose} {title} />
	<Button on:click class={'MeetingInfo__people-btn'} secondary>
		<i class="fa fa-user" />
		Add Others
	</Button>
	<TextInfo
		class="MeetingInfo__info"
		message={'Or share this meeting link with others you want in the meeting'}
	/>
	<MeetLink
		class="MeetingInfo__meet"
		title={meetLink ?? 'Some random URL'}
		onClick={onClickMeetLink}
	/>
	<PermissionText
		title={'People who use this meeting link must get your permission before they can join.'}
	/>
	<TextSmall class="MeetingInfo__text" title={textSmall ?? 'Joined as akshay@gmail.com'} />
</div>

<style lang="scss">
	.MeetingInfo {
		background: white;
		top: 50px;
		left: 50px;
		border-radius: 10px;
		padding: 25px;
		width: 350px;

		:global(.MeetingInfo__people-btn) {
			margin-top: 20px;
			margin-bottom: 15px;
		}

		:global(.MeetingInfo__meet) {
			margin-bottom: 15px;
		}

		:global(.MeetingInfo__text) {
			margin-top: 15px;
		}

		:global(.MeetingInfo__info) {
			margin-bottom: 15px;
		}
	}
</style>
