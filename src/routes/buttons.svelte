<script>
	import '$lib/style.scss';
	import Button from '$lib/components/Button.svelte';
	import Row from '$lib/components/Row.svelte';
	import Container from '$lib/components/Container.svelte';
</script>

<div class="m-10">
	<Container>
		<Button>Create account</Button>
		<Button primary>Normal button</Button>
		<Button disabled>Disabled button</Button>
		<Button secondary>Secondary button</Button>
		<Button primary>Primary button</Button>
		<Button success>Success button</Button>
		<Button warning>Warning button</Button>
		<Button danger>Danger button</Button>
		<Button info>Info button</Button>
		<Button light>Light button</Button>
		<Button dark>Dark button</Button>
	</Container>
	<Container class="mt-10">
		<Button rounded>Create account</Button>
		<Button rounded primary>Normal button</Button>
		<Button rounded disabled>Disabled button</Button>
		<Button rounded secondary>Secondary button</Button>
		<Button rounded primary>Primary button</Button>
		<Button rounded success>Success button</Button>
		<Button rounded warning>Warning button</Button>
		<Button rounded danger>Danger button</Button>
		<Button rounded info>Info button</Button>
		<Button rounded light>Light button</Button>
		<Button rounded dark>Dark button</Button>
	</Container>
	<Container class="mt-10">
		<Button icon="fa fa-check" rounded>Create account</Button>
		<Button icon="fa fa-check" rounded primary>Normal button</Button>
		<Button icon="fa fa-check" rounded disabled>Disabled button</Button>
		<Button icon="fa fa-check" rounded secondary>Secondary button</Button>
		<Button icon="fa fa-check" rounded primary>Primary button</Button>
		<Button icon="fa fa-check" rounded success>Success button</Button>
		<Button icon="fa fa-check" rounded warning>Warning button</Button>
		<Button icon="fa fa-check" rounded danger>Danger button</Button>
		<Button icon="fa fa-check" rounded info>Info button</Button>
		<Button icon="fa fa-check" rounded light>Light button</Button>
		<Button icon="fa fa-check" rounded dark>Dark button</Button>
	</Container>
</div>
