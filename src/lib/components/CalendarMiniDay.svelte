<script lang="ts">
	export let month;
	export let day;
</script>

<div class="CalendarMiniDay">
	<span class="CalendarMiniDay__month">
		<slot name="month">
			{month}
		</slot>
	</span>
	<span class="CalendarMiniDay__day">
		<slot name="day">
			{day}
		</slot>
	</span>
</div>

<style lang="scss">
	.CalendarMiniDay {
		width: 3.125rem;
		line-height: 1;
		display: flex;
		flex-direction: column;
		text-align: center;
		border-radius: 0.375rem;

		&__month {
			background-color: var(--bs-danger);
			color: #fff;
			border-radius: 0.375rem 0.375rem 0 0;
			padding: 0.25rem;
			font-weight: 600;
		}
		&__day {
			font-size: 1.728rem;
			padding: 0.25rem;
			border: 0.125rem solid rgba(230, 55, 87, 0.3);
			border-top: 0;
			border-radius: 0 0 0.375rem 0.375rem;
			color: #9da9bb;
			font-weight: 700;
		}
	}
</style>
