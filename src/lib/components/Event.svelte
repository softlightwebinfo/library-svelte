<script lang="ts">
	import CalendarMiniDay from './CalendarMiniDay.svelte';
	import Group from './Group.svelte';
	import dayjs from 'dayjs';
	import CatTitle from './CatTitle.svelte';
	import SubCategory from './SubCategory.svelte';
	import Text from './Text.svelte';
	import SubText from './SubText.svelte';

	export let startTime;
	export let endTime;
	export let title;
	export let subTitle;
	export let location;
	export let url;

	const _startTime = {
		month: dayjs(startTime).format('MMM'),
		day: dayjs(startTime).format('DD'),
		time: dayjs(startTime).format('HH:mm')
	};
	const _endTime = {
		month: dayjs(endTime).format('MMM'),
		day: dayjs(endTime).format('DD')
	};
</script>

<Group class="Event">
	<CalendarMiniDay slot="left" month={_startTime.month} day={_startTime.day} />
	<div>
		<CatTitle uppercase>
			<a href={url}>{title}</a>
		</CatTitle>
		<SubCategory>{subTitle}</SubCategory>
		<Text>Time: {_startTime.time}h</Text>
		<Text>Duration: {_startTime.month} {_startTime.day} - {_endTime.month} {_endTime.day}</Text>
		<SubText>Place: {location}</SubText>
	</div>
</Group>
