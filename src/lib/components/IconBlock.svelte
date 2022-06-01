<script lang="ts">
	export let icon: string = null;
	export let title: string = '';
	export let isTitle: boolean = false;
	export let red: boolean = false;
</script>

<div
	on:click
	class="IconBlock {$$props.class ?? ''}"
	style={$$props.style ?? ''}
	class:isTitle
	class:red
	class:icon={!title && !isTitle}
>
	{#if !isTitle}
		{title}
	{/if}

	<div class={'IconBlock__icon'}>
		<i class={icon} />
	</div>
	{#if isTitle}
		<p class="IconBlock__title">{title}</p>
	{/if}
</div>

<style lang="scss">
	.IconBlock {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 20px;
		$then: &;
		color: #555;

		&__icon {
			margin-left: 10px;
			font-size: 1.25em;
			color: #555;
		}

		&:hover {
			cursor: pointer;
			background: #eee;
		}

		&.icon {
			$sz: 50px;
			background: #fff;
			border: 1px solid rgb(223, 223, 223);
			width: $sz;
			height: $sz;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0;

			#{$then}__icon {
				margin-left: 0;
			}
		}

		&.red {
			color: red;

			#{$then}__icon {
				color: red;
			}
		}

		&.isTitle {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100%;
			width: 146px;
			color: #555;

			#{$then}__icon {
				font-size: 1.25em;
				margin: 0;
			}

			#{$then}__title {
				margin: 0;
				font-size: 0.8em;
				font-weight: 500;
			}

			&:hover {
				cursor: pointer;
				background: #eee;
			}
		}
	}
</style>
