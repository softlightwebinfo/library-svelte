<script lang="ts">
	import Card from './Card.svelte';
	import Select from './Select.svelte';
	import CardBody from './CardBody.svelte';
	import Col from './Col.svelte';
	import FormGroup from './FormGroup.svelte';
	import Input from './Input.svelte';
	import Row from './Row.svelte';
	import { typeSelects } from '$lib/config';
	import Button from './Button.svelte';
	import Textarea from './Textarea.svelte';
	import Checkbox from './Checkbox.svelte';
	import Radio from './Radio.svelte';

	export let fields = [];

	const _typeSelects = Object.entries(typeSelects).map(([value, label]) => ({
		label,
		value
	}));

	let name;
	let type;
	let area;

	const addItem = () => {
		fields = [
			...fields,
			{
				name,
				type,
				area
			}
		];

		name = '';
		type = '';
		area = '';
	};

	const onDelete = (index) => () => {
		fields = fields.filter((_, i) => i != index);
	};
</script>

{#each fields as field, index}
	<div>
		<div class="label">
			{field.name}
			<i class="fa fa-trash" on:click={onDelete(index)} />
		</div>
		<FormGroup>
			{#if field.type == 11}
				<Select
					placeholder="Selecciona una opcion"
					rows={field.area.split(',').map((item) => ({ label: item, value: item }))}
				/>
			{:else if field.type == 8}
				{#each field.area.split(',') as item}
					<Checkbox block label={item} />
				{/each}
			{:else if field.type == 9}
				{#each field.area.split(',') as item}
					<Radio name={field.name} value="2" label={item} />
				{/each}
			{:else if field.type == 10}
				<Textarea placeholder="Enter {field.name}" />
			{:else}
				<Input placeholder="Enter {field.name}" type={typeSelects[field.type]} />
			{/if}
		</FormGroup>
	</div>
{/each}
<Card>
	<CardBody>
		<Row>
			<Col xs="12" md="6">
				<FormGroup label="Name">
					<Input placeholder="Name" bind:value={name} />
				</FormGroup>
			</Col>
			<Col xs="12" md="6">
				<FormGroup label="Type">
					<Select
						on:selected={({ detail }) => (type = detail.value)}
						placeholder="Selecciona un tipo"
						rows={_typeSelects}
					/>
				</FormGroup>
			</Col>

			{#if [8, 9].includes(Number(type))}
				<Col xs="12" md="12">
					<FormGroup label="Field options">
						<Textarea placeholder="Field option" bind:value={area} />
						<small>* Separate your options with comma</small>
					</FormGroup>
				</Col>
			{/if}
		</Row>
		<Button on:click={addItem} icon="fa fa-plus" shadow>Add item</Button>
	</CardBody>
</Card>

<style lang="scss">
	.label {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	i {
		cursor: pointer;
	}
</style>
