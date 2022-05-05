<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let accept: string = 'image/*';
	export let multiple: boolean = true;
	export let title: string = 'Drop your images here';
	export let files = null;

	const onChange = (event) => {
		const filesData = event.target.files;

		if (filesData?.[0]) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				dispatch('change', { event, files: filesData, preview: reader.result });
			});

			reader.readAsDataURL(filesData[0]);

			return;
		}
	};
</script>

<label tabindex="0" class="Upload {$$props.class ?? ''}">
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
</label>

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
