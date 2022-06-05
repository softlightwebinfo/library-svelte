<script lang="ts">
	import CallFooter from '$lib/components/CallFooter.svelte';
	import CallHeader from '$lib/components/CallHeader.svelte';
	import MeetingInfo from '$lib/components/MeetingInfo.svelte';
	import type { IMeetingData } from '$lib/interfaces/IMeetingData';

	export let meeting: IMeetingData;
</script>

<div class="CallVideo {$$props.class ?? ''}">
	<video id={'video'} class="CallVideo__video" src={''} controls />
	<CallHeader class="CallVideo__header" />
	<CallFooter class="CallVideo__footer" />
	{#if meeting.show}
		<MeetingInfo class="CallVideo__info" {...meeting} />
	{/if}
</div>

<style lang="scss">
	.CallVideo {
		&__video {
			height: 100vh;
			width: 100%;
			object-fit: cover;
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
		}

		:global(.CallVideo__info) {
			margin: 40px;
		}
	}
</style>
