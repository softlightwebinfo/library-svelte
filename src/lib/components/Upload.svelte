<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let accept: string = 'image/*';
	export let multiple: boolean = true;
	export let title: string = 'Drop your images here';
	export let files;

	const onChange = (event) => {
		const file = event.files?.[0];

		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				dispatch('change', { event, files, preview: reader.result });
			});

			reader.readAsDataURL(file);

			return;
		}
	};
</script>

<div tabindex="0" class="Upload {$$props.class ?? ''}">
	<input
		bind:files
		on:change={onChange}
		{accept}
		{multiple}
		type="file"
		autocomplete="off"
		tabindex="-1"
		style="display: none;"
	/>
	<div>
		<slot>
			<i class="fa fa-upload" />
			<p>{title}</p>
		</slot>
	</div>
</div>

<style lang="scss">
	.Upload {
		border: 2px dashed gainsboro;
		border-radius: 0.25rem;
		height: 100%;
		cursor: pointer;
		padding: 4rem;
		text-align: center;
		&:hover {
			cursor: pointer;
		}
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			&:hover {
				cursor: pointer;
			}
		}
	}
	p,
	i {
		color: var(--bs-gray);
	}
	i {
		margin-right: 10px;
	}
</style>
